import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../../../src/components/base-button/index.js';

describe('<base-button>', () => {
  it('renders without crashing', async () => {
    const el = await fixture(html`<base-button></base-button>`);
    expect(el).to.exist;
  });

  it('renders slotted content', async () => {
    const el = await fixture(html`<base-button>Click me</base-button>`);
    expect(el.textContent).to.equal('Click me');
  });

  it('fires click event when clicked', async () => {
    const el = await fixture(html`<base-button>Click</base-button>`);
    const button = el.shadowRoot.querySelector('button');
    let clicked = false;
    button.addEventListener('click', () => { clicked = true; });
    button.click();
    expect(clicked).to.be.true;
  });
});