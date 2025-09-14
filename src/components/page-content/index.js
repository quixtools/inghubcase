import { LitElement, html } from 'lit';

import { pageContentStyles } from './page-content-styles.js';

export class PageContent extends LitElement {

  static styles = [pageContentStyles];

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('page-content', PageContent);