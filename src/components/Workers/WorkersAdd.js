import React, { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./Workers.module.css";
import {
  WorkersCommand as workers,
  AddWorkersCommand,
} from "./WorkersCommand.ts";
import { Employee } from "../../classes/Employee.ts";

const WorkersAdd = (props) => {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [employeePosition, setEmployeePosition] = useState("");
  const [employeeSalary, setEmployeeSalary] = useState("");
  function onChangeNameHandler(event) {
    setEmployeeName(event.target.value);
  }
  function onChangeIdHandler(event) {
    setEmployeeId(event.target.value);
  }
  function onChangePositionHandler(event) {
    setEmployeePosition(event.target.value);
  }
  function onChangeSalaryHandler(event) {
    setEmployeeSalary(event.target.value);
  }
  function cleanInputs(){
    setEmployeeName('');
    setEmployeeId('');
    setEmployeePosition('');
    setEmployeeSalary('');
  }
  function onSubmitFormHandler(event) {
    event.preventDefault();
    props.manager.SetCommand(new AddWorkersCommand(new Employee(employeeName,employeeId,employeePosition,employeeSalary)));
    props.manager.ExecuteCommands();
    cleanInputs();
  }
  

  return (
    <div className={styles.workersAddContainer}>
      <h2>Add employee</h2>
      <form onSubmit={onSubmitFormHandler}>
        <label htmlFor="employeeName">Emplyee's name:</label>
        <input
          type="text"
          name="employeeName"
          value={employeeName}
          onChange={onChangeNameHandler}
        ></input>
        <label htmlFor="employeeId">Employee's id:</label>
        <input
          type="number"
          name="employeeId"
          value={employeeId}
          onChange={onChangeIdHandler}
        ></input>
        <label htmlFor="employeePosition">Employee's position:</label>
        <input
          type="text"
          name="employeeId"
          value={employeePosition}
          onChange={onChangePositionHandler}
        ></input>
        <label htmlFor="employeeSalary">Employee's salary $:</label>
        <input
          type="number"
          name="employeeId"
          value={employeeSalary}
          onChange={onChangeSalaryHandler}
        ></input>
        <Button >Submit</Button>
      </form>
    </div>
  );
};
export default WorkersAdd;
