import React from "react";
import "./ItemService.css";

const ItemService = (props) => {
  function onChangeHandler(event) {
    props.sendArrToList(event.target.value);
  }

  return (
    <div className="checkbox">
      <label className="checkbox-wrapper">
        <input
          type="checkbox"
          className="checkbox-input"
          onChange={onChangeHandler}
          value={props.name}
        />
        <span className="checkbox-tile">
          <span className="checkbox-icon">
            <img width="50" height="50" src={props.src} alt={props.alt} />
          </span>
          <span className="checkbox-label">{props.name}</span>
        </span>
      </label>
    </div>
  );
};

export default ItemService;
