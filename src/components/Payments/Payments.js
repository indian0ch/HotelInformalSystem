import React, { useState } from "react";
import styles from "./Payments.module.css";
import { Composite, poolPayment } from "./PaymentsComposite.ts";
import Button from "../UI/Button/Button";

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
      <h2>Payments section</h2>
      <label htmlFor="idUser">Your room number:</label>
      <input type="text" name="idUser"></input>
      <Button>View check</Button>
      <p>Check:$</p>
      <form >
        <label htmlFor="sumUser">Enter sum:</label>
        <input type="text" name="sumUser"></input>
        <div>
          <select name="paymentsUser" className={styles.sectionBox}>
            <option value="PayPal">PayPal</option>
            <option value="Privat24">Privat24</option>
            <option value="MonoPay">MonoPay</option>
          </select>
        </div>
        <Button>Pay</Button>
      </form>
    </div>
  );
};
export default Payments;
