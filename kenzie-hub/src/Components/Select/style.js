import styled from "styled-components";

export const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: var(--headline);
    color: var(--grey-0);
  }

  select {
    height: 38.5px;
    outline: none;
    border: none;
    background-color: var(--grey-2);
    border-radius: var(--border-radius-default);
    color: var(--grey-1);
    padding: 0 1rem;
    box-sizing: border-box;
    cursor: pointer;

    option {
      color: var(--grey-0);
    }
  }

  p {
    font-size: var(--headline);
    color: var(--color-primary);
    line-height: var(--line-height-default);
  }
`;
