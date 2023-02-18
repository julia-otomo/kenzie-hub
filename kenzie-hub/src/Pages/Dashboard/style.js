import styled from "styled-components";

export const StyledDashboardContainer = styled.div`
  align-self: flex-start;
  box-sizing: border-box;
  width: 100%;

  .dashboard__container--header {
    height: 73px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0 var(--grey-3);
    padding: 28px 13px;
    box-sizing: border-box;
    position: fixed;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 774px;
      max-width: 100%;
      height: 100%;

      h1 {
        font-size: var(--title-2);
        font-weight: var(--font-weight-bold);
        color: var(--color-primary);
      }

      button {
        height: 32px;
        width: 56px;
        border: none;
        border-radius: var(--border-radius-default);
        background-color: var(--grey-3);
        color: var(--grey-0);
      }

      button:hover {
        background-color: var(--grey-2);
      }
    }
  }

  .dashboard__container--student-information {
    height: 131px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0 var(--grey-3);
    padding: 28px 13px;
    box-sizing: border-box;
    margin-top: 73px;

    div {
      width: 774px;
      max-width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;

      h2 {
        font-size: var(--title-2);
        font-weight: var(--font-weight-bold);
        color: var(--grey-0);
      }

      p {
        font-size: var(--headline);
        color: var(--grey-1);
        line-height: var(--line-height-default);
      }
    }
  }

  .dashboard__container--techs {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 28px 13px;
    box-sizing: border-box;

    .techs__header {
      width: 774px;
      max-width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 2rem;

      h2 {
        font-size: var(--title-2);
        font-weight: var(--font-weight-bold);
        color: var(--grey-0);
        line-height: var(--line-height-default);
      }

      button {
        width: 32.49px;
        height: 32px;
        background-color: var(--grey-3);
        border: none;
        border-radius: var(--border-radius-default);
        font-size: var(--title-2);
        color: var(--grey-0);
      }

      button:hover {
        background-color: var(--grey-2);
      }
    }

    .techs__container {
      width: 774px;
      max-width: 100%;
      padding: 28px 13px;
    }
  }

  @media (min-width: 1024px) {
    .dashboard__container--student-information {
      div {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
