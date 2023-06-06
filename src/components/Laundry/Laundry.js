import React, { useState } from "react";
import styles from "./Laundry.module.css";
import Button from "../UI/Button/Button";
import {
    LaundryContext,
  StandardLaundryStrategy,
  SyntheticsLaundryStrategy,
  CottonLaundryStrategy,
} from "./LaundryStrategy.ts";

const Laundry = (props) => {
  const [washingType, setWashingType] = useState("Standard");
  const [washingWeight, setWashingWeight] = useState('');
  const laundry=new LaundryContext();
  //const [washingWeight, setWashingWeight] = useState('');

  //   function onClickAddHandler() {
  //     setWhichEmplyeeButtonActive("Add");
  //   }

  return (
    <div className={styles.laundryContainer}>
      <h2>Laundry module</h2>
    </div>
  );
};
export default Laundry;
