import React, { useState } from "react";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button.js";

const Login = (props) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  function onContinueHandler(event) {
    event.preventDefault();
    props.authServices.login(registerEmail, registerPassword);
    setRegisterEmail("");
    setRegisterPassword("");
    props.onContinue();
  }
  function onSignUpHandler(event) {
    event.preventDefault();
    props.onSignUp();
  }
  function onEmailHandler(event) {
    setRegisterEmail(event.target.value);
  }
  function onPasswordHandler(event) {
    setRegisterPassword(event.target.value);
    console.log(event.target.value);
  }
  return (
    <div className={styles.formbg}>
      <div className={styles["padding-horizontal--48"]}>
      <div className={styles.loginHeader}>
          <span>Sign into your account</span>
        </div>
        <form id="stripe-login">
          <div className={styles["padding-bottom--24"]}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={onEmailHandler}
              value={registerEmail}
            ></input>
          </div>
          <div className={styles["padding-bottom--24"]}>
            <div className={styles["forgot-password"]}>
              <label htmlFor="password">Password</label>
              <div>
                <a href="">Forgot your password?</a>
              </div>
            </div>
            <input
              type="password"
              name="password"
              onChange={onPasswordHandler}
              value={registerPassword}
            ></input>
          </div>
          <div className={styles.chechbox_styling}>
            <label htmlFor="checkbox">
              {" "}
              <input type="checkbox" name="checkbox"></input> Stay signed in for
              a week
            </label>
          </div>
          <Button onClick={onContinueHandler}>Continue</Button>
          <div className={styles.field}>
            <span>
              Don't have an account?{" "}
              <a href="" onClick={onSignUpHandler}>
                Sign up
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
