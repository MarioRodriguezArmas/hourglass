import React, { useState, useRef,useEffect } from "react";
import staff from "./SourceStaff";
import StaffInfoSmall from "./StaffInfoSmall";

function StaffRenderSmall() {
  const [staffInfo] = useState(staff);

  const slideshow = useRef(null);
  const intervalSlideshow = useRef(null);

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
  // useEffect(() => {
  //   intervalSlideshow.current = setInterval(() => {
  //     next();
  //   }, 5000);
  //   slideshow.current.addEventListener("mouseenter", () => {
  //     clearInterval(intervalSlideshow.current);
  //   });
  //   slideshow.current.addEventListener("mouseleave", () => {
  //     intervalSlideshow.current = setInterval(() => {
  //       next();
  //     }, 5000);
  //   });
  // }, []);
  return (
    <div className="staff-container-small  d-md-none">
      <div className="">
        <div className="footer-title-small  d-flex justify-content-center align-items-center ">
          STAFF
        </div>
        <div className="btns-staff-small">
          <button className="right-staff-small position-absolute" onClick={next}>
            R
          </button>
          <button className="left-staff-small position-absolute" onClick={prev}>
            L
          </button>
        </div>
        <div className="renderStaff-small d-flex position-relative" ref={slideshow}>
          {staffInfo.map((sItem, index) => {
            return <StaffInfoSmall key={index} img={sItem.img} name={sItem.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default StaffRenderSmall;
