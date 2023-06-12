import React, { useState, useRef } from "react";
import styles from "./Payments.module.css";
import { PaymentFactory } from "./PaymentsFactoryMethod.ts";
import Button from "../UI/Button/Button";
import { getGuests, modifyGuest } from "../../classes/Guest.ts";

const Payments = (props) => {
  const userId = useRef();
  const userSumInput = useRef();
  const payPalName = useRef();
  const payPalPass = useRef();
  const cardNumber = useRef();
  const cardExpiration = useRef();
  const cardCvv = useRef();
  const [userDoubt, setUserDoubt] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("Cash");
  let guestObj;

  function onChangeSelecterHandler(event) {
    setSelectedMethod(event.target.value);
  }
  async function onClickCheckHandler(event) {
    event.preventDefault();
    guestObj = await getGuests().then((guestsArr) => {
      return guestsArr.filter((guest) => guest.id == userId.current.value);
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
    const userSum = userSumInput.current.value;
    let paymentFactory = new PaymentFactory();

    let payments = paymentFactory.createPayment(selectedMethod, {
      cardNumber: cardNumber.current.value,
      cardExpiration: cardExpiration.current.value,
      cardCvv: cardCvv.current.value,
      payPalName: payPalName.current.value,
      payPalPass: payPalPass.current.value,
    });

    payments.pay(userSum);

    if (userSum - userDoubt >= 0) {
      await modifyGuest(userId.current.value, 0);
    } else {
      await modifyGuest(userId.current.value, userDoubt - userSum);
    }
  }

  return (
    <div className={styles.paymentsContainer}>
      <h2>Payments section</h2>
      <label htmlFor="idUser">Your passport id:</label>
      <input type="text" name="idUser" ref={userId}></input>
      <Button onClick={onClickCheckHandler}>View check</Button>
      <p>Check:{userDoubt}$</p>
      <form>
        <label htmlFor="sumUser">Enter sum:</label>
        <input type="text" name="sumUser" ref={userSumInput}></input>
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
            <input type="text" name="paypalUser" ref={payPalName}></input>
            <label htmlFor="paypalPass">Enter PayPal password:</label>
            <input type="password" name="paypalPass" ref={payPalPass}></input>
          </div>
        )}
        {selectedMethod === "MonoPay" && (
          <div>
            {" "}
            <label htmlFor="cardNumber">Enter card's number:</label>
            <input type="text" name="cardNumber" ref={cardNumber}></input>
            <label htmlFor="cardExpiration">Enter card's expiration:</label>
            <input
              type="password"
              name="cardExpiration"
              ref={cardExpiration}
            ></input>
            <label htmlFor="cardPass">Enter card's cvv:</label>
            <input type="password" name="cardPass" ref={cardCvv}></input>
          </div>
        )}
        <Button onClick={onClickPayHandler}>Pay</Button>
      </form>
    </div>
  );
};
export default Payments;
