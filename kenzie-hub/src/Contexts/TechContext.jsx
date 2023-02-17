import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const { techList, setTechList } = useContext(UserContext);

  async function createTechs(data) {
    const tokenUser = localStorage.getItem("@TOKEN") || "";
    try {
      const response = await api.post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
      });
      setTechList([...techList, response.data]);
      toast.success("Tecnologia criada com sucesso !");
    } catch (error) {
      console.log(error);
      toast("Essa tecnologia já foi cadastrada");
    }
  }

  async function updateTechs(id, data) {
    const tokenUser = localStorage.getItem("@TOKEN") || "";

    try {
      const response = await api.put(`users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
      });

      const updatedTechs = techList.map((tech) => {
        if (tech.id === id) {
          return { ...techList, ...data };
        } else {
          return { ...techList };
        }
      });
      toast.success(
        "As informações da tecnologia foram atualizadas com sucesso !"
      );
      setTechList(updateTechs);
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível atualizar as informações da tecnologia");
    }
  }

  async function removeTechs(id) {
    const tokenUser = localStorage.getItem("@TOKEN") || "";

    try {
      const response = await api.delete(`users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
      });
      toast.success("Tecnologia removida com sucesso !");
      const filteredTechs = techList.map((tech) => tech.id !== id);
      setTechList(filteredTechs);
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível remover essa tecnologia");
    }
  }

  return (
    <TechContext.Provider value={{ createTechs, updateTechs, removeTechs }}>
      {children}
    </TechContext.Provider>
  );
}
