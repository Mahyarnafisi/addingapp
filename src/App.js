import React from "react";

import Styles from "./App.module.css";
import AddUser from "./components/user/AddUser";

function App() {
  return (
    <div className={Styles.app}>
      <AddUser />
    </div>
  );
}

export default App;
