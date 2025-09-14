import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import { msg, str, updateWhenLocaleChanges } from '@lit/localize';
import { getLocale } from '../utils/localization.js';

import { useEmployeeStore } from '../stores/employee-store.js';
import { employeeListHeaders } from '../data/employee-list.js';

import './base-card/index.js';

import { cardViewStyles } from './employee-cardview-styles.js';
import { spacingStyles } from '../global-styles/spacing-styles.js';

export class EmployeeCardView extends LitElement {

  static styles = [cardViewStyles, spacingStyles];

  static properties = {
    employeeList: { type: Array },
    pageData: { type: Array },
    selectedEmployeeToDelete: { type: Object },
    visibleDeleteConfirm: { type: Boolean },
    pageSize: { type: Number },
    currentPage: { type: Number },
    totalPages: { type: Number },
  };

  constructor() {
    super();
    this.pageSize = 4;
    this.currentPage = 1;
    this.totalPages = 1;
    this.visibleDeleteConfirm = false;
    this.selectedEmployeeToDelete = null;
    useEmployeeStore.subscribe((state) => {
      this.employeeList = [...state.employees];
    });
    this.employeeList = useEmployeeStore.getState().employees;
    this.pageData = [];
    updateWhenLocaleChanges(this);
  }

  willUpdate(changedProps) {
    if (changedProps.has('employeeList')) {
      this.updateCardViewData();
    }
  }

  updateCardViewData() {
    this.totalPages = Math.ceil(this.employeeList.length / this.pageSize) || 1;
    const start = (this.currentPage - 1) * this.pageSize;
    this.pageData = this.employeeList.slice(start, start + this.pageSize);
  }

  onPageChange(e) {
    this.currentPage = e.detail.page;
    this.updateCardViewData();
  }

  handleClickEdit(row) {
    Router.go(`/employee-form/${row.id}`);
  }

  handleRowDelete(row) {
    this.selectedEmployeeToDelete = row;
    this.visibleDeleteConfirm = true;
  }

  handleRowDeleteConfirm() {
    useEmployeeStore.getState().deleteEmployee(this.selectedEmployeeToDelete.id);
    this.visibleDeleteConfirm = false;
  }

  render() {
    return html`
      <div class="card-container">
        ${this.pageData.map(cardData => html`
          <base-card .data=${cardData} .dataHeader=${employeeListHeaders[getLocale()]}>
            <base-button class="secondary" @click=${() => this.handleClickEdit(cardData)}>${msg('Edit')}</base-button>
            <base-button class="primary" @click=${() => this.handleRowDelete(cardData)}>${msg('Delete')}</base-button>
          </base-card>
        `)}
      </div>
      <base-pagination
        .totalPages=${this.totalPages}
        .currentPage=${this.currentPage}
        @page-change=${(e) => this.onPageChange(e)}
      ></base-pagination>
      <base-modal title=${msg('Are you sure?')} ?open=${this.visibleDeleteConfirm} @modal-close=${() => (this.visibleDeleteConfirm = false)}>
        <p slot="body">
          ${msg(str`Selected Employee record of ${this.selectedEmployeeToDelete?.firstName} ${this.selectedEmployeeToDelete?.lastName} will be deleted.`)}
        </p>
        <div slot="footer">
          <base-button class="primary block" @click=${this.handleRowDeleteConfirm}>${msg('Proceed')}</base-button>
          <base-button class="secondary outlined block mt-5" @click=${() => (this.visibleDeleteConfirm = false)}>${msg('Cancel')}</base-button>
        </div>
      </base-modal>
    `;
  }
}
customElements.define('employee-cardview', EmployeeCardView);