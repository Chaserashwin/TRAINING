import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import { useEffect } from "react";

const Modal = ({ isOpen = false, onClose, children }) => {

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const portalElement = isOpen && createPortal(
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
      <div className={styles.modal}>
        <div className={styles["modal-dialog"]}>
          <button className={styles.closeButton} onClick={onClose}>x</button>
          <div className={styles["modal-content"]}>{children}</div>
        </div>
      </div>
    </>,
    document.body
  );

  return portalElement;
};

export default Modal;
