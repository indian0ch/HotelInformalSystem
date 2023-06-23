import React, { forwardRef, useState } from "react";
import styles from "./Input.module.css";

const InputRef = forwardRef(function (props, ref) {
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);

  function onBlurInputHandler() {
    if (ref.current.value === "") {
      setIsFieldEmpty(true);
    } else {
      setIsFieldEmpty(false);
    }
  }

  return (
    <div className={styles.inputDiv}>
      <label htmlFor={props.name}>{props.children}</label>
      <input
        ref={ref}
        name={props.name}
        type={props.type}
        onBlur={onBlurInputHandler}
      ></input>
      {isFieldEmpty === true && <p>Field should not be an empty</p>}
    </div>
  );
});

export default InputRef;
