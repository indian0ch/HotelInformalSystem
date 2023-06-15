import React, { useRef } from "react";
import Button from "../UI/Button/Button";
import { CottonLaundryStrategy } from "./LaundryStrategy.ts";
import InputRef from "../UI/Button/InputRef";

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
      <InputRef
        text="Put cotton's percentage:"
        name="cloPercentage"
        type="number"
        ref={cottonPercentage}
      ></InputRef>
      <InputRef
        text="Put choosen temperature:"
        name="cloTemperatur"
        type="number"
        ref={cottonTemperature}
      ></InputRef>
      <Button onClick={onClickHandler}>Check washing info</Button>
    </div>
  );
};
export default LaundryCotton;
