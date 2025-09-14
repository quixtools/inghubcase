import { LitElement, html } from 'lit';

import { baseInputStyles } from './base-input-styles.js';

export class BaseInput extends LitElement {

  static styles = [baseInputStyles];

  static properties = {
    value: { type: String },
    label: { type: String },
    type: { type: String },
    name: { type: String },
    placeholder: { type: String },
    error: { type: String },
  };

  constructor() {
    super();
    this.value = '';
    this.label = '';
    this.type = 'text';
    this.name = '';
    this.placeholder = '';
    this.error = '';
  }

  onInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('value-changed', { detail: { value: this.value }, bubbles: true, composed: true }));
  }

  render() {
    return html`
      ${this.label ? html`<label for=${this.name}>${this.label}</label>` : ''}
      <input
        .value=${this.value}
        type=${this.type}
        id=${this.name}
        name=${this.name}
        placeholder=${this.placeholder}
        @input=${this.onInput}
      />
      <span class="error-msg">${this.error ? this.error : ''}</span>
    `;
  }
}

customElements.define('base-input', BaseInput);