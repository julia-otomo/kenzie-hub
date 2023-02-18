import { StyledCardTech } from "./style";

export function CardTech({ tech, callback }) {
  return (
    <StyledCardTech onClick={callback} id={tech.id}>
      <h3>{tech.title}</h3>
      <p>{tech.status}</p>
    </StyledCardTech>
  );
}
