import React from "react";
import Card from "../UI/Card";
import styles from "../style/user/UsersList.module.css";
function UsersList(props) {
  return (
    <Card>
      <ul className={styles["users-list"]}>
        {props.users.map((user) => {
          return (
            <li key={user.id} className={styles["users-list__item"]}>
              {user.name} ({user.age}) years old
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default UsersList;
