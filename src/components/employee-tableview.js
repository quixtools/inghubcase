import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import { msg, str, updateWhenLocaleChanges } from '@lit/localize';
import { getLocale } from '../utils/localization.js';

import { useEmployeeStore } from '../stores/employee-store.js';
import { employeeListHeaders } from '../data/employee-list.js';

import '../components/base-datatable/index.js';
import './base-modal/index.js';
import './base-button/index.js';

import { spacingStyles } from '../global-styles/spacing-styles.js';

export class EmployeeTableView extends LitElement {
  static styles = [
    css`:host { display: block; }`,
    spacingStyles
  ];

  static properties = {
    employeeList: { type: Array },
    selectedEmployeeToDelete: { type: Object },
    selectedEmployeesToDelete: { type: Array },
    visibleDeleteConfirm: { type: Boolean },
    visibleDeletesConfirm: { type: Boolean },
  };

  constructor() {
    super();
    this.visibleDeleteConfirm = false;
    this.visibleDeletesConfirm = false;
    this.selectedEmployeeToDelete = null;
    this.selectedEmployeesToDelete = [];
    useEmployeeStore.subscribe((state) => {
      this.employeeList = [...state.employees];
    });
    this.employeeList = useEmployeeStore.getState().employees;
    updateWhenLocaleChanges(this);
  }

  handleRowDelete(row) {
    this.selectedEmployeeToDelete = row;
    this.visibleDeleteConfirm = true;
  }

  handleRowDeleteConfirm() {
    useEmployeeStore.getState().deleteEmployee(this.selectedEmployeeToDelete.id);
    this.visibleDeleteConfirm = false;
  }

  handleRowsDelete(rows) {
    this.selectedEmployeesToDelete = rows;
    this.visibleDeletesConfirm = true;
  }

  handleRowsDeleteConfirm() {
    this.selectedEmployeesToDelete.forEach(item => {
      useEmployeeStore.getState().deleteEmployee(item);
    });
    this.visibleDeletesConfirm = false;
  }

  render() {
    return html`
      <base-datatable
        .data=${this.employeeList}
        .dataHeader=${employeeListHeaders[getLocale()]}
        .pageSize=${10}
        @row-edit=${(e) => Router.go(`/employee-form/${e.detail.id}`)}
        @row-delete=${(e) => this.handleRowDelete(e.detail)}
        @rows-delete=${(e) => this.handleRowsDelete(e.detail)}
      ></base-datatable>
      <base-modal title="${msg('Are you sure?')}" ?open=${this.visibleDeleteConfirm} @modal-close=${() => (this.visibleDeleteConfirm = false)}>
        <p slot="body">
          ${msg(str`Selected Employee record of ${this.selectedEmployeeToDelete?.firstName} ${this.selectedEmployeeToDelete?.lastName} will be deleted.`)}
        </p>
        <div slot="footer">
          <base-button class="primary block" @click=${this.handleRowDeleteConfirm}>${msg('Proceed')}</base-button>
          <base-button class="secondary outlined block mt-5" @click=${() => (this.visibleDeleteConfirm = false)}>${msg('Cancel')}</base-button>
        </div>
      </base-modal>
      <base-modal title="${msg('Are you sure?')}" ?open=${this.visibleDeletesConfirm} @modal-close=${() => (this.visibleDeletesConfirm = false)}>
        <p slot="body">
          ${msg('Selected Employee records will be deleted.')}
        </p>
        <div slot="footer">
          <base-button class="primary block" @click=${this.handleRowsDeleteConfirm}>${msg('Proceed')}</base-button>
          <base-button class="secondary outlined block mt-5" @click=${() => (this.visibleDeletesConfirm = false)}>${msg('Cancel')}</base-button>
        </div>
      </base-modal>
    `;
  }
}

customElements.define('employee-tableview', EmployeeTableView);