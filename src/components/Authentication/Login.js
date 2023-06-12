import React, {useRef } from "react";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button.js";

function Login(props) {
  const employeeId = useRef();
  const employeeName = useRef();

  async function onContinueHandler(event) {
    event.preventDefault();
    await props.authServices.login(
      +employeeId.current.value,
      employeeName.current.value
    );
    employeeId.current.value = "";
    employeeName.current.value = "";
    props.onContinue();
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
            <input type="number" name="employeeId" ref={employeeId}></input>
          </div>
          <div className={styles["padding-bottom--24"]}>
            <div className={styles["forgot-password"]}>
              <label htmlFor="employeeName">Your name:</label>
            </div>
            <input type="text" name="employeeName" ref={employeeName}></input>
          </div>
          <Button onClick={onContinueHandler}>Continue</Button>
        </form>
      </div>
    </div>
  );
}
export default Login;
