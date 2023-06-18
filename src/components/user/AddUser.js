import React, { useState } from "react";
import styles from "../style/user/AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { BsPlusCircle } from "react-icons/bs";

function AddUser() {
  /*state variables */
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  /*Submit function*/
  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(enteredAge, enteredUsername);
  };

  /*updating username input state */
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  /*updating age input state */
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card>
      <form className={styles["add-user"]} onSubmit={addUserHandler}>
        <label className={styles["add-user__label"]} htmlFor="username">
          Username
        </label>
        <input onChange={usernameChangeHandler} className={styles["add-user__input"]} id="username" type="text" placeholder="enter your name" />
        <label className={styles["add-user__label"]} htmlFor="username">
          Your Age
        </label>
        <input onChange={ageChangeHandler} className={`${styles["add-user__input"]} `} id="username" type="number" placeholder="enter your age" />
        <Button type="submit" className={styles["add-user__btn-submit"]}>
          <BsPlusCircle />
        </Button>
      </form>
    </Card>
  );
}

export default AddUser;
