import React, { useState } from 'react';
import Reservation from './components/Reservation/Reservation';

import styled from './App.module.css';

const App = () => {

  return (
    <div>
      <section className={styled.goalform}>
        <Reservation>
          
        </Reservation>
      </section>
      <section className={styled.goal}>

      </section>
    </div>
  );
};

export default App;
