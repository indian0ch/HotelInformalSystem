import React, { useState } from "react";
import styles from "./Registration.module.css";
import Button from "../UI/Button/Button.js";

const Registration = (props) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("");
  function onSignOnHandler(event) {
    event.preventDefault();
    props.onSignIn();
  }
  function onClickRegisterHandler(event) {
    event.preventDefault();
    props.authServices.register(registerEmail, registerPassword);
    setRegisterPassword("");
    setRegisterEmail("");
  }
  function onChangeEmailHandler(event) {
    setRegisterEmail(event.target.value);
  }
  function onChangePasswordHandler(event) {
    setRegisterPassword(event.target.value);
  }
  function onChangePasswordConfirmHandler(event) {
    setRegisterPasswordConfirm(event.target.value);
  }

  return (
    <div className={styles.formbg}>
      <div className={styles["padding-horizontal--48"]}>
        <span className={styles["padding-bottom--15"]}>Register a profile</span>
        <form id="stripe-login">
          <div className={styles.inputBlock}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={registerEmail}
              onChange={onChangeEmailHandler}
            ></input>
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={registerPassword}
              onChange={onChangePasswordHandler}
            ></input>
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="passwordConfirm">Confirm your password</label>
            <input
              type="password"
              name="passwordConfirm"
              value={registerPasswordConfirm}
              onChange={onChangePasswordConfirmHandler}
            ></input>
          </div>
          <div className={styles.chechbox_styling}>
            <label htmlFor="checkbox">
              {" "}
              <input type="checkbox" name="checkbox"></input> Stay signed in for
              a week
            </label>
          </div>
          <div className={styles["padding-bottom--24"]}>
            <Button onClick={onClickRegisterHandler}>Register</Button>
          </div>
          <div className={styles.field}>
            <span>
              Have already an account?{" "}
              <a href="" onClick={onSignOnHandler}>
                Sign in
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registration;
