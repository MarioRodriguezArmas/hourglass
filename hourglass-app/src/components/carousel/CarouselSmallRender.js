import React, { useState, useRef} from "react";
import carouselElementSmall from "./SourceSmall";
import { CarouselSmallInfo } from "./CarouselSmallInfo";

function StaffRender() {
  const [carouselItem] = useState(carouselElementSmall);

  const slideshow = useRef(null);
 

  const next = () => {
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];
      slideshow.current.style.transition = `400ms ease-out all`;
      const slideSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;
      const transition = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;
        slideshow.current.appendChild(firstElement);
        slideshow.current.removeEventListener("transitionend", transition);
      };
      slideshow.current.addEventListener("transitionend", transition);
    }
  };

  const prev = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[index];
      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);
      slideshow.current.style.transition = "none";
      const slideSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;
      setTimeout(() => {
        slideshow.current.style.transition = `400ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <div className="carousel-small-container d-md-none">
      <div className="">
        <div className="carousel-small-title d-flex justify-content-center align-items-center ">
          OUR ACTIVITIES
        </div>
        <div className="btns-carousel-small">
          <button className="right-carousel-small position-absolute" onClick={next}>
            R
          </button>
          <button className="left-carousel-small position-absolute" onClick={prev}>
            L
          </button>
        </div>
        <div className="render-carousel-small col-12 d-flex position-relative" ref={slideshow}>
          {carouselItem.map((sItem, index) => {
            return (
              <CarouselSmallInfo
                key={index}
                img={sItem.img}
                hour={sItem.hour}
                activity={sItem.activity}
                location={sItem.location}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StaffRender;
