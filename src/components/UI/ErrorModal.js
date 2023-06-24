import React from "react";
import Button from "../UI/Button";
import styles from "../style/UI/ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={styles["error-modal"]}>
        <div className={styles.error}>
          <h2 className={styles["error__title"]}>Error</h2>
          <p className={styles["error__massage"]}>lorem asda</p>
          <Button className={styles["error__btn"]}>Close</Button>
        </div>
      </div>
    </>
  );
}
export default ErrorModal;
