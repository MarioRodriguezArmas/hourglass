import DinningInfo from "../dinning/DinningInfo";
import dinning from "../dinning/SourceFooterDinning";
import React, { useState } from "react";

function DinningRender() {
  const [dinningInfo] = useState(dinning);
  return (
    <div className="col-4 d-none d-md-block"> 
      <div className="footer-title d-flex justify-content-center align-items-center ">
        DINNING RESTAURANTS
      </div>

 <div className="renderInfo mt-2 d-flex flex-wrap col-12">
 {dinningInfo.map((dItem, index) => {
        return (
          <DinningInfo
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
  );
}

export default DinningRender;
