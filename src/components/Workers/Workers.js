import React, { useState } from "react";
import styles from "./Workers.module.css";
import {
  Manager,
  Workers as workers,
  AddWorkersCommand,
  FireWorkersCommand,
} from "./WorkersCommand.js";

const Workers = (props) => {
  //   const manager = new Manager();
  //   const worker = new workers();
  //   manager.SetCommand(new AddWorkersCommand(worker, "Andrii", "principle"));
  //   manager.ExecuteCommands();
  //   worker.CheckList();
  //   manager.SetCommand(new AddWorkersCommand(worker, "у", "у"));
  //   manager.ExecuteCommands();
  //   worker.CheckList();
  //   manager.SetCommand(new FireWorkersCommand(worker, "у"));
  //   manager.ExecuteCommands();
  //   worker.CheckList();
  return (
    <div className={styles.workersContainer}>
      <p>Workers front-end part</p>
    </div>
  );
};
export default Workers;
