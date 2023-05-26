import React, { useState } from "react";
import styles from "./Service.module.css";
import {BaseComponent,LaunchDecorator,DinnerDecorator,FreeParkingDecorator,FitnessDecorator,ConferenceHallDecorator} from "./ServiceDecorator.js";

const Service = (props) => {

  const baseService=new BaseComponent();
  const launch=new LaunchDecorator(baseService);
  const dinner=new DinnerDecorator(launch);
  const parking=new FreeParkingDecorator(dinner)
  console.log(parking.operation());
  console.log(parking.getAmount());
  
  return (
    <div className={styles.serviceContainer}>
      <p>Service's component front-end part</p>
    </div>
  );
};
export default Service;
