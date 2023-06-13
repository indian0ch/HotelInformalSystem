import React, { useState, useEffect } from "react";
import styles from "./Authentication.module.css";
import { AuthenticationService, ProxyService } from "./AuthenticationProxy.ts";
import Login from "./Login";
import Workers from "../Workers/Workers";

function Authentication(props) {
  const [isLoginWindowOpen, setIsLoginWindowOpen] = useState(true);
  const authService = new ProxyService(new AuthenticationService());

  function onContinueHandler() {
    if (authService.getStatus() === true) {
      setIsLoginWindowOpen(false);
      localStorage.setItem("isLogged", "yes");
    }
  }
  function onLogOutHandler() {
    setIsLoginWindowOpen(true);
    localStorage.setItem("isLogged", "no");
  }

  useEffect(() => {
    if (localStorage.getItem("isLogged") === "yes") {
      setIsLoginWindowOpen(false);
    }
  }, []);

  return (
    <div className={styles.authenticationContainer}>
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
  );
}
export default Authentication;
