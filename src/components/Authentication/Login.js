import React, { useRef } from "react";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button.js";
import InputRef from "../UI/Button/InputRef";

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
    <div>
      <div className={styles["padding-horizontal--48"]}>
        <div className={styles.loginHeader}>
          <span>Sign into</span>
        </div>
        <form id="stripe-login">
          <div className={styles["padding-bottom--24"]}>
            <InputRef type="number" name="employeeId" ref={employeeId}>
              Your Id:
            </InputRef>
          </div>
          <div className={styles["padding-bottom--24"]}>
            <InputRef type="text" name="employeeName" ref={employeeId}>
              Your name:
            </InputRef>
          </div>
          <Button onClick={onContinueHandler}>Continue</Button>
        </form>
      </div>
    </div>
  );
}
export default Login;
