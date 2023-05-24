import React from "react";
import styles from "./Review.module.css";
import { HotelAdministration, Residents } from './ReviewObserver.js';


const Review = (props) => {
    const adm=new HotelAdministration();
    const res=new Residents();
    const res1=new Residents();

     res.Attach(adm);
     res.SatisfactionLevelSet=2;

     res1.Attach(adm);
     res1.SatisfactionLevelSet=33;
  return <div className={styles.reviewContainer}>
      <p>Hello</p>
  </div>
};
export default Review;