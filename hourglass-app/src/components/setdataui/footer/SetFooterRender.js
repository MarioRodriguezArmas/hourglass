import React from "react";
import SetFlyer from "./flyer/SetFlyer";
import SetBreakfastRender from "../../setdataui/footer/breakfast/SetBreakfastRender";
import SetBarsQrRender from "../../setdataui/footer/barsQr/SetBarsQrRender";
import SetDinningRender from "../../setdataui/footer/dinning/SetDinningRender";
import SetStaffRender from "../../setdataui/footer/staff/SetStaffRender";
import SetBreakfastRenderSmall from '../../setdataui/footer/breakfast/SetBreakfastRenderSmall'
import SetDinningRenderSmall from '../../setdataui/footer/dinning/SetDinningRenderSmall'
import SetFlyerSmall from '../../setdataui/footer/flyer/SetFlyerSmall'
import SetBarsQrRenderSmall from '../../setdataui/footer/barsQr/SetBarsQrRenderSmall'
import StaffRenderSmall from '../../setdataui/footer/staff/SetStaffRenderSmall'

function SetFooterRender() {
  return (
    <div className="d-flex ">
      <SetFlyer />
      <SetBreakfastRender />
      <SetDinningRender />
      <SetBarsQrRender />
      <SetStaffRender/>
     <div className="d-flex flex-column">
     <SetBreakfastRenderSmall/>
     <SetFlyerSmall/>
      <SetDinningRenderSmall/>
      <StaffRenderSmall/>
      <SetBarsQrRenderSmall/>
     </div>
    </div>
  );
}

export default SetFooterRender;
