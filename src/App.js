import React from "react";

import Styles from "./App.module.css";
import AddUser from "./components/user/AddUser";
import UsersList from "./components/user/UsersList";

function App() {
  return (
    <div className={Styles.app}>
      <AddUser />
      <UsersList />
    </div>
  );
}

export default App;
