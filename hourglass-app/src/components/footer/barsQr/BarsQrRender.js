import React, { useState } from "react";
import breakfast from "./SourceBarQr";
import BreakfastInfo from "./BarsQrInfo";
import qr from '../../../images/carousel-images/codigoQr.png'

function BarsQrRender() {
  const [breakfastInfo] = useState(breakfast);
  return (
    <div className="col-2 d-none d-md-block">
      <div className="footer-title d-flex justify-content-center align-items-center ">
        BARS
      </div>
      <div className="renderBars-info mt-2">
        {breakfastInfo.map((bItem, index) => {
          return (
            <BreakfastInfo
              key={index}
              img={bItem.img}
              name={bItem.name}
              hour={bItem.hour}
            />
          );
        })}
      </div>
      <div className="qr mt-3 d-flex justify-content-around align-items-center">
        <img src={qr} alt='qr'/>
        <div className="scanme d-flex flex-column justify-content-center align-items-center">
        <div>OUR ACTIVITIES</div>
        <div>SCAN ME</div>
        </div>
      </div>
    </div>
  );
}

export default BarsQrRender;
