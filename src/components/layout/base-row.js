import { LitElement, html } from 'lit';

import { baseRowStyles } from './base-row-styles.js';

export class BaseRow extends LitElement {

  static styles = [baseRowStyles];

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('base-row', BaseRow);