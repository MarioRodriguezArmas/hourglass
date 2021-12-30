import SetBreakfastInfoSmall from "./SetBreakfastInfoSmall";
import breakfast from "./SetBreakfastSource";
import React, { useState } from "react";


function SetBreakfastRenderSmall() {
  const [breakfastInfo] = useState(breakfast);
  return (
<div>
<div className=" d-md-none">
      <div className="footer-title-small d-flex justify-content-center align-items-center mt- ">
        BREAKFAST RESTAURANTS
      </div>

      <div className="renderInfo-small mt-1  ">
        {breakfastInfo.map((dItem, index) => {
          return (
            <SetBreakfastInfoSmall
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

export default SetBreakfastRenderSmall;
