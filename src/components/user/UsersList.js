import React from "react";
import Card from "../UI/Card";
import styles from "../style/user/UsersList.module.css";
function UsersList() {
  return (
    <Card>
      <ul className={styles["users-list"]}>
        <li className={styles["users-list__item"]}>li list </li>
      </ul>
    </Card>
  );
}

export default UsersList;
