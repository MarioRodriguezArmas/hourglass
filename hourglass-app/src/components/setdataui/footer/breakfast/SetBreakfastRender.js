import SetBreakfastInfo from "./SetBreakfastInfo";
import breakfast from "./SetBreakfastSource";
import React, { useState } from "react";

function SetBreakfastRender() {
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
            <SetBreakfastInfo
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

export default SetBreakfastRender;
