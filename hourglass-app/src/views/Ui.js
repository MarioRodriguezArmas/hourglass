import React from "react";
import HeaderRender from "../components/header/HeaderRender";
import CarouselRender from "../components/carousel/CarouselRender";
import CarouselSmallRender from "../components/carousel/CarouselSmallRender";
import FooterRender from "../components/footer/FooterRender";

function Ui() {
  return (
    <>
      <HeaderRender />
      <CarouselRender />
      <CarouselSmallRender />
      <FooterRender />
    </>
  );
}

export default Ui;
