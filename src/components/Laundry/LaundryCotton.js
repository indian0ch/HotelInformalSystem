import React, {useRef } from "react";
import Button from "../UI/Button/Button";
import { CottonLaundryStrategy } from "./LaundryStrategy.ts";

const LaundryCotton = (props) => {
  const cottonPercentage = useRef();
  const cottonTemperature = useRef();

  function onClickHandler(event) {
    event.preventDefault();
    const cottonStrategy = new CottonLaundryStrategy(
      props.weight,
      cottonPercentage.current.value,
      cottonTemperature.current.value
    );
    props.laundryContext.setStrategy(cottonStrategy);
    props.laundryContext.executeLaundry();
    cottonPercentage.current.value = "";
    cottonTemperature.current.value = "";
  }

  return (
    <div>
      <label>Put cotton's percentage:</label>
      <input type="number" ref={cottonPercentage}></input>
      <label>Put choosen temperature:</label>
      <input type="number" ref={cottonTemperature}></input>
      <Button onClick={onClickHandler}>Check washing info</Button>
    </div>
  );
};
export default LaundryCotton;
