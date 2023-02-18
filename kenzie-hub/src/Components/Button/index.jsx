import { StyledButton } from "./style";

export function Button({ buttonName, disabled, callback }) {
  return (
    <StyledButton type="submit" disabled={disabled} onClick={callback}>
      {buttonName}
    </StyledButton>
  );
}
