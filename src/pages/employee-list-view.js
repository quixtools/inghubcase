import { LitElement, html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

import '../components/employee-tableview.js';
import '../components/employee-cardview.js';
import '../components/page-header/index.js';
import '../components/page-content/index.js';
import '../components/base-button/index.js';

import { employeeListStyles } from '../page-styles/employee-list-styles.js';

export class EmployeeListView extends LitElement {
  
  static styles = [employeeListStyles];

  static properties = {
    selectedEmployeeListView: { type: String },
  };

  constructor() {
    super();
    this.selectedEmployeeListView = 'table';
    updateWhenLocaleChanges(this);
  }

  setEmployeeListView(incSelection) {
    this.selectedEmployeeListView = incSelection;
  }

  render() {
    return html`
      <page-header>
        <h1>${msg('Employee List')}</h1>
        <div class="page-options">
          <base-button class="primary text" @click=${() => this.setEmployeeListView('table')}><icon-quix icon="bars"></icon-quix></base-button>
          <base-button class="primary text" @click=${() => this.setEmployeeListView('card')}><icon-quix icon="grid3"></icon-quix></base-button>
        </div>
      </page-header>
      <page-content>
        ${(this.selectedEmployeeListView === 'table') ? html`<employee-tableview></employee-tableview>` : html`<employee-cardview></employee-cardview>`}
      </page-content>
    `;
  }
}

customElements.define('employee-list-view', EmployeeListView);