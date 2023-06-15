import React, { forwardRef } from "react";
import styles from "./Input.module.css";

const InputRef = forwardRef(function (props, ref) {
  return (
    <div className={styles.inputDiv}>
      <label htmlFor={props.name}>{props.text}</label>
      <input
        ref={ref}
        name={props.name}
        type={props.type}
      ></input>
    </div>
  );
});

export default InputRef;