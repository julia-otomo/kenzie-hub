import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  label {
    font-size: var(--headline);
    color: var(--grey-0);
  }

  input {
    height: 38.5px;
    outline: none;
    border: none;
    border-radius: var(--border-radius-default);
    padding: 0 1rem;
    box-sizing: border-box;
    background-color: var(--grey-2);
    color: var(--grey-0);
  }

  input:focus {
    border: 0.98px solid var(--grey-0);
  }

  p {
    font-size: var(--headline);
    color: var(--grey-0);
  }
`;
