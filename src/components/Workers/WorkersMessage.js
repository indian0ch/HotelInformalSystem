import React, { useRef } from "react";
import Button from "../UI/Button/Button";
import styles from "./WorkersAdd.module.css";
import { SendMessageWorkersCommand } from "./WorkersCommand.ts";

//Table
const WorkersMessage = (props) => {
  const employeeId = useRef();
  const employeeMessage = useRef();

  function onSubmitFormHandler(event) {
    event.preventDefault();
    const id = employeeId.current.value;
    const message = employeeMessage.current.value;

    props.manager.SetCommand(new SendMessageWorkersCommand(id, message));
    props.manager.ExecuteCommands();
    employeeId.current.value = "";
    employeeMessage.current.value = "";
  }
  return (
    <div className={styles.workersAddContainer}>
      <h2>Check employees</h2>
      <form onSubmit={onSubmitFormHandler}>
        <label htmlFor="employeeId">Employee's id:</label>
        <input type="number" name="employeeId" ref={employeeId}></input>
        <label htmlFor="employeeMessage">Message:</label>
        <textarea
          type="text"
          name="employeeMessage"
          ref={employeeMessage}
        ></textarea>
        <Button>Send</Button>
      </form>
    </div>
  );
};
export default WorkersMessage;
