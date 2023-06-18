import React from "react";
import styles from "../style/user/AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { BsPlusCircle } from "react-icons/bs";
function AddUser() {
  /*submit function */
  const addUserHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <Card>
      <form className={styles["add-user"]} onSubmit={addUserHandler}>
        <label className={styles["add-user__label"]} htmlFor="username">
          Username
        </label>
        <input className={styles["add-user__input"]} id="username" type="text" placeholder="enter your name" />
        <label className={styles["add-user__label"]} htmlFor="username">
          Your Age
        </label>
        <input className={`${styles["add-user__input"]} `} id="username" type="number" placeholder="enter your age" />
        <Button type="submit" className={styles["add-user__btn-submit"]}>
          <BsPlusCircle />
        </Button>
      </form>
    </Card>
  );
}

export default AddUser;
