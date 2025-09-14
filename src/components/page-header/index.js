import { LitElement, html } from 'lit';

import { pageHeaderStyles } from './page-header-styles.js';

export class PageHeader extends LitElement {

  static styles = [pageHeaderStyles];

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('page-header', PageHeader);