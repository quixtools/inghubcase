import { css } from 'lit';

export const baseModalStyles = css`
:host {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  opacity: 0;
  will-change: opacity;
  transition: opacity 400ms ease-in-out;
  pointer-events: none;
}
:host([open]) {
  opacity: 1;
  pointer-events: auto;
}

.backdrop {
  position: fixed;
  width: 100%;
  height: 100dvh;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  width: 90%;
  max-width: 36rem;
  margin: 0;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background-color: var(--color-white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}
.modal header {
  width: 100%;
  margin: 0;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-title {
  color: var(--color-primary);
  font-size: 1.25rem;
  font-weight: 600;
}
.modal header svg {
  font-size: 1.5rem;
  cursor: pointer;
}

.modal main {
  width: 100%;
  margin: 0;
  padding: 1rem;
  box-sizing: border-box;
}

.modal footer {
  width: 100%;
  margin: 0;
  padding: 1rem;
  box-sizing: border-box;
}
`;