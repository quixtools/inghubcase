import { css } from 'lit';

export const baseButtonStyles = css`
:host {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: inline-block;
}

button {
  font-size: inherit;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  margin: 0;
  padding: 0.5rem 1.25rem;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.375rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

:host(.primary) button {
  color: var(--color-white);
  border-color: var(--color-primary);
  background-color: var(--color-primary);
}
:host(.primary.outlined) button {
  color: var(--color-primary);
  border-color: var(--color-primary);
  background: transparent;
}
:host(.primary.text) button {
  color: var(--color-primary);
  border-color: transparent;
  background: transparent;
}

:host(.secondary) button {
  color: var(--color-white);
  border-color: var(--color-secondary);
  background-color: var(--color-secondary);
}
:host(.secondary.outlined) button {
  color: var(--color-secondary);
  border-color: var(--color-secondary);
  background: transparent;
}
:host(.secondary.text) button {
  color: var(--color-secondary);
  border-color: transparent;
  background: transparent;
}

:host(.block) {
  width: 100%;
  display: block;
}
:host(.block) button {
  width: 100%;
  display: block;
}
:host(.wide) button {
  width: 16rem;
}
@media (max-width: 767px) {
  :host(.wide) {
    width: 100%;
    display: block;
  }
  :host(.wide) button {
    width: 100%;
    display: block;
  }
}
`;