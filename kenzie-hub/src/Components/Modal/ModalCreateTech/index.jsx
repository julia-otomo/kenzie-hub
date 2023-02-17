import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalPattern } from "../ModalStructure";
import { useContext } from "react";
import { TechContext } from "../../../Contexts/TechContext";
import { InputContainer } from "../../Input/index";
import { SelectContainer } from "../../Select";
import { Button } from "../../Button/index";
import { UserContext } from "../../../Contexts/UserContext";

const schema = yup.object({
  title: yup
    .string()
    .required("É necessário informar a tecnologia a ser cadastrada"),
  status: yup
    .string()
    .required("É necessário informar o nível de aprendizado da tecnologia"),
});

export function ModalCreateTech() {
  const { createTechs, setOpenModal } = useContext(TechContext);
  const { disabled } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const formModal = (
    <form action="" onSubmit={handleSubmit(createTechs)}>
      <InputContainer
        label={"Nome"}
        id={"title"}
        type={"text"}
        register={register("title")}
        placeholder={"Nome da Tecnologia"}
        errormessage={errors.title?.message}
      />
      <SelectContainer
        id={"status"}
        label={"Selecionar status"}
        register={register("status")}
        value1={"Iniciante"}
        value2={"Intermediário"}
        value3={"Avançado"}
        opt1={"Selecione o status"}
        errormessage={errors.status?.message}
      />
      <Button buttonName={"Cadastrar"} disabled={disabled} />
    </form>
  );
  return (
    <ModalPattern
      nameTitle={"Cadastrar Tecnologia"}
      callback={() => setOpenModal(false)}
      children={formModal}
    />
  );
}
