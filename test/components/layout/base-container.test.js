import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../../../src/components/layout/base-container.js';

describe('<base-container>', () => {
  it('renders without crashing', async () => {
    const el = await fixture(html`<base-container></base-container>`);
    expect(el).to.exist;
  });

  it('renders slotted content', async () => {
    const el = await fixture(html`<base-container>Inside text</base-container>`);
    expect(el).lightDom.to.equal('Inside text');
  });
});