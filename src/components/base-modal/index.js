import { LitElement, html } from 'lit';

import { baseModalStyles } from './base-modal-styles.js';

export class BaseModal extends LitElement {
  
  static styles = [baseModalStyles];

  static properties = {
    open: { type: Boolean, reflect: true },
    title: { type: String },
  };

  constructor() {
    super();
    this.open = false;
    this.title = '';
  }

  closeModal() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('modal-close'));
  }

  backdropClose(e) {
    if (e.target.classList.contains('backdrop')) {
      this.closeModal();
    }
  }

  render() {
    return html`
      <div class="backdrop" @click=${this.backdropClose}>
        <div class="modal">
          <header>
            <span class="modal-title">${this.title}</span>
            <span @click=${this.closeModal}><icon-quix icon="x"></icon-quix></span>
          </header>
          <main><slot name="body"></slot></main>
          <footer><slot name="footer"></slot></main>
        </modal>
      </div>
    `;
  }
}

customElements.define('base-modal', BaseModal);