import { css } from 'lit';

export const cardViewStyles = css`
:host {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  display: block;
}

.card-container {
  width: 100%;
  margin: 0 auto 2rem auto;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
@media (max-width: 767px) {
  .card-container {
    grid-template-columns: 1fr;
  }

`;