import { LitElement, html } from 'lit';

import '../base-pagination/index.js';

import { baseDataTableStyles } from './base-datatable-styles.js';

export class BaseDataTable extends LitElement {

  static styles = [baseDataTableStyles];

  static properties = {
    data: { type: Array },
    pageData: { type: Array },
    dataHeader: { type: Array },
    pageSize: { type: Number },
    currentPage: { type: Number },
    totalPages: { type: Number },
    selectedRows: { type: Array },
  };

  constructor() {
    super();
    this.data = [];
    this.pageData = [];
    this.dataHeader = [];
    this.dataKeys = [];
    this.pageSize = 10;
    this.currentPage = 1;
    this.totalPages = 1;
    this.selectedRows = [];
  }

  willUpdate(changedProps) {
    if (changedProps.has('data')) {
      this.updateTableData();
    }
  }

  updateTableData() {
    this.dataKeys = Object.keys(this.data[0] || {}).filter(key => key !== 'id');
    this.totalPages = Math.ceil(this.data.length / this.pageSize) || 1;
    const start = (this.currentPage - 1) * this.pageSize;
    this.pageData = this.data.slice(start, start + this.pageSize);
  }

  isRowSelected(id) {
    return this.selectedRows.includes(id);
  }

  toggleRowSelection(id, e) {
    if (e.target.checked) {
      this.selectedRows = [...this.selectedRows, id];
    } else {
      this.selectedRows = this.selectedRows.filter(rowId => rowId !== id);
    }
  }

  toggleSelectAll(e) {
    if (e.target.checked) {
      this.selectedRows = this.pageData.map(row => row.id);
    } else {
      this.selectedRows = [];
    }
  }

  onPageChange(e) {
    this.currentPage = e.detail.page;
    this.updateTableData();
  }

  handleEdit(rowData) {
    this.dispatchEvent(new CustomEvent('row-edit', { detail: rowData }));
  }

  handleDelete(rowData) {
    this.dispatchEvent(new CustomEvent('row-delete', { detail: rowData }));
  }

  handleDeleteSelected() {
    this.dispatchEvent(
      new CustomEvent('rows-delete', { detail: this.selectedRows })
    );
    this.selectedRows = [];
  }

  render() {
    if (!this.data || this.data.length === 0) {
      return html`<p class="datatable-nodata">No data available</p>`;
    }
    return html`
      <div class="datatable-container">
        <div class="datatable-options">
          ${this.selectedRows.length > 0 ? html `<base-button class="primary" @click=${this.handleDeleteSelected}>Delete Selected</base-button>` : ''}
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" .checked=${this.pageData.every(row => this.isRowSelected(row.id)) } @change=${ this.toggleSelectAll} />
              </th>
              ${this.dataKeys.map(key => html`<th>${this.dataHeader[key]}</th>`)}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${this.pageData.map(rowData => html`
              <tr>
                <td>
                  <input type="checkbox" .checked=${this.isRowSelected(rowData.id)} @change=${(e) => this.toggleRowSelection(rowData.id, e)} />
                </td>
                ${this.dataKeys.map(key => html`<td>${rowData[key]}</td>`)}
                <td>
                  <button class="table-actionbutton" @click=${() => this.handleEdit(rowData)}>
                    <icon-quix icon="pencil-filled"></icon-quix>
                  </button>
                  <button class="table-actionbutton" @click=${() => this.handleDelete(rowData)}>
                    <icon-quix icon="trash-filled"></icon-quix>
                  </button>
                </td>
              </tr>
            `)}
          </tbody>
        </table>
        <base-pagination
          .totalPages=${this.totalPages}
          .currentPage=${this.currentPage}
          @page-change=${(e) => this.onPageChange(e)}
        ></base-pagination>
      </div>
    `;
  }
}

customElements.define('base-datatable', BaseDataTable);