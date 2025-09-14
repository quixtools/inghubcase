import { LitElement, html } from 'lit';

import '../base-button/index.js';
import '../base-listpanel/index.js';

import { baseDropDownStyles } from './base-dropdown-styles.js';

export class BaseDropdown extends LitElement {

  static styles = [baseDropDownStyles];

  static properties = {
    items: { type: Array },
    open: { type: Boolean },
  };

  constructor() {
    super();
    this.items = [];
    this.open = false;
    this.boundOutsideClick = this.handleOutsideClick.bind(this);
    this.handleEventBind();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.boundOutsideClick);
  }

  toggleDropdown(e) {
    e.stopPropagation();
    this.open = !this.open;
    this.handleEventBind();
  }

  handleOutsideClick(e) {
    if (!this.contains(e.target)) {
      this.open = false;
      this.handleEventBind();
    }
  }
  
  handleEventBind() {
    if (this.open) {
      document.addEventListener('click', this.boundOutsideClick);
    } else {
      document.removeEventListener('click', this.boundOutsideClick);
    }
  }

  handleItemClick(e) {
    const item = e.detail;
    this.open = false;
    this.dispatchEvent(new CustomEvent('dropdown-select', { detail: item }));
  }

  render() {
    return html`
      <div class="dropdown-toggle" @click=${this.toggleDropdown}><slot></slot></div>
      <div class="dropdown-panel" ?open=${this.open}>
        <base-listpanel
          .dataList=${this.items}
          @item-click=${this.handleItemClick}
        ></base-listpanel>
      </div>
    `;
  }
}

customElements.define('base-dropdown', BaseDropdown);