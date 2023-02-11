import { Link, useNavigate } from "react-router-dom";
import { InputContainer } from "../../Components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Components/Button";
import { api } from "../../services/api";
import { toast } from "react-toastify";

const schema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^(\d)([a-z])([A-Z])(\W|_)(.{8,})$/,
      "A senha deve contar pelo menos 1 número, 1 letra minúscula, 1 letra maiúscula, 1 caractere especial e deve possuir no mínimo 8 caracteres no total"
    ),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "Campo obrigatório"),
  bio: yup.string().required("Campo Obrigatório"),
  contact: yup.string().required("Campo obrigatório"),
  module: yup.string().required("Campo obrigatório"),
});

export function RegisterUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  async function onSubmitForm(data) {
    try {
      const response = await api.post("users", data);
      toast.success("Cadastro realizado com sucesso !");
      setTimeout(navigate("/"), 3000);
    } catch (err) {
      toast.error("Email já cadastrado no sistema");
      console.log(err);
    }
  }
  return (
    <div className="register__container">
      <div className="register__container--header">
        <h1>Kenzie Hub</h1>
        <Link to={"/"}>Voltar</Link>
      </div>

      <div className="register__container--form">
        <h2>Crie sua conta</h2>
        <p className="p__register">Rápido e grátis, vamos nessa</p>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <InputContainer
            label="Nome"
            id="name"
            type="text"
            register={register("name")}
            placeholder="Digite seu nome"
            errormessage={errors.name?.message}
          />
          <InputContainer
            label="Email"
            id="email"
            type="text"
            register={register("email")}
            placeholder="Digite seu melhor email"
            errormessage={errors.email?.message}
          />
          <InputContainer
            label="Senha"
            id="password"
            type="password"
            register={register("password")}
            placeholder="Digite sua senha"
            errormessage={errors.password?.message}
          />
          <InputContainer
            label="Confirmar senha"
            id="confirmPassword"
            type="password"
            register={register("confirmPassword")}
            placeholder="Digite sua senha novamente"
            errormessage={errors.passwordConfirm?.message}
          />
          <InputContainer
            label="Bio"
            id="bio"
            type="text"
            register={register("bio")}
            placeholder="Fale um pouco sobre você"
            errormessage={errors.bio?.message}
          />
          <div className="select__container">
            <label htmlFor="moduleCategory">Selecionar Módulo</label>
            <select id="moduleCategory" {...register("module")}>
              <option value="">Selecione o módulo</option>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>
            <p>{errors.module?.message}</p>
          </div>
          <Button buttonName="Cadastrar" disabled={false} />
        </form>
      </div>
    </div>
  );
}
