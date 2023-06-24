import React, { useState, useRef } from "react";

import Styles from "./App.module.css";
import AddUser from "./components/user/AddUser";
import UsersList from "./components/user/UsersList";

function App(props) {
  /*State Variables */
  const [userList, setUserList] = useState([]);
  const refNum = useRef(0);
  const finalID = useRef();

  const addUserToList = (username, age) => {
    /*ID Maker fucntion */
    const idMaker = () => {
      const number = refNum.current++;
      const alpha = String.fromCharCode(Math.random() * 100);
      finalID.current = number + alpha + number;
    };
    idMaker();

    setUserList((prevData) => {
      return [...prevData, { name: username, age: age, id: finalID.current }];
    });
  };

  console.log(userList);
  return (
    <div className={Styles.app}>
      <AddUser onAddUsers={addUserToList} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
