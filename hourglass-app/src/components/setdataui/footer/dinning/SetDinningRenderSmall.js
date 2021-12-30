import SetDinningInfoSmall from "./SetDinningInfoSmall";
import dinning from "./SourceFooterDinning";
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
              <SetDinningInfoSmall
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
  
