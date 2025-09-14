import { LitElement, html } from 'lit';

import { baseListPanelStyles } from './base-listpanel-styles.js';

export class BaseListPanel extends LitElement {

  static styles = [baseListPanelStyles];

  static properties = {
    dataList: { type: Array },
  };

  constructor() {
    super();
    this.dataList = [];
  }

  handleClick(item) {
    this.dispatchEvent(new CustomEvent('item-click', { detail: item, bubbles: true, composed: true }));
  }

  render() {
    return html`
      <div class="base-listpanel">
        <ul>
          ${this.dataList.map(
            (item) => html`<li><span @click=${() => this.handleClick(item)}>${item.label}</span></li>`
          )}
        </ul>
      </div>
    `;
  }
}

customElements.define('base-listpanel', BaseListPanel);