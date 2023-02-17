import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { CardTech } from "./CardTech";
import { StyledTechList } from "./style";

export function UserTechList() {
  const { techList } = useContext(UserContext);
  return (
    <StyledTechList>
      {techList.map((tech) => (
        <CardTech tech={tech} key={tech.id} />
      ))}
    </StyledTechList>
  );
}
