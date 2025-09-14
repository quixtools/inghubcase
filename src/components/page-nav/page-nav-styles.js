import { css } from 'lit';

export const pageNavigationStyles = css`
:host {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: block;
}

header {
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  background-color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#header-logocontainer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#header-logocontainer > span {
  font-weight: 500;
  margin-left: 0.5rem;
}

#header-optionscontainer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.options-link {
  color: var(--color-primary);
  font-size: 0.875rem;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 1;
  text-decoration: none;
  margin: 0 0.5rem 0 0;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.options-link svg {
  vertical-align: middle;
  margin: 0 0.25rem 0 0;
  padding: 0;
  box-sizing: border-box;
}
@media (max-width: 767px) {
  .options-link span {
    display: none;
  }
}
`;