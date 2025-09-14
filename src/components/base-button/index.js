import { LitElement, html } from 'lit';

import { baseButtonStyles } from './base-button-styles.js';

export class BaseButton extends LitElement {
  
  static styles = [baseButtonStyles];

  render() {
    return html`<button><slot></slot></button>`;
  }
}

customElements.define('base-button', BaseButton);