import React, { useState } from "react";
import Reservation from "./components/Reservation/Reservation";
import Review from "./components/Review/Review";
import Payments from "./components/Payments/Payments";
import Authentication from "./components/Authentication/Authentication";
import Button from "./components/UI/Button/Button";
import styled from "./App.module.css";
import { BrowserRouter, Routes, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styled.blockPage}>
        <div className={styled.linksColumn}>
        <Link to="/reservation">Reservation module</Link>
        <Link to="/payments">Payments module</Link>
        <Link to="/review">Review module</Link>
        <Link to="/authentication">Authentication module</Link>
        </div>
        
        <Routes>
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/review" element={<Review />} />
          <Route path="/authentication" element={<Authentication />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
