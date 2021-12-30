import React from "react";

function SetBreakfastInfo(props) {
  return (
    
      <div className="footer-dinning-container d-flex flex-column col-12 ">
        <div className="footer-dinning-card  col-12 ">
          <div className="restaurant-name-container">
            <div className="restaurant-name">{props.name}</div>
          </div>

          <div className="footer-card-container_items d-flex flex-row justify-content-around align-items-center col-12">
            <img
              className="dinning-icon rounded"
              src={props.img}
              alt="restaurant"
            />
            <div className="restaurant-info">
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

export default SetBreakfastInfo;
