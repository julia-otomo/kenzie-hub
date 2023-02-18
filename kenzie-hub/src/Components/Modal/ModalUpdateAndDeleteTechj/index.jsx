import { useForm } from "react-hook-form";
import { ModalPattern } from "../ModalStructure";
import { useContext } from "react";
import { TechContext } from "../../../Contexts/TechContext";
import { InputContainer } from "../../Input/index";
import { SelectContainer } from "../../Select";
import { Button } from "../../Button/index";
import { UserContext } from "../../../Contexts/UserContext";

export function ModalUpdateAndDeleteTech() {
  const { updateTechs, removeTechs, tech, setTech } = useContext(TechContext);
  const { disabled } = useContext(UserContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: tech.title,
      status: tech.status,
    },
  });

  function onSubmitFormUpdate(data) {
    updateTechs(tech.id, data);
    setTech(null);
  }

  function onSubmitFormDelete(event) {
    event.preventDefault();
    removeTechs(tech.id);
    setTech(null);
  }

  const formModal = (
    <form action="">
      <InputContainer
        label={"Nome"}
        id={"title"}
        type={"text"}
        register={register("title")}
        placeholder={"Nome da Tecnologia"}
      />
      <SelectContainer
        id={"status"}
        label={"Selecionar status"}
        register={register("status")}
        value1={"Iniciante"}
        value2={"Intermediário"}
        value3={"Avançado"}
        opt1={"Selecione o status"}
      />
      <div className="buttons__container">
        <Button
          buttonName={"Salvar Alterações"}
          disabled={disabled}
          callback={handleSubmit(onSubmitFormUpdate)}
        />
        <button
          className="delete__button"
          onClick={(event) => onSubmitFormDelete(event)}
        >
          Excluir
        </button>
      </div>
    </form>
  );
  return (
    <ModalPattern
      nameTitle={"Tecnologia Detalhes"}
      callback={() => setTech(null)}
      children={formModal}
    />
  );
}
