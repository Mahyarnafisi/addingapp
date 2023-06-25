import React, { Fragment } from "react";
import styles from "../style/UI/ErrorModal.module.css";

function ErrorModal(props) {
  const closeModal = () => {
    props.closeModal();
  };

  return (
    <Fragment>
      <div className={styles.backdrop} onClick={props.closeModal}></div>
      <div className={styles["error-modal"]}>
        <div className={styles.error}>
          <h2 className={styles["error__title"]}>{props.errorType}</h2>
          <p className={styles["error__message"]}>{props.errorMessage}</p>
          <button className={styles["error__btn"]} onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </Fragment>
  );
}
export default ErrorModal;
