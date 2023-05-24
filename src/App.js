import React, { useState } from 'react';
import Reservation from './components/Reservation/Reservation';
import Review from './components/Review/Review';
import styled from './App.module.css';

const App = () => {

  return (
    <div>
      <section className={styled.goalform}>
        <Reservation>

        </Reservation>
      </section>
      <section className={styled.goal}>
        <Review>
          
        </Review>
      </section>
    </div>
  );
};

export default App;
