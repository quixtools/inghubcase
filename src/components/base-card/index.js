import { LitElement, html } from 'lit';

import { baseCardStyles } from './base-card-styles.js';

export class BaseCard extends LitElement {

  static styles = [baseCardStyles];

  static properties = {
    data: { type: Object },
    dataHeader: { type: Array },
  };

  constructor() {
    super();
    this.data = [];
    this.dataHeader = [];
    this.dataKeys = [];
  }

  willUpdate(changedProps) {
    if (changedProps.has('data')) {
      this.updateCardData();
    }
  }

  updateCardData() {
    this.dataKeys = Object.keys(this.data || {}).filter(key => key !== 'id');
  }

  render() {
    return html`
      <div class="grid-container">
        ${this.dataKeys.map(key => html`
          <div class="grid-item"><span>${this.dataHeader[key]}</span> ${this.data[key]}</div>
        `)}
      </div>
      <slot></slot>
    `;
  }
}

customElements.define('base-card', BaseCard);