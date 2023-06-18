import React, { useState } from "react";

import Styles from "./App.module.css";
import AddUser from "./components/user/AddUser";
import UsersList from "./components/user/UsersList";

function App(props) {
  /*State Variables */
  const [usersList, setUsersList] = useState([]);

  /*Create and add new object to array users */
  const addUsersListHandler = (username, age) => {
    const idNumber = (Math.random() * 100).toFixed(3); //create a random number fo ID

    /*updating users array */
    setUsersList((prevUsers) => {
      return [...prevUsers, { name: username, age: age, id: idNumber }];
    });
  };

  return (
    <div className={Styles.app}>
      <AddUser onAddUsers={addUsersListHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
