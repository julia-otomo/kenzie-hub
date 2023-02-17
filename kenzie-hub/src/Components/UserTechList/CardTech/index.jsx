import { StyledCardTech } from "./style";

export function CardTech({ tech }) {
  return (
    <StyledCardTech>
      <h3>{tech.title}</h3>
      <p>{tech.status}</p>
    </StyledCardTech>
  );
}
