import React from "react";

export const SetCarouselInfo = (props) => {
  return (
    <div className="carousel  d-flex flex-column justify-content-center align-items-center  ">
      <div className="img-container d-flex justify-content-center align-items-center ">
        <img className="img rounded" src={props.img} alt="imagen" />
      </div>
      <div className="desc-container position-absolute d-flex justify-content-between flex-column align-items-center">
        <div className="hour">{props.hour}</div>
        <div className="img-info">
          <div className="activity-location d-flex flex-column justify-content-center align-items-center">
            <div className="activity">{props.activity}</div>
            <div className="location">{props.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

