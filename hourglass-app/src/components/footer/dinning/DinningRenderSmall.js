import DinningInfoSmall from "./DinnindInfoSmall";
import dinning from "../dinning/SourceFooterDinning";
import React, { useState } from "react";


function DinningRenderSmall() {
    const [dinningfastInfo] = useState(dinning);
    return (
  <div>
  <div className=" d-md-none">
        <div className="footer-title-small d-flex justify-content-center align-items-center mt-2 ">
        DNNING RESTAURANTS
        </div>
  
        <div className="renderInfo-small mt-3 ">
          {dinningfastInfo.map((dItem, index) => {
            return (
              <DinningInfoSmall
                key={index}
                img={dItem.img}
                name={dItem.name}
                type={dItem.type}
                service={dItem.service}
                hour={dItem.hour}
                members={dItem.members}
              />
            );
          })}
        </div>
      </div>
  </div>
    );
  }
  
  export default DinningRenderSmall;
  
