import React, { useState } from "react";
import styles from "./Payments.module.css";
import {
  CashPaymentStrategy,
  CreditCardPaymentStrategy,
  PayPalPaymentStrategy,
} from "./PaymentsStrategy.ts";
import Button from "../UI/Button/Button";
import { getGuests, modifyGuest } from "../../classes/Guest.ts";

const Payments = (props) => {
  let guestObj;
  const [userId, setUserId] = useState("");
  const [userDoubt, setUserDoubt] = useState("");
  const [userSum, setUserSum] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("Cash");
  const [payPalName, setPayPalName] = useState("");
  const [payPalPass, setPayPalPass] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiration, setCardExpiration] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  function onChangeIdHandler(event) {
    setUserId(event.target.value);
  }
  function onChangeSumHandler(event) {
    setUserSum(event.target.value);
  }
  function onChangeSelecterHandler(event) {
    setSelectedMethod(event.target.value);
  }
  function onChangePayPalNameHandler(event) {
    setPayPalName(event.target.value);
  }
  function onChangePayPalPassHandler(event) {
    setPayPalPass(event.target.value);
  }
  function onChangeCardNumberHandler(event) {
    setCardNumber(event.target.value);
  }
  function onChangeCardExpirationHandler(event) {
    setCardExpiration(event.target.value);
  }
  function onChangeCardPassHandler(event) {
    setCardCvv(event.target.value);
  }
  async function onClickCheckHandler(event) {
    //event.preventDefault();
    guestObj = await getGuests().then((guestsArr) => {
      return guestsArr.filter((guest) => guest.id == userId);
    });
    if (guestObj.length !== 0) {
      alert(guestObj[0].priceService);
      setUserDoubt(guestObj[0].priceService);
    } else {
      alert("Гостя з таким паспортним номером не знайдено!");
    }
  }
  async function onClickPayHandler(event) {
    event.preventDefault();
    let strategy = undefined;
    switch (selectedMethod) {
      case "Cash":
        strategy = new CashPaymentStrategy();
        break;
      case "PayPal":
        strategy = new PayPalPaymentStrategy(payPalName, payPalPass);
        break;
      case "MonoPay":
        strategy = new CreditCardPaymentStrategy(
          cardNumber,
          cardExpiration,
          cardCvv
        );
        break;
    }
    strategy.pay(userSum);
    if (userSum - userDoubt >= 0) {
      await modifyGuest(userId, 0);
    } else {
      await modifyGuest(userId, userDoubt - userSum);
    }
  }
  return (
    <div className={styles.paymentsContainer}>
      <h2>Payments section</h2>
      <label htmlFor="idUser">Your passport id:</label>
      <input
        type="text"
        name="idUser"
        value={userId}
        onChange={onChangeIdHandler}
      ></input>
      <Button onClick={onClickCheckHandler}>View check</Button>
      <p>Check:{userDoubt}$</p>
      <form>
        <label htmlFor="sumUser">Enter sum:</label>
        <input
          type="text"
          name="sumUser"
          value={userSum}
          onChange={onChangeSumHandler}
        ></input>
        <div>
          <select
            name="paymentsUser"
            className={styles.sectionBox}
            onChange={onChangeSelecterHandler}
          >
            <option value="Cash">Cash</option>
            <option value="PayPal">PayPal</option>
            <option value="MonoPay">MonoPay</option>
          </select>
        </div>
        {selectedMethod === "PayPal" && (
          <div>
            {" "}
            <label htmlFor="paypalUser">Enter PayPal username:</label>
            <input
              type="text"
              name="paypalUser"
              value={payPalName}
              onChange={onChangePayPalNameHandler}
            ></input>
            <label htmlFor="paypalPass">Enter PayPal password:</label>
            <input
              type="password"
              name="paypalPass"
              value={payPalPass}
              onChange={onChangePayPalPassHandler}
            ></input>
          </div>
        )}
        {selectedMethod === "MonoPay" && (
          <div>
            {" "}
            <label htmlFor="cardNumber">Enter card's number:</label>
            <input
              type="text"
              name="cardNumber"
              value={cardNumber}
              onChange={onChangeCardNumberHandler}
            ></input>
            <label htmlFor="cardExpiration">Enter card's expiration:</label>
            <input
              type="password"
              name="cardExpiration"
              value={cardExpiration}
              onChange={onChangeCardExpirationHandler}
            ></input>
            <label htmlFor="cardPass">Enter card's cvv:</label>
            <input
              type="password"
              name="cardPass"
              value={cardCvv}
              onChange={onChangeCardPassHandler}
            ></input>
          </div>
        )}
        <Button onClick={onClickPayHandler}>Pay</Button>
      </form>
    </div>
  );
};
export default Payments;
