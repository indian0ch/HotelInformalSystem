import React, { } from "react";
import styles from "./Input.module.css";

function Input(props) {
  return (
    <div className={styles.inputDiv}>
        <label htmlFor={props.name}>{props.text}</label>
        <input name={props.name} type={props.type} value={props.value} onChange={props.onChange}></input>
    </div>
  );
}
export default Input;