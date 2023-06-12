import React from "react";
import styles from "./Profile.module.css";
import Button from "../UI/Button/Button.js";

const Profile = (props) => {
  let arr = props.authServices.getUsers();
  let loginWorker = props.authServices.getLastLogin();
  const user = arr.filter((element) => element.username === loginWorker);

  function onClickHandler() {
    props.onLogOut();
  }
  return (
    <div className={styles.profileContainer}>
      <h3>Hello,{loginWorker}</h3>
      <div className={styles.tableBlock}>
        <table className={styles.profileTable}>
          <thead>
            <tr>
              <th>Working hours</th>
              <th>Room for today</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user[0].hours}</td>
              <td>{user[0].roomToClean}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button onClick={onClickHandler}>Log out</Button>
    </div>
  );
};
export default Profile;
