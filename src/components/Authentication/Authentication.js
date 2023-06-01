import React, { useState } from "react";
import styles from "./Authentication.module.css";
import { User, AuthenticationService } from "./AuthenticationSingleton.ts";

const Authentication = (props) => {
  // Usage example
  const authService = AuthenticationService.getInstance();

  authService.register("johnDoe", "password123");
  authService.login("johnDoe", "password123");
  authService.logout("johnDoe");

  return (
    <div className={styles.authenticationContainer}>
      <p>Authentication front-end part</p>
    </div>
  );
};
export default Authentication;
