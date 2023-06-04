import React, { useState } from "react";
import styles from "./Authentication.module.css";
import { Worker, AuthenticationService } from "./AuthenticationSingleton.ts";
import Login from "./Login";
import Registration from "./Registration";
import Profile from "./Profile";
import Workers from "../Workers/Workers";

const Authentication = (props) => {
  const [isLoginWindowOpen, setIsLoginWindowOpen] = useState(true);
  const [isRegistryWindowOpen, setIsRegistryWindowOpen] = useState(false);
  const [isProfileWindowOpen, setIsProfileWindowOpen] = useState(false);
  const authService = AuthenticationService.getInstance();

  function changeWindowStatus() {
    setIsLoginWindowOpen((prev) => !prev);
    setIsRegistryWindowOpen((prev) => !prev);
  }
  function onSignUpHandler() {
    changeWindowStatus();
  }
  function onSignInHandler() {
    changeWindowStatus();
  }
  function onContinueHandler() {
    setIsLoginWindowOpen(false);
    setIsProfileWindowOpen(true);
  }
  function onLogOutHandler() {
    authService.logout(authService.getLastLogin());
    setIsLoginWindowOpen(true);
    setIsProfileWindowOpen(false);
  }

  return (
    <div className={styles.authenticationContainer}>
      <h2>Worker authentication component</h2>
      <div>
        {isLoginWindowOpen && (
          <Login
            onSignUp={onSignUpHandler}
            authServices={authService}
            onContinue={onContinueHandler}
          ></Login>
        )}
        {isRegistryWindowOpen && (
          <Registration
            onSignIn={onSignInHandler}
            authServices={authService}
          ></Registration>
        )}
        {isProfileWindowOpen && (
          <Profile
            authServices={authService}
            onLogOut={onLogOutHandler}
          ></Profile>
        )}
      </div>
    </div>
  );
};
export default Authentication;
