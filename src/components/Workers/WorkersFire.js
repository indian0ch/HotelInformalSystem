import React, { useState } from "react";
import styles from "./WorkersAdd.module.css";
import { FireWorkersCommand } from "./WorkersCommand.ts";
import Button from "../UI/Button/Button";

const WorkersFire = (props) => {
  const [employeeId, setEmployeeId] = useState("");
  
  function onChangeIdHandler(event) {
    setEmployeeId(event.target.value);
  }
  function onSubmitFormHandler(event) {
    event.preventDefault();
    props.manager.SetCommand(new FireWorkersCommand(employeeId));
    props.manager.ExecuteCommands();
    setEmployeeId("");
  }

  return (
    <div className={styles.workersAddContainer}>
      <h2>Fire employee</h2>
      <form onSubmit={onSubmitFormHandler}>
        <label htmlFor="employeeId">Employee's id:</label>
        <input
          type="number"
          name="employeeId"
          value={employeeId}
          onChange={onChangeIdHandler}
        ></input>
        <Button>Submit</Button>
      </form>
    </div>
  );
};
export default WorkersFire;
