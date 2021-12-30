import React from "react";
import '../../style/Small.css'

export const SetCarouselSmallInfo = (props) => {
  return (
    <div className="carousel-small  d-flex flex-column justify-content-center align-items-center  ">
      <div className="img-container-small d-flex justify-content-center align-items-center ">
        <img className="img-small rounded" src={props.img} alt="imagen" />
      </div>
      <div className="desc-container-small position-absolute d-flex justify-content-between flex-column align-items-center">
        <div className="hour-small">{props.hour}</div>
        <div className="img-info-small d-flex flex-column justify-content-center align-items-center">
          <div className="activity-location-small d-flex flex-column justify-content-center align-items-center">
            <div className="activity-small">{props.activity}</div>
            <div className="location-small">{props.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

