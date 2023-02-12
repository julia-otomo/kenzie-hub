import { Link } from "react-router-dom";
import { StyledErrorPage } from "./style";

export function ErrorPage() {
  return (
    <StyledErrorPage>
      <h1>404 PAGE NOT FOUND</h1>
      <Link to={"/"}>Voltar para a página inicial</Link>
    </StyledErrorPage>
  );
}
