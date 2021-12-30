import React, { useState } from "react";
import breakfast from "./SourceBarQr";
import BarsQrInfoSmall from "./SetBarsQrInfoSmall";
import qr from '../../../../images/carousel-images/codigoQr.png'
import '../../../../style/Small.css'

function SetBarsQrRender() {
  const [breakfastInfo] = useState(breakfast);
  return (
    <div className="col-12 d-md-none ">
      <div className="footer-title-small mt-3 d-flex justify-content-center align-items-center ">
        BARS
      </div>
      <div className="renderBars-info mt-3">
        {breakfastInfo.map((bItem, index) => {
          return (
            <BarsQrInfoSmall
              key={index}
              img={bItem.img}
              name={bItem.name}
              hour={bItem.hour}
            />
          );
        })}
      </div>
      <div className="qr-small  d-flex justify-content-around align-items-center">
        <img src={qr} alt='qr'/>
        <div className="scanme-small d-flex flex-column justify-content-center align-items-center">
        <div>OUR ACTIVITIES</div>
        <div>SCAN ME</div>
        </div>
      </div>
    </div>
  );
}

export default SetBarsQrRender;
