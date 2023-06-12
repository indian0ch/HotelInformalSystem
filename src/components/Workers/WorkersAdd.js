import React, { useRef } from "react";
import Button from "../UI/Button/Button";
import styles from "./Workers.module.css";
import {
  WorkersCommand as workers,
  AddWorkersCommand,
} from "./WorkersCommand.ts";
import { Employee } from "../../classes/Employee.ts";

const WorkersAdd = (props) => {
  const employeeName = useRef();
  const employeeId = useRef();
  const employeePosition = useRef();
  const employeeSalary = useRef();

  function cleanInputs() {
    employeeName.current.value = "";
    employeeId.current.value = "";
    employeePosition.current.value = "";
    employeeSalary.current.value = "";
  }

  function onSubmitFormHandler(event) {
    event.preventDefault();
    const name = employeeName.current.value;
    const id = employeeId.current.value;
    const position = employeePosition.current.value;
    const salary = employeeSalary.current.value;

    props.manager.SetCommand(
      new AddWorkersCommand(
        new Employee(name, id, position, salary)
      )
    );
    props.manager.ExecuteCommands();
    cleanInputs();
  }

  return (
    <div className={styles.workersAddContainer}>
      <h2>Add employee</h2>
      <form onSubmit={onSubmitFormHandler}>
        <label htmlFor="employeeName">Emplyee's name:</label>
        <input type="text" name="employeeName" ref={employeeName}></input>
        <label htmlFor="employeeId">Employee's id:</label>
        <input type="number" name="employeeId" ref={employeeId}></input>
        <label htmlFor="employeePosition">Employee's position:</label>
        <input type="text" name="employeeId" ref={employeePosition}></input>
        <label htmlFor="employeeSalary">Employee's salary $:</label>
        <input type="number" name="employeeId" ref={employeeSalary}></input>
        <Button>Submit</Button>
      </form>
    </div>
  );
};
export default WorkersAdd;
