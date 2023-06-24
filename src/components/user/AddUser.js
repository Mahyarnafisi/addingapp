import React, { useState } from "react";
import useKeypress from "react-use-keypress";
import styles from "../style/user/AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { BsPlusCircle } from "react-icons/bs";

function AddUser(props) {
  /*state variables */
  const [enteredUsername, setEnteredUSername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  /**
   * close error modal with ESC keypress
   */
  useKeypress("Escape", () => {
    closeModalHandler();
  });

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

    /**Condition and Validation */
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        type: "error of input",
        message: "Please enter your name and age",
      });
      return;
    }

    if (enteredAge < 1) {
      setError({
        type: "error of age",
        message: "Please enter a valid age",
      });
      return;
    }

    props.onAddUsers(enteredUsername, enteredAge);
    setEnteredUSername("");
    setEnteredAge("");
  };

  /**clear error value */
  const closeModalHandler = () => {
    error && setError("");
  };

  return (
    <>
      {error && <ErrorModal errorType={error.type} errorMessage={error.message} closeModal={closeModalHandler} />}
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
    </>
  );
}

export default AddUser;
