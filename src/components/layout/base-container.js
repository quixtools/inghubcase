import { LitElement, html } from 'lit';

import { baseContainerStyles } from './base-container-styles.js';

export class BaseContainer extends LitElement {

  static styles = [baseContainerStyles];

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('base-container', BaseContainer);