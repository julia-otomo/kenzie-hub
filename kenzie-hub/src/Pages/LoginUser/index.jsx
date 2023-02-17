import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { InputContainer } from "../../Components/Input";
import { StyledLoginContainer } from "./style";
import { useContext } from "react";
import { Button } from "../../Components/Button";
import { UserContext } from "../../Contexts/UserContext";

const schema = yup.object({
  email: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export function LoginUser() {
  const { disabled, doUserLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <StyledLoginContainer className="login__page">
      <h1>Kenzie Hub</h1>
      <div className="login__container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(doUserLogin)}>
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
