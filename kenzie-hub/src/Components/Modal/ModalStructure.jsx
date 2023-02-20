import { Backdrop, StyledModal } from "./style";
import { motion } from "framer-motion";

export function ModalPattern({ nameTitle, callback, children }) {
  return (
    <Backdrop>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 400, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <StyledModal role={"dialog"}>
          <div className="modal__header">
            <h2>{nameTitle}</h2>
            <button onClick={callback}>X</button>
          </div>
          <div className="modal__form">{children}</div>
        </StyledModal>
      </motion.div>
    </Backdrop>
  );
}
