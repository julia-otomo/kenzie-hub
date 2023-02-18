import { useContext } from "react";
import { TechContext } from "../../Contexts/TechContext";
import { UserContext } from "../../Contexts/UserContext";
import { CardTech } from "./CardTech";
import { StyledTechList } from "./style";

export function UserTechList() {
  const { techList } = useContext(UserContext);
  const { setTechById } = useContext(TechContext);
  return (
    <StyledTechList>
      {techList.map((tech) => (
        <CardTech
          tech={tech}
          key={tech.id}
          id={tech.id}
          callback={(event) => setTechById(event)}
        />
      ))}
    </StyledTechList>
  );
}
