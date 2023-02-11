import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { StyledDashboardContainer } from "./style";

export function Dashboard() {
  const [student, setStudent] = useState({});
  const navigate = useNavigate();
  const tokenUser = localStorage.getItem("@TOKEN") || "";
  const userId = localStorage.getItem("@USERID") || "";

  useEffect(() => {
    tokenUser == "" ? navigate("/") : null;
  }, [tokenUser]);

  useEffect(() => {
    async function getStudentInformation() {
      try {
        const response = await api.get(`users/${JSON.parse(userId)}`);
        setStudent(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getStudentInformation();
  }, [student]);

  function resetLocalStorage() {
    localStorage.clear();
    navigate("/");
  }
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
      <div className="dashboard__container--advice">
        <div>
          <h2>Que pena! Estamos em desenvolvimento {":("}</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </div>
    </StyledDashboardContainer>
  );
}
