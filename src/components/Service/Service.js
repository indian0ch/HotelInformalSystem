import React, { useState } from "react";
import styles from "./Service.module.css";
import {
  BaseComponent,
  LaunchDecorator,
  DinnerDecorator,
  FreeParkingDecorator,
  FitnessDecorator,
  ConferenceHallDecorator,
} from "./ServiceDecorator.js";
import Button from "../UI/Button/Button";
import ListService from "./ListService";

const Service = (props) => {
  const [clicks, setClicks] = useState([]);
  const [actualPrice, setActualPrice] = useState(`0`);
  const hotelServices = [
    {
      type: "Lunch",
      src: "https://img.icons8.com/fluency-systems-regular/48/lunch.png",
      alt: "",
      status: false,
    },
    {
      type: "Dinner",
      src: "https://img.icons8.com/ios/50/dinner.png",
      alt: "",
      status: false,
    },
    {
      type: "Parking",
      src: "https://img.icons8.com/ios/50/parking.png",
      alt: "",
      status: false,
    },
    {
      type: "Fitness",
      src: "https://img.icons8.com/ios/50/bench-press-with-dumbbells.png",
      alt: "bench-press-with-dumbbells",
      status: false,
    },
    {
      type: "Conference Room",
      src: "https://img.icons8.com/ios/50/meeting-room.png",
      alt: "meeting-room",
      status: false,
    },
  ];
  function onSubmitFormSeviceHandler(event) {
    event.preventDefault();
    let baseService = new BaseComponent();
    let filterArr = clicks.filter((elem) => elem.status === true);
    if (filterArr.length !== 0) {
      let component = undefined;
      for (let i = 0; i < filterArr.length; i++) {
        switch (filterArr[i].type) {
          case hotelServices[0].type:
            component = new LaunchDecorator(baseService);
            break;
          case hotelServices[1].type:
            component = new DinnerDecorator(baseService);
            break;
          case hotelServices[2].type:
            component = new FreeParkingDecorator(baseService);
            break;
          case hotelServices[3].type:
            component = new FitnessDecorator(baseService);
            break;
          case hotelServices[4].type:
            component = new ConferenceHallDecorator(baseService);
            break;
        }
        baseService = component;
      }
    }
    console.log(baseService.operation());
    setActualPrice(baseService.getAmount());
  }
  const onGetDataFromItems = (data) => {
    setClicks(data);
  };
  return (
    <div className={styles.serviceContainer}>
      <h2>Service's component</h2>
      <p>
        Hotel provided a free breakfast, but it just a start service. <br></br>
        So you can choose additional service on your own)
      </p>
      <form onSubmit={onSubmitFormSeviceHandler}>
        <ListService
          items={hotelServices}
          sendData={onGetDataFromItems}
        ></ListService>
        <Button>Check price</Button>
      </form>
      <p>
        <strong>Price:</strong> {actualPrice}$
      </p>
    </div>
  );
};
export default Service;
