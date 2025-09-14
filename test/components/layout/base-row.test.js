import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../../../src/components/layout/base-row.js';

describe('<base-row>', () => {
  it('renders without crashing', async () => {
    const el = await fixture(html`<base-row></base-row>`);
    expect(el).to.exist;
  });

  it('renders slotted content', async () => {
    const el = await fixture(html`<base-row>Inside text</base-row>`);
    expect(el).lightDom.to.equal('Inside text');
  });
});