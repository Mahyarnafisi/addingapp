import React from "react";
import styles from "../style/user/AddUser.module.css";
import { BsPlusCircle } from "react-icons/bs";
function AddUser() {
  return (
    <form className={styles["add-user"]}>
      <label className={styles["add-user__label"]} htmlFor="username">
        Username
      </label>
      <input className={styles["add-user__input"]} id="username" type="text" placeholder="enter your name" />
      <label className={styles["add-user__label"]} htmlFor="username">
        Your Age
      </label>
      <input className={`${styles["add-user__input"]} `} id="username" type="number" placeholder="enter your age" />
      <button className={styles["add-user__btn-submit"]}>
        <BsPlusCircle />
      </button>
    </form>
  );
}

export default AddUser;
