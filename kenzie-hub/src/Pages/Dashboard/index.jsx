import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { StyledDashboardContainer } from "./style";

export function Dashboard() {
  const { resetLocalStorage, student } = useContext(UserContext);

  return (
    <StyledDashboardContainer className="dashboard__container">
      <div className="dashboard__container--header">
        <div>
          <h1>Kenzie Hub</h1>
          <button onClick={resetLocalStorage}>Sair</button>
        </div>
      </div>
      <div className="dashboard__container--student-information">
        <div>
          {student.name ? (
            <h2>Olá, {student.name} </h2>
          ) : (
            <h2>Olá, aluno(a) </h2>
          )}

          {student.course_module ? (
            <p>{student.course_module}</p>
          ) : (
            <p>Módulo não disponível</p>
          )}
        </div>
      </div>
      <div className="dashboard__container--techs">
        <div className="techs__header">
          <h2>Tecnologias</h2>
        </div>
      </div>
    </StyledDashboardContainer>
  );
}
