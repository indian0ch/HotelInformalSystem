import React, { useState, useEffect } from "react";
import styles from "./ListService.module.css";
import ItemService from "./ItemService";

const ListService = (props) => {
  const [dinnerStatus, setDinnerStatus] = useState(false);
  const [lunchStatus, setLunchStatus] = useState(false);
  const [parkingStatus, setParkingStatus] = useState(false);
  const [fitnessStatus, setFitnessStatus] = useState(false);
  const [roomStatus, setRoomStatus] = useState(false);

  function sendDataHandler(type) {
    switch (type) {
      case "Dinner":
        setDinnerStatus((prev) => !prev);
        break;
      case "Lunch":
        setLunchStatus((prev) => !prev);
        break;
      case "Parking":
        setParkingStatus((prev) => !prev);
        break;
      case "Fitness":
        setFitnessStatus((prev) => !prev);
        break;
      case "Conference Room":
        setRoomStatus((prev) => !prev);
        break;
    }
  }

  useEffect(() => {
    const updatedArr = [
      { type: "Dinner", status: dinnerStatus },
      { type: "Lunch", status: lunchStatus },
      { type: "Parking", status: parkingStatus },
      { type: "Fitness", status: fitnessStatus },
      { type: "Conference Room", status: roomStatus },
    ];
    props.sendData(updatedArr);
  }, [dinnerStatus, lunchStatus, parkingStatus, fitnessStatus, roomStatus]);
  
  return (
    <div className={styles.bod}>
      <fieldset className={styles["checkbox-group"]}>
        <legend className={styles["checkbox-group-legend"]}>
          Choose additional service:
        </legend>
        {props.items.map((item) => (
          <ItemService
            name={item.type}
            src={item.src}
            alt={item.alt}
            key={item.type}
            sendArrToList={sendDataHandler}
          ></ItemService>
        ))}
      </fieldset>
    </div>
  );
};
export default ListService;
