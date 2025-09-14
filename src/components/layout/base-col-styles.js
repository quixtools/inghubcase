import { css } from 'lit';

export const baseColStyles = css`
:host {
  width: 33.33333333%;
  flex: 0 0 auto
  margin: 1rem 0;
  padding: 0 0.5rem;
  box-sizing: border-box;
}
@media (max-width: 767px) {
  :host {
    width: 100%;
    flex: 0 0 auto;
  }
}
`;