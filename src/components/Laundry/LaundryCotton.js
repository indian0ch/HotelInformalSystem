import React, { useState } from "react";
import Button from "../UI/Button/Button";
import { CottonLaundryStrategy } from "./LaundryStrategy.ts";

const LaundryCotton = (props) => {
  const [cottonPercentage, setCottonPercentage] = useState();
  const [cottonTemperature, setCottonTemperature] = useState();

  function onChangePercentageHandler(event) {
    setCottonPercentage(event.target.value);
  }
  function onChangeTemperatureHandler(event) {
    setCottonTemperature(event.target.value);
  }
  function onClickHandler(event) {
    event.preventDefault();
    const cottonStrategy = new CottonLaundryStrategy(
      props.weight,
      cottonPercentage,
      cottonTemperature
    );
    props.laundryContext.setStrategy(cottonStrategy);
    props.laundryContext.executeLaundry();
  }

  return (
    <div>
      <label>Put cotton's percentage:</label>
      <input
        type="number"
        value={cottonPercentage}
        onChange={onChangePercentageHandler}
      ></input>
      <label>Put choosen temperature:</label>
      <input
        type="number"
        value={cottonTemperature}
        onChange={onChangeTemperatureHandler}
      ></input>
      <Button onClick={onClickHandler}>Check washing info</Button>
    </div>
  );
};
export default LaundryCotton;
