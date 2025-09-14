import { css } from 'lit';

export const baseCardStyles = css`
:host {
  witdh: 100%;
  margin: 0;
  padding: 1rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  background-color: var(--color-white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: block;
}

.grid-container {
  witdh: 100%;
  margin: 0 0 2rem 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.grid-container .grid-item > span {
  color: var(--color-grey-400);
  font-size: 0.75rem;
  display: block;
}

@media (max-width: 575px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
`;