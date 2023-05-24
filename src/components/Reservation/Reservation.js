import React from "react";
import styles from "./Reservation.module.css";
import { Room } from './ReservationStrategy.js';


const Reservation = (props) => {
    const room=new Room();
    room.Reservation();
    // const adm=new HotelAdministration();
    // const res=new Residents();
    // const res1=new Residents();

    //  res.Attach(adm);
    //  res.SatisfactionLevelSet=2;

    //  res1.Attach(adm);
    //  res1.SatisfactionLevelSet=33;
  return <div className={styles.reservationContainer}>
      <p>Hello</p>
  </div>
};
export default Reservation;