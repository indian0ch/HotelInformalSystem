import React, { useState, useRef, useReducer } from "react";
import styles from "./Reservation.module.css";
import { ReservationRoom, ReservationRoomFacade } from "./ReservationFacade.ts";
import Button from "../UI/Button/Button.js";
import Service from "../Service/Service";
import Input from "../UI/Button/Input";
import InputRef from "../UI/Button/InputRef";

function reducerDate(state, action) {
  switch (action.type) {
    case "Change_Arrived_Date": {
      if (action.val > state.outDate && state.outDate !== "") {
        alert("Out date earlier than arrived)");
        return { arraivedDate: state.arraivedDate, outDate: state.outDate };
      } else {
        return { arraivedDate: action.val, outDate: state.outDate };
      }
    }
    case "Change_Out_Date": {
      if (state.arraivedDate > action.val) {
        alert("Out date earlier than arrived)");
        return { arraivedDate: state.arraivedDate, outDate: state.outDate };
      } else {
        return { arraivedDate: state.arraivedDate, outDate: action.val };
      }
    }
    case "Clean": {
      return { arraivedDate: "", outDate: "" };
    }
  }
}

const Reservation = (props) => {
  const [stateDate, dispatchDate] = useReducer(reducerDate, {
    arraivedDate: "",
    outDate: "",
  });
  const [priceRoom, setPriceRoom] = useState(100);
  const [priceService, setPriceService] = useState(0);
  const nameUser = useRef();
  const emailUser = useRef();
  const idUser = useRef();
  const phoneNumberUser = useRef();

  function onChangePriceHandler(event) {
    setPriceRoom(event.target.value);
  }

  function onChangeArraivedDate(event) {
    dispatchDate({ type: "Change_Arrived_Date", val: event.target.value });
    console.log(stateDate);
  }

  function onChangeOutDate(event) {
    dispatchDate({ type: "Change_Out_Date", val: event.target.value });
  }

  function onSendServiceHandler(baseComponent) {
    setPriceService(baseComponent.getAmount());
  }

  function checkValidation() {
    if (
      nameUser.current.value !== "" &&
      emailUser.current.value !== "" &&
      idUser.current.value !== "" &&
      phoneNumberUser.current.value !== "" &&
      stateDate.arraivedDate !== "" &&
      stateDate.outDate !== ""
    ) {
      return true;
    }
    return false;
  }

  function cleanInputs() {
    nameUser.current.value = "";
    emailUser.current.value = "";
    idUser.current.value = "";
    phoneNumberUser.current.value = "";
    dispatchDate({ type: "Clean" });
  }

  function onSubmitFormHandler(event) {
    event.preventDefault();

    if (checkValidation() === true) {
      let totalSumCount =
        ((new Date(stateDate.outDate) - new Date(stateDate.arraivedDate)) /
          (1000 * 60 * 60 * 24)) *
          priceRoom +
        priceService;

      let resroom = new ReservationRoom(
        nameUser.current.value,
        phoneNumberUser.current.value,
        idUser.current.value,
        emailUser.current.value,
        stateDate.arraivedDate,
        stateDate.outDate,
        priceRoom,
        totalSumCount
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
        <InputRef text="Your Full Name:" name="nameUser" type="text" ref={nameUser}></InputRef>
        <InputRef text="Your email:" name="emailUser" type="text" ref={emailUser}></InputRef>
        <InputRef text="Your phone number:" name="phoneUser" type="text" ref={phoneNumberUser}></InputRef>
        <InputRef text="Passport ID:" name="idUser" type="number" ref={idUser}></InputRef>
        <Input
          text="Arrived date:"
          type="date"
          name="dateArrived"
          value={stateDate.arraivedDate}
          onChange={onChangeArraivedDate}
        ></Input>
        <Input
          text="Out date:"
          type="date"
          name="dateOut"
          value={stateDate.outDate}
          onChange={onChangeOutDate}
        ></Input>
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
