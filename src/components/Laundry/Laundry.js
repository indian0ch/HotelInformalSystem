import React, { useState } from "react";
import styles from "./Laundry.module.css";
import Button from "../UI/Button/Button";
import { LaundryContext, StandardLaundryStrategy } from "./LaundryStrategy.ts";
import LaundrySynthetics from "./LaundrySynthetics.js";
import LaundryCotton from "./LaundryCotton";

const Laundry = (props) => {
  const [washingType, setWashingType] = useState("Standard");
  const [washingWeight, setWashingWeight] = useState();
  const laundry = new LaundryContext();
  //const [washingWeight, setWashingWeight] = useState('');

  //   function onClickAddHandler() {
  //     setWhichEmplyeeButtonActive("Add");
  //   }
  function onChangeSelectHandler(event) {
    setWashingType(event.target.value);
  }
  function onChangeWeightHandler(event) {
    setWashingWeight(event.target.value);
  }
  function onClickButtonHandler(event) {
    event.preventDefault();
    const standard = new StandardLaundryStrategy();
    laundry.setStrategy(standard);
    laundry.executeLaundry();
  }

  return (
    <div className={styles.laundryContainer}>
      <h2>Laundry module</h2>
      <div>
        <label htmlFor="cloWeight">Enter clothe's weight(kg):</label>
        <input
          type="number"
          name="cloWeight"
          value={washingWeight}
          onChange={onChangeWeightHandler}
        ></input>
        <label>Choose clothe's type:</label>
        <select onChange={onChangeSelectHandler}>
          <option value="Standard">Standard</option>
          <option value="Synthetics">Synthetics</option>
          <option value="Cotton">Cotton</option>
        </select>
        {washingType === "Synthetics" && (
          <LaundrySynthetics
            laundryContext={laundry}
            weight={washingWeight}
          ></LaundrySynthetics>
        )}
        {washingType === "Cotton" && (
          <LaundryCotton
            laundryContext={laundry}
            weight={washingWeight}
          ></LaundryCotton>
        )}
        {washingType === "Standard" && (
          <Button onClick={onClickButtonHandler}>Check washing info</Button>
        )}
      </div>
    </div>
  );
};
export default Laundry;