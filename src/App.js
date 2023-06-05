import React, { useState } from "react";
import Reservation from "./components/Reservation/Reservation";
import Review from "./components/Review/Review";
import Payments from "./components/Payments/Payments";
import Authentication from "./components/Authentication/Authentication";
import styled from "./App.module.css";

const App = () => {
  return (
    <div>
      <section className={styled.goalform}>
        <Reservation></Reservation>
      </section>
      <section>
        <Payments></Payments>
      </section>
      <section className={styled.goalform}>
        <Review></Review>
      </section>
      <section>
        <Authentication></Authentication>
      </section>
      {/* <section>
        <Authentication />
      </section> */}
    </div>
  );
};

export default App;
