import BreakfastInfo from "./BreakfastInfo";
import breakfast from "./BreakfastSource";
import React, { useState } from "react";

function BreakfastRender() {
  const [breakfastInfo] = useState(breakfast);
  return (
<div>
<div className="col-12 d-none d-md-block">
      <div className="footer-title d-flex justify-content-center align-items-center ">
        BREAKFAST RESTAURANTS
      </div>

      <div className="renderInfo mt-2 d-flex flex-wrap col-12 ">
        {breakfastInfo.map((dItem, index) => {
          return (
            <BreakfastInfo
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

export default BreakfastRender;
