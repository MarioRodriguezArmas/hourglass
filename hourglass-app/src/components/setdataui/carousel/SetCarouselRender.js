import React, { useState, useRef} from "react";
import { SetCarouselInfo } from "./SetCarouselInfo";
import carouselElement from "./Sources";
import carouselElement2 from "./Source2";

function SetCarouselRender() {
  const [carouselItem] = useState(carouselElement);
  const [carouselItem2] = useState(carouselElement2);

  const slideshow = useRef(null);
  

  const next = () => {
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];
      slideshow.current.style.transition = `800ms ease-out all`;
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
        slideshow.current.style.transition = `800ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };



  return (
 <div className="d-none d-md-block">
      <div className="slider-container d-flex flex-row">
      <div className="btns">
        <button className="right position-absolute" onClick={prev}>
          L
        </button>
        <button className="left position-absolute" onClick={next}>
          R
        </button>
      </div>

      <div
        className="carousel-container d-flex justify-content-center align-items-center "
        ref={slideshow}
      >
        <div className="slide1 d-flex justify-content-center flex-row position-relative">
          {carouselItem.map((cItem, index) => {
            return (
              <SetCarouselInfo
                key={index}
                img={cItem.img}
                hour={cItem.hour}
                activity={cItem.activity}
                location={cItem.location}
              />
            );
          })}
        </div>
        <div className="slide2 d-flex justify-content-center flex-row position-relative">
          {carouselItem2.map((cItem, index) => {
            return (
              <SetCarouselInfo
                key={index}
                img={cItem.img}
                hour={cItem.hour}
                activity={cItem.activity}
                location={cItem.location}
              />
            );
          })}
        </div>
      </div>
    </div>
 </div>
  );
}

export default SetCarouselRender;
