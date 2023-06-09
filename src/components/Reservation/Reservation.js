import React, { useState } from "react";
import styles from "./Reservation.module.css";
import { ReservationRoom, ReservationRoomFacade } from "./ReservationFacade.ts";
import Button from "../UI/Button/Button.js";
import Service from "../Service/Service";

const Reservation = (props) => {
  const [priceRoom, setPriceRoom] = useState(100);
  const [nameUser, setNameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [idUser, setIDUser] = useState("");
  const [phoneNumberUser, setPhoneNumberUser] = useState("");
  const [arraivedDate, setArraivedDate] = useState("");
  const [outDate, setOutDate] = useState("");
  const [priceService, setPriceService] = useState(0);

  function onChangeName(event) {
    setNameUser(event.target.value);
  }
  function onChangeEmail(event) {
    setEmailUser(event.target.value);
  }
  function onChangePhone(event) {
    setPhoneNumberUser(event.target.value);
  }
  function onChangeID(event) {
    setIDUser(event.target.value);
  }
  function onChangePriceHandler(event) {
    setPriceRoom(event.target.value);
  }
  function onChangeArraivedDate(event) {
    if (event.target.value > outDate && outDate !== "") {
      alert("Out date earlier than arrived)");
    } else {
      setArraivedDate(event.target.value);
    }
  }
  function onChangeOutDate(event) {
    if (arraivedDate > event.target.value) {
      alert("Out date earlier than arrived)");
    } else {
      setOutDate(event.target.value);
    }
  }
  function onSendServiceHandler(baseComponent) {
    setPriceService(baseComponent.getAmount());
    console.log(baseComponent.getAmount());
  }
  function checkValidation() {
    if (
      nameUser !== "" &&
      emailUser !== "" &&
      idUser !== "" &&
      phoneNumberUser !== "" &&
      arraivedDate !== "" &&
      outDate !== ""
    ) {
      return true;
    }
    return false;
  }
  function cleanInputs() {
    setNameUser("");
    setEmailUser("");
    setIDUser("");
    setPhoneNumberUser("");
    setArraivedDate("");
    setOutDate("");
  }
  function onSubmitFormHandler(event) {
    event.preventDefault();
    if (checkValidation() === true) {
      let totalCount =
        ((new Date(outDate) - new Date(arraivedDate)) / (1000 * 60 * 60 * 24)) *
          priceRoom +
        priceService;
      let resroom = new ReservationRoom(
        nameUser,
        phoneNumberUser,
        idUser,
        emailUser,
        arraivedDate,
        outDate,
        priceRoom,
        totalCount
      );
      let res = new ReservationRoomFacade(resroom);
      res.doReservation();
      cleanInputs();
    } else {
      alert("Some fields are underfined!");
    }
  }

  return (
    <div className={styles.reservationContainer}>
      <h2>Rooms' reservation section</h2>
      <form onSubmit={onSubmitFormHandler}>
        <label htmlFor="nameUser">Your Full Name:</label>
        <input
          type="text"
          name="nameUser"
          onChange={onChangeName}
          value={nameUser}
        ></input>
        <label htmlFor="emailUser">Your email:</label>
        <input
          type="text"
          name="emailUser"
          onChange={onChangeEmail}
          value={emailUser}
        ></input>
        <label htmlFor="phoneUser">Your phone number:</label>
        <input
          type="text"
          name="phoneUser"
          onChange={onChangePhone}
          value={phoneNumberUser}
        ></input>
        <label htmlFor="idUser">Passport ID:</label>
        <input
          type="number"
          name="idUser"
          onChange={onChangeID}
          value={idUser}
        ></input>
        <label htmlFor="dateArrived">Arrived date:</label>
        <input
          type="date"
          name="dateArrived"
          max=""
          value={arraivedDate}
          onChange={onChangeArraivedDate}
        ></input>
        <label htmlFor="dateOut">Out date:</label>
        <input
          type="date"
          name="dateOut"
          max=""
          value={outDate}
          onChange={onChangeOutDate}
        ></input>
        <label htmlFor="roomUser">Room's type:</label>
        <div>
          <select
            name="roomUser"
            className={styles.sectionBox}
            onChange={onChangePriceHandler}
          >
            <option value="100">Standart room</option>
            <option value="200">Middle room</option>
            <option value="300">Luxury room</option>
          </select>
          <p>Price: {priceRoom}$ per night</p>
        </div>
        <Service sendServices={onSendServiceHandler}></Service>
        <Button type="submit">Reservation</Button>
      </form>
    </div>
  );
};
export default Reservation;
