import { StyledSelect } from "./style";

export function SelectContainer({
  id,
  label,
  value1,
  value2,
  value3,
  opt1,
  register,
  errormessage,
}) {
  return (
    <StyledSelect>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} {...register}>
        <option value="">{opt1}</option>
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
        <option value={value3}>{value3}</option>
      </select>
      {errormessage ? <p>{errormessage}</p> : null}
    </StyledSelect>
  );
}
