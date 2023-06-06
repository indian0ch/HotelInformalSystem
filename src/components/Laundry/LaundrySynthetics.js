import React, { useState } from "react";
import Button from "../UI/Button/Button";
import { SyntheticsLaundryStrategy } from "./LaundryStrategy.ts";

const LaundrySynthetics = (props) => {
  const [syntheticType, setSyntheticType] = useState("Rayon");

  function onChangeSelectHandler(event) {
    setSyntheticType(event.target.value);
  }
  function onClickHandler(event) {
    event.preventDefault();
    const synthStrategy = new SyntheticsLaundryStrategy(
      props.weight,
      syntheticType
    );
    props.laundryContext.setStrategy(synthStrategy);
    props.laundryContext.executeLaundry();
  }

  return (
    <div>
      <label>Choose synthetic's type:</label>
      <select onChange={onChangeSelectHandler}>
        <option value="Rayon">Rayon</option>
        <option value="Acrilic">Acrilic</option>
        <option value="Polyester">Polyester</option>
      </select>
      <div></div>
      <Button onClick={onClickHandler}>Check washing info</Button>
    </div>
  );
};
export default LaundrySynthetics;
