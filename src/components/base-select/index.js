import { LitElement, html } from 'lit';

import { baseSelectStyles } from './base-select-styles.js';

export class BaseSelect extends LitElement {

  static styles = [baseSelectStyles];

  static properties = {
    value: { type: String },
    label: { type: String },
    options: { type: Array }
  };

  constructor() {
    super();
    this.value = '';
    this.label = '';
    this.options = [];
  }

  render() {
    return html`
      ${this.label ? html`<label>${this.label}</label>` : ''}
      <select .value=${this.value} @change=${this.onChange}>
        ${this.options.map((item) => html`<option .value=${item} ?selected=${item === this.value}>${item}</option>`)}
      </select>
    `;
  }

  onChange(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('value-changed', { detail: { value: this.value }, bubbles: true, composed: true }));
  }

}

customElements.define('base-select', BaseSelect);