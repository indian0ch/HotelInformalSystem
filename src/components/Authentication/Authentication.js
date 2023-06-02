import React, { useState } from "react";
import styles from "./Authentication.module.css";
import { User, AuthenticationService } from "./AuthenticationSingleton.ts";
import Login from "./Login";
import Registration from "./Registration";

const Authentication = (props) => {
  const [isLoginWindowOpen, setIsLoginWindowOpen] = useState(true);
  // const [emailUser,setEmailUser]=useState('');
  // const [passwordUser,setPasswordUser]=useState('');
  const authService = AuthenticationService.getInstance();
  function onSignUpHandler() {
    setIsLoginWindowOpen(false);
  }
  function onSignInHandler() {
    setIsLoginWindowOpen(true);
  }
  // authService.logout("johnDoe");

  return (
    <div className={styles.authenticationContainer}>
      <h2>Authentication component</h2>
      <div>
        {isLoginWindowOpen ? (
          <Login onSignUp={onSignUpHandler} authServices={authService}></Login>
        ) : (
          <Registration
            onSignIn={onSignInHandler}
            authServices={authService}
          ></Registration>
        )}
      </div>
    </div>
  );
};
export default Authentication;
