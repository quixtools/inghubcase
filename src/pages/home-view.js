import { LitElement, html, css } from 'lit';

import '../components/page-content/index.js';

export class HomeView extends LitElement {

  static styles = [
    css`
      :host {
        width: 100%;
        margin: 0;
        padding: 0 1rem;
        box-sizing: border-box;
        display: block;
      }
    `,
  ];

  constructor() {
    super();
  }

  render() {
    return html`
      <page-content>
        <h1>Employee Management Application</h1>
        <p>for Frontend Case Study of ING Hubs Turkey by Mehmet Fatih Taşkın</p>
      </page-content>
    `;
  }
}

customElements.define('home-view', HomeView);