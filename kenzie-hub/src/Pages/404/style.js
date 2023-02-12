import styled from "styled-components";

export const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;

  h1 {
    font-size: 8rem;
    font-weight: var(--font-weight-bold);
    color: var(--grey-0);
    text-align: center;
    line-height: var(--line-height-default);
  }

  a {
    width: 15rem;
    height: 7rem;
    background-color: var(--color-primary);
    text-decoration: none;
    cursor: pointer;
    border-radius: var(--border-radius-default);
    text-align: center;
    color: var(--grey-0);
    font-size: var(--title-3);
    line-height: var(--line-height-default);
    padding: 1rem;
    box-sizing: border-box;
  }

  a:hover {
    background-color: var(--color-primary-focus);
  }
`;
