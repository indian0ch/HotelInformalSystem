import React from "react";
import Reservation from "./components/Reservation/Reservation";
import Review from "./components/Review/Review";
import Payments from "./components/Payments/Payments";
import Authentication from "./components/Authentication/Authentication";
import styled from "./App.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Laundry from "./components/Laundry/Laundry";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styled.blockPage}>
        <div className={styled.linksColumn}>
          <Link to="/">Home </Link>
          <Link to="/reservation">Reservation module</Link>
          <Link to="/payments">Payments module</Link>
          <Link to="/review">Review module</Link>
          <Link to="/authentication">Authentication module</Link>
          <Link to="/laundry">Laundry module</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/review" element={<Review />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/laundry" element={<Laundry />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
