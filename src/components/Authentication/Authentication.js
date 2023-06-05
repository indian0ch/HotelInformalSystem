import React, { useState } from "react";
import styles from "./Authentication.module.css";
import { AuthenticationService } from "./AuthenticationSingleton.ts";
import Login from "./Login";
import Workers from "../Workers/Workers";

function Authentication(props) {
  const [isLoginWindowOpen, setIsLoginWindowOpen] = useState(true);
  const authService = AuthenticationService.getInstance();

  function onContinueHandler() {
    if (authService.getStatus() === true) {
      setIsLoginWindowOpen(false);
    }
  }
  function onLogOutHandler() {
    setIsLoginWindowOpen(true);
  }

  return (
    <div className={styles.authenticationContainer}>
      <div>
        {isLoginWindowOpen === true && (
          <Login
            onContinue={onContinueHandler}
            authServices={authService}
          ></Login>
        )}
        {isLoginWindowOpen === false && (
          <Workers
            onLogOut={onLogOutHandler}
            authServices={authService}
          ></Workers>
        )}
      </div>
    </div>
  );
}
export default Authentication;
