import { useContext } from "react";
import { ModalCreateTech } from "../../Components/Modal/ModalCreateTech";
import { ModalUpdateAndDeleteTech } from "../../Components/Modal/ModalUpdateAndDeleteTechj";
import { UserTechList } from "../../Components/UserTechList";
import { TechContext } from "../../Contexts/TechContext";
import { UserContext } from "../../Contexts/UserContext";
import { StyledDashboardContainer } from "./style";

export function Dashboard() {
  const { resetLocalStorage, student, techList } = useContext(UserContext);
  const { openModal, setOpenModal, tech } = useContext(TechContext);

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
          <button onClick={() => setOpenModal(true)}>+</button>
        </div>
        <div className="techs__container">
          {techList.length === 0 ? (
            <h2 className="empty__techs">
              Nenhuma tecnologia foi cadastrada ainda {"(｡•́︿•̀｡)"}
            </h2>
          ) : (
            <UserTechList />
          )}
        </div>
      </div>

      {openModal ? <ModalCreateTech /> : null}
      {tech ? <ModalUpdateAndDeleteTech /> : null}
    </StyledDashboardContainer>
  );
}
