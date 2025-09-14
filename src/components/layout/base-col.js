import { LitElement, html } from 'lit';

import { baseColStyles } from './base-col-styles.js';

export class BaseCol extends LitElement {

  static styles = [baseColStyles];

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('base-col', BaseCol);