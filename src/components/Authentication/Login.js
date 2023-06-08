import React, { useState } from "react";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button.js";

function Login(props) {
  const [employeeId, setEmployeeId] = useState("");
  const [employeeName, setEmployeeName] = useState("");

  async function onContinueHandler(event) {
    event.preventDefault();
    await props.authServices.login(+employeeId, employeeName);
    setEmployeeId("");
    setEmployeeName("");
    props.onContinue()
  }
  function onEmailHandler(event) {
    setEmployeeId(event.target.value);
  }
  function onPasswordHandler(event) {
    setEmployeeName(event.target.value);
  }
  return (
    <div className={styles.formbg}>
      <div className={styles["padding-horizontal--48"]}>
        <div className={styles.loginHeader}>
          <span>Sign into</span>
        </div>
        <form id="stripe-login">
          <div className={styles["padding-bottom--24"]}>
            <label htmlFor="employeeId">Your Id:</label>
            <input
              type="number"
              name="employeeId"
              onChange={onEmailHandler}
              value={employeeId}
            ></input>
          </div>
          <div className={styles["padding-bottom--24"]}>
            <div className={styles["forgot-password"]}>
              <label htmlFor="employeeName">Your name:</label>
            </div>
            <input
              type="text"
              name="employeeName"
              onChange={onPasswordHandler}
              value={employeeName}
            ></input>
          </div>
          <Button onClick={onContinueHandler}>Continue</Button>
        </form>
      </div>
    </div>
  );
}
export default Login;
