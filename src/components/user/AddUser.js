import React, { useState } from "react";
import styles from "../style/user/AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { BsPlusCircle } from "react-icons/bs";

function AddUser(props) {
  /*state variables */
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  /*Submit function*/
  const addUserHandler = (e) => {
    e.preventDefault();

    /*validation and resting inputs   */
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || +enteredAge < 0) {
      return;
    }

    /*lifting data to app js */
    props.onAddUsers(enteredUsername, enteredAge);

    setEnteredUsername(""); //reset the input
    setEnteredAge(""); //reset the input
  };

  /*updating username input state */
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  /*updating age input state */
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  /*lifting up the users */

  return (
    <Card>
      <form className={styles["add-user"]} onSubmit={addUserHandler}>
        <label className={styles["add-user__label"]} htmlFor="username">
          Username
        </label>
        <input onChange={usernameChangeHandler} value={enteredUsername} className={styles["add-user__input"]} id="username" type="text" placeholder="Enter your name" />
        <label className={styles["add-user__label"]} htmlFor="username">
          Your Age
        </label>
        <input onChange={ageChangeHandler} value={enteredAge} className={`${styles["add-user__input"]} `} id="username" type="number" placeholder="Enter your age" />
        <Button type="submit" className={styles["add-user__btn-submit"]}>
          <BsPlusCircle />
        </Button>
      </form>
    </Card>
  );
}

export default AddUser;
