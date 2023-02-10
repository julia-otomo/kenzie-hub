import styled from "styled-components";

export const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h1 {
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
    font-size: var(--title-2);
  }

  .login__container {
    width: 369px;
    max-width: 80%;
    background-color: var(--grey-3);
    border-radius: 3px;
    padding: 2rem 1.7rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h2 {
      color: var(--grey-0);
      font-weight: var(--font-weight-bold);
      font-size: var(--title-3);
      margin-bottom: 0.3rem;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
    }

    .p__form {
      color: var(--grey-1);
      font-size: var(--headline);
      margin: 0.5rem 0;
    }

    a {
      text-decoration: none;
      width: 100%;
      height: 38.5px;
      background-color: var(--grey-1);
      text-align: center;
      padding: 11.25px 0;
      box-sizing: border-box;
      color: var(--grey-0);
      font-size: var(--title-3);
      border-radius: var(--border-radius-default);
      cursor: pointer;
    }

    a:hover {
      background-color: var(--grey-2);
    }
  }
`;
