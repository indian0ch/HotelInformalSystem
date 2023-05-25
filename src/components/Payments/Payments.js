import React, { useState } from "react";
import styles from "./Payments.module.css";
import { Composite, poolPayment } from "./PaymentsComposite.js";

const Payments = (props) => {
  // const spa = new Composite(); // Pass the desired arguments to the constructor
  // const hotel = new Composite();
  // console.log(spa.name);
  // const pool = new poolPayment(400);
  // console.log(pool.amountService);
  // const pool2 = new poolPayment(300);
  // spa.AddComponent(pool);
  // spa.AddComponent(pool2);
  // console.log(spa.getAmount);
  // spa.addPayment(33);
  // console.log(spa.getAmount);
  // spa.issueRefund(33);
  // console.log(spa.getAmount);
  return (
    <div className={styles.paymentsContainer}>
      <p>Payments front-end part</p>
    </div>
  );
};
export default Payments;
