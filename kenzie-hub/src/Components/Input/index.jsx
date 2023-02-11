import { StyledInputContainer } from "./style";

export function InputContainer({
  label,
  id,
  type,
  register,
  placeholder,
  errormessage,
}) {
  return (
    <StyledInputContainer className="input__container">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        {...register}
        placeholder={placeholder}
        onChange={onchange}
      />
      {errormessage ? <p>{errormessage}</p> : null}
    </StyledInputContainer>
  );
}
