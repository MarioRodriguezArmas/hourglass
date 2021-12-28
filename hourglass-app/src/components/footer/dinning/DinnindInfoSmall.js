import React from "react";

function DinningInfoSmall(props) {
  return (
    <div className="footer-dinning-container-small d-flex flex-column col-12">
      <div className="footer-dinning-card-small  col-12 ">
        <div className="restaurant-name-container-small">
        <div className="restaurant-name-small">{props.name}</div>
        </div>
        
        <div className="footer-card-container_items-small d-flex flex-row justify-content-around align-items-center col-12">
          <img
            className="dinning-icon-small rounded"
            src={props.img}
            alt="restaurant"
          />
          <div className="restaurant-info-small">
            <div>{props.type}</div>
            <div>{props.service}</div>
            <div>{props.hour}</div>
            <div>{props.members}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DinningInfoSmall;
