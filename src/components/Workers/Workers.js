import React, { useState } from "react";
import styles from "./Workers.module.css";
import { Manager } from "./WorkersCommand.ts";
import Button from "../UI/Button/Button";
import WorkersAdd from "./WorkersAdd";
import WorkersMessage from "./WorkersMessage";
import WorkersFire from "./WorkersFire";

const Workers = (props) => {
  const [whichEmplyeeButtonActive, setWhichEmplyeeButtonActive] =
    useState("Add");
  const manager = new Manager();

  function onClickAddHandler() {
    setWhichEmplyeeButtonActive("Add");
  }
  function onClickFireHandler() {
    setWhichEmplyeeButtonActive("Fire");
  }
  function onClickCheckHandler() {
    setWhichEmplyeeButtonActive("Check");
  }
  function onClickLogOutHandler() {
    props.authServices.logout();
    props.onLogOut();
  }
  
  return (
    <div className={styles.workersContainer}>
      <h2>Workers management module</h2>
      <div className={styles.buttonsContainer}>
        <Button onClick={onClickAddHandler}>Add Employee</Button>
        <Button onClick={onClickFireHandler}>Fire Employee</Button>
        <Button onClick={onClickCheckHandler}>Send a message</Button>
      </div>
      {whichEmplyeeButtonActive === "Add" && (
        <WorkersAdd manager={manager}></WorkersAdd>
      )}
      {whichEmplyeeButtonActive === "Fire" && (
        <WorkersFire manager={manager}></WorkersFire>
      )}
      {whichEmplyeeButtonActive === "Check" && (
        <WorkersMessage manager={manager}></WorkersMessage>
      )}
      <br></br>
      <Button onClick={onClickLogOutHandler}>Log out</Button>
    </div>
  );
};
export default Workers;
