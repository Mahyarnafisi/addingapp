import React from "react";
import styles from "../style/UI/Button.module.css";

const Button = (props) => {
  return <div className={`${styles.btn} ${props.className}`}>{props.children}</div>;
};
export default Button;
