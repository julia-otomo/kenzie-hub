import styled from "styled-components";

export const StyledCardTech = styled.li`
  padding: 12.18px;
  box-sizing: border-box;
  height: 49px;
  background-color: var(--grey-4);
  border-radius: var(--border-radius-default);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: var(--title-3);
    font-weight: var(--font-weight-bold);
    color: var(--grey-0);
  }

  p {
    font-size: var(--headline);
    color: var(--grey-1);
  }

  :hover {
    background-color: var(--grey-2);
  }
`;
