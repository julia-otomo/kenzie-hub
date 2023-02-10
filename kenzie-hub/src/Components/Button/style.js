import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  height: 38.5px;
  color: var(--grey-0);
  font-size: var(--title-3);
  border: none;
  border-radius: var(--border-radius-default);
  ${function buttonColor(props) {
    if (props.disabled === false) {
      return css`
        background-color: var(--color-primary);

        :hover {
          background-color: var(--color-primary-focus);
        }
      `;
    } else {
      return css`
        background-color: var(--color-primary-negative);
      `;
    }
  }}
`;
