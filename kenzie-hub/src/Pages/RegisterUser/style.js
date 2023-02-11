import styled from "styled-components";

export const StyledRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  width: 370px;
  max-width: 90%;

  .register__container--header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    h1 {
      font-size: var(--title-2);
      font-weight: var(--font-weight-bold);
      color: var(--color-primary);
    }

    a {
      width: 80px;
      height: 33px;
      background-color: var(--grey-3);
      border-radius: var(--border-radius-default);
      cursor: pointer;
      text-decoration: none;
      text-align: center;
      color: var(--grey-0);
      font-size: var(--headline);
      padding: 1rem;
      box-sizing: border-box;
    }

    a:hover {
      background-color: var(--grey-2);
    }
  }

  .register__container--form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    padding: 2rem 1.1rem;
    box-sizing: border-box;
    background-color: var(--grey-3);
    border-radius: 3px;
    width: 100%;

    h2 {
      font-size: var(--title-3);
      font-weight: var(--font-weight-bold);
      color: var(--grey-0);
    }

    .p__register {
      font-size: var(--headline);
      color: var(--grey-1);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      .select__container {
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
        }
      }
    }
  }
`;
