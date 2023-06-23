import React, { useState } from "react";
import styles from "./Input.module.css";

function Input(props) {
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);
  function onBlurInputHandler() {
    if (props.value === "") {
      setIsFieldEmpty(true);
    } else {
      setIsFieldEmpty(false);
    }
  }

  return (
    <div className={styles.inputDiv}>
      <label htmlFor={props.name}>{props.text}</label>
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={onBlurInputHandler}
      ></input>
      {isFieldEmpty === true && <p>Field should not be an empty</p>}
    </div>
  );
}
export default Input;
