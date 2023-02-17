import { useState, useEffect, createContext } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [techList, setTechList] = useState([]);

  async function doUserLogin(data) {
    try {
      const response = await api.post("sessions", data);
      setDisabled(true);
      toast.success("Usuário logado com sucesso !");
      localStorage.setItem("@TOKEN", response.data.token);
      setStudent(response.data.user);
      setTechList(response.data.user.techs);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      toast.error("Email ou senha incorretos");
    } finally {
      setDisabled(false);
    }
  }

  async function doUserRegister(data) {
    try {
      setDisabled(true);
      await api.post("users", data);
      toast.success("Conta criada com sucesso !");
      setTimeout(navigate("/"), 3000);
    } catch (err) {
      toast.error("Ops! Algo deu errado");
      console.log(err);
    } finally {
      setDisabled(false);
    }
  }

  useEffect(() => {
    const tokenUser = localStorage.getItem("@TOKEN") || "";
    if (tokenUser) {
      const loggedUser = async () => {
        try {
          const response = await api.get("profile", {
            headers: {
              Authorization: `Bearer ${tokenUser}`,
            },
          });
          setStudent(response.data);
          setTechList(response.data.techs);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      };

      loggedUser();
    }
  }, []);

  function resetLocalStorage() {
    localStorage.clear();
    setStudent(null);
    navigate("/");
  }
  return (
    <UserContext.Provider
      value={{
        disabled,
        doUserLogin,
        doUserRegister,
        resetLocalStorage,
        student,
        techList,
        setTechList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
