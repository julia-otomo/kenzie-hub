import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const StyledModal = styled.div`
  position: fixed;
  width: 369px;
  max-width: 90vw;
  background-color: var(--grey-3);
  height: 342px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  border-radius: var(--border-radius-default);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  z-index: 2;

  .modal__header {
    width: 100%;
    background-color: var(--grey-2);
    padding: 9px 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: var(--title-3);
      font-weight: var(--font-weight-bold);
      color: var(--grey-0);
      line-height: var(--line-height-default);
    }

    button {
      background-color: transparent;
      border: none;
      font-size: var(--title-3);
      color: var(--grey-1);
    }
  }

  .modal__form {
    width: 90%;
  }
`;
