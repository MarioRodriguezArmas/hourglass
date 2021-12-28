import React from "react";
import Flyer from "./flyer/Flyer";
import BreakfastRender from "./breakfast/BreakfastRender";
import BarsQrRender from "./barsQr/BarsQrRender";
import DinningRender from "./dinning/DinningRender";
import StaffRender from "./staff/StaffRender";
import BreakfastRenderSmall from './breakfast/BrakfastRenderSmall'
import DinningRenderSmall from './dinning/DinningRenderSmall'
import FlyerSmall from './flyer/FlyerSmall'
import BarsQrRenderSmall from './barsQr/BarsQrRenderSmall'
import StaffRenderSmall from './staff/StaffRenderSmall'

function FooterRender() {
  return (
    <div className="d-flex ">
      <Flyer />
      <BreakfastRender />
      <DinningRender />
      <BarsQrRender />
      <StaffRender/>
     <div className="d-flex flex-column">
     <BreakfastRenderSmall/>
     <FlyerSmall/>
      <DinningRenderSmall/>
      <StaffRenderSmall/>
      <BarsQrRenderSmall/>
     </div>
    </div>
  );
}

export default FooterRender;
