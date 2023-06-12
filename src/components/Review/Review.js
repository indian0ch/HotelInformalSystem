import React, { useState, useRef } from "react";
import styles from "./Review.module.css";
import { HotelAdministration, ResidentReviews } from "./ReviewObserver.ts";
import Button from "../UI/Button/Button";

const Review = (props) => {
  const residentName = useRef();
  const reviewText = useRef();
  const [reviewerName, setReviewerName] = useState("Andrii Fesiuk");
  const [reviewerLevel, setReviewerLevel] = useState("0");

  function onChangeSelectHandler(event) {
    setReviewerName(event.target.value);
  }

  function onChangeLevelHandler(event) {
    setReviewerLevel(event.target.value);
  }
  
  function onSubmitFormHandler(event) {
    event.preventDefault();
    const administator = new HotelAdministration(reviewerName);
    const review = new ResidentReviews(
      residentName.current.value,
      reviewText.current.value
    );
    review.attach(administator);
    review.SatisfactionLevelSet = reviewerLevel;
  }

  return (
    <div className={styles.reviewContainer}>
      <h2>Review section</h2>
      <form onSubmit={onSubmitFormHandler}>
        <label htmlFor="reviewT">Your full-name:</label>
        <input
          type="text"
          placeholder="Andrii Fesik"
          ref={residentName}
        ></input>
        <label htmlFor="reviewT">Write your review about the Hotel:</label>
        <textarea
          type="text"
          name="reviewT"
          placeholder="Review's text"
          ref={reviewText}
        ></textarea>
        <div className={styles.reviewerSection}>
          <label
            className={styles.reviewSelectLabel}
            style={{ display: "inline" }}
          >
            Choose reviewer:
          </label>
          <select
            onChange={onChangeSelectHandler}
            className={styles.reviewSelect}
          >
            <option value="Andrii Fesiuk">Andrii Fesiuk, Principle</option>
            <option value="Maks">Maks Bondarenko, Host-Administartor</option>
          </select>
        </div>
        <div className={styles.levelSection}>
          <label
            className={styles.reviewSelectLabel}
            style={{ display: "inline" }}
          >
            Choose satisfaction level:
          </label>
          <select
            onChange={onChangeLevelHandler}
            className={styles.reviewSelect}
          >
            <option value="0">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <Button type="submit" style={{ margin: "0" }}>
          Send review
        </Button>
      </form>
    </div>
  );
};
export default Review;
