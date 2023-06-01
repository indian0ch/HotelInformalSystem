import React, { useState } from "react";
import styles from "./Reservation.module.css";
import {
  Room,
  StandartReservation,
  MiddleReservation,
  LuxuryReservation,
} from "./ReservationStrategy.ts";
import Button from "../UI/Button/Button.js";

const Reservation = (props) => {
  const [priceRoom, setPriceRoom] = useState("100");
  const [nameUser, setNameUser] = useState("");
  const [surnameUser, setSurnameUser] = useState("");
  const [idUser, setIDUser] = useState("");
  const [cityUser, setCityUser] = useState("");
  function onChangeName(event) {
    setNameUser(event.target.value);
  }
  function onChangeSurname(event) {
    setSurnameUser(event.target.value);
  }
  function onChangeCity(event) {
    setIDUser(event.target.value);
  }
  function onChangeID(event) {
    setCityUser(event.target.value);
  }
  function onChangePriceHandler(event) {
    setPriceRoom(event.target.value);
  }
  function onSubmitFormHandler(event) {
    event.preventDefault();
    let roomType = undefined;
    switch (priceRoom) {
      case "100":
        roomType = new StandartReservation();
        break;
      case "200":
        roomType = new MiddleReservation();
        break;
      case "300":
        roomType = new LuxuryReservation();
        break;
    }
    const room = new Room(surnameUser, nameUser, idUser, cityUser, roomType);
    room.Reservation();
  }
  return (
    <div className={styles.reservationContainer}>
      <h2>Reservation section</h2>
      <form onSubmit={onSubmitFormHandler}>
        <label htmlFor="nameUser">Your Name:</label>
        <input type="text" name="nameUser" onChange={onChangeName}></input>
        <label htmlFor="surnameUser">Your Surname:</label>
        <input
          type="text"
          name="surnameUser"
          onChange={onChangeSurname}
        ></input>
        <label htmlFor="cityUser">Your city:</label>
        <input type="text" name="cityUser" onChange={onChangeCity}></input>
        <label htmlFor="idUser">Passport ID:</label>
        <input type="number" name="idUser" onChange={onChangeID}></input>
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
          <p>Price: {priceRoom}$</p>
        </div>
        <Button type="submit">Reservation</Button>
      </form>
    </div>
  );
};
export default Reservation;
