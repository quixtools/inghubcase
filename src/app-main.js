import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';

import './pages/home-view.js';
import './pages/employee-list-view.js';
import './pages/employee-form.js';

import './components/page-nav/index.js';

import { appStyles } from './page-styles/app-styles.js';

class AppMain extends LitElement {

  static styles = [appStyles];

  constructor() {
    super();
    this.router = null;
  }

  firstUpdated() {
    super.firstUpdated();
    this.router = new Router(this.shadowRoot.querySelector('#outlet'));
    this.router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/employee-list', component: 'employee-list-view' },
      { path: '/employee-form', component: 'employee-form' },
      { path: '/employee-form/:id', component: 'employee-form' },
      { path: '(.*)', redirect: '/' },
    ]);
  }

  render() {
    return html`
      <page-nav></page-nav>
      <main id="outlet"></main>
    `;
  }
}

customElements.define('app-main', AppMain);