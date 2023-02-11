import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { InputContainer } from "../../Components/Input";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { StyledLoginContainer } from "./style";
import { useEffect, useState } from "react";
import { Button } from "../../Components/Button";

const schema = yup.object({
  email: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export function LoginUser() {
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const tokenUser = localStorage.getItem("@TOKEN") || "";

  useEffect(() => {
    tokenUser !== "" ? navigate("/dashboard") : null;
  }, [tokenUser]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmitForm(data) {
    try {
      const response = await api.post("sessions", data);
      setDisabled(true);
      toast.success("Usuário logado com sucesso !");
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      setTimeout(navigate("/dashboard", 3000));
    } catch (err) {
      console.log(err);
      toast.error("Email ou senha incorretos");
    } finally {
      setDisabled(false);
    }
  }
  return (
    <StyledLoginContainer className="login__page">
      <h1>Kenzie Hub</h1>
      <div className="login__container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <InputContainer
            label="Email"
            id="email"
            type="text"
            register={register("email")}
            placeholder="Digite seu email"
            errormessage={errors.email?.message}
          />
          <InputContainer
            label="Senha"
            id="password"
            type="password"
            register={register("password")}
            placeholder="Digite seu senha"
            errormessage={errors.password?.message}
          />
          <Button buttonName="Entrar" disabled={disabled} />
        </form>
        <p className="p__form">Ainda não possui uma conta ?</p>
        <Link to={"/register"}>Cadastre-se</Link>
      </div>
    </StyledLoginContainer>
  );
}
