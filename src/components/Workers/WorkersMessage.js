import React, { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./WorkersAdd.module.css";
import { SendMessageWorkersCommand } from "./WorkersCommand.ts";

//Table
const WorkersMessage = (props) => {
  let employees = [];
  const [employeeId, setEmployeeId] = useState("");
  const [employeeMessage, setEmployeeMessage] = useState("");

  function onChangeIdHandler(event) {
    setEmployeeId(event.target.value);
  }
  function onChangeMessageHandler(event) {
    setEmployeeMessage(event.target.value);
  }
  function onSubmitFormHandler(event) {
    event.preventDefault();
    props.manager.SetCommand(
      new SendMessageWorkersCommand(employeeId, employeeMessage)
    );
    props.manager.ExecuteCommands();
    setEmployeeId("");
  }
  return (
    <div className={styles.workersAddContainer}>
      <h2>Check employees</h2>
      <form onSubmit={onSubmitFormHandler}>
        <label htmlFor="employeeId">Employee's id:</label>
        <input
          type="number"
          name="employeeId"
          value={employeeId}
          onChange={onChangeIdHandler}
        ></input>
        <label htmlFor="employeeMessage">Message:</label>
        <textarea
          type="text"
          name="employeeMessage"
          value={employeeMessage}
          onChange={onChangeMessageHandler}
        ></textarea>
        <Button>Send</Button>
      </form>
    </div>
  );
};
export default WorkersMessage;
