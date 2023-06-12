import React, { useRef } from "react";
import styles from "./WorkersAdd.module.css";
import { FireWorkersCommand } from "./WorkersCommand.ts";
import Button from "../UI/Button/Button";

const WorkersFire = (props) => {
  const employeeId = useRef();

  function onSubmitFormHandler(event) {
    event.preventDefault();
    props.manager.SetCommand(new FireWorkersCommand(employeeId.current.value));
    props.manager.ExecuteCommands();
    employeeId.current.value = "";
  }

  return (
    <div className={styles.workersAddContainer}>
      <h2>Fire employee</h2>
      <form onSubmit={onSubmitFormHandler}>
        <label htmlFor="employeeId">Employee's id:</label>
        <input type="number" name="employeeId" ref={employeeId}></input>
        <Button>Submit</Button>
      </form>
    </div>
  );
};
export default WorkersFire;
