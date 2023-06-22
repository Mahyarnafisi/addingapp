import React, { useState } from "react";
import styles from "../style/user/AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { BsPlusCircle } from "react-icons/bs";

function AddUser(props) {
  /*state variables */
  const [enteredUsername, setEnteredUSername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  /*event handler */
  const usernameInputValue = (e) => {
    setEnteredUSername(e.target.value);
  };

  const ageInputValue = (e) => {
    setEnteredAge(e.target.value);
  };

  /**submit form handler */
  const submitFormHandler = (e) => {
    e.preventDefault();
    props.onAddUsers(enteredUsername, enteredAge);
    setEnteredUSername("");
    setEnteredAge("");
  };

  return (
    <Card>
      <form onSubmit={submitFormHandler} className={styles["add-user"]}>
        <label className={styles["add-user__label"]} htmlFor="username">
          Username
        </label>
        <input onChange={usernameInputValue} value={enteredUsername} className={styles["add-user__input"]} id="username" type="text" placeholder="Enter your name" />
        <label className={styles["add-user__label"]} htmlFor="username">
          Your Age
        </label>
        <input onChange={ageInputValue} value={enteredAge} className={`${styles["add-user__input"]} `} id="username" type="number" placeholder="Enter your age" />
        <Button type="submit" className={styles["add-user__btn-submit"]}>
          <BsPlusCircle />
        </Button>
      </form>
    </Card>
  );
}

export default AddUser;
