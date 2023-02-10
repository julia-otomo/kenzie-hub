import { StyledButton } from "./style";

export function Button({ buttonName, disabled }) {
  return (
    <StyledButton type="submit" disabled={disabled}>
      {buttonName}
    </StyledButton>
  );
}
