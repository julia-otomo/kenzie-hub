import { Backdrop, StyledModal } from "./style";

export function ModalPattern({ nameTitle, callback, children }) {
  return (
    <Backdrop>
      <StyledModal role={"dialog"}>
        <div className="modal__header">
          <h2>{nameTitle}</h2>
          <button onClick={callback}>X</button>
        </div>
        <div className="modal__form">{children}</div>
      </StyledModal>
    </Backdrop>
  );
}
