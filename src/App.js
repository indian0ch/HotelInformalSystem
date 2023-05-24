import React, { useState } from "react";
import Reservation from "./components/Reservation/Reservation";
import Review from "./components/Review/Review";
import Workers from "./components/Workers/Workers";
import Payments from "./components/Payments/Payments";
import Service from "./components/Service/Service";
import styled from "./App.module.css";

const App = () => {
  return (
    <div>
      <section className={styled.goalform}>
        <Reservation></Reservation>
      </section>
      <section className={styled.goal}>
        <Review></Review>
      </section>
      <section>
        <Workers></Workers>
      </section>
      <section>
        <Payments></Payments>
      </section>
      <section>
        <Service />
      </section>
    </div>
  );
};

export default App;
