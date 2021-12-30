import React, { useState, useRef } from "react";
import staff from "./SetSourceStaff";
import StaffInfo from "./SetStaffInfo";

function SetStaffRender() {
  const [staffInfo] = useState(staff);

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
    <div className="staff-container col-2 d-none d-md-block">
      <div className="">
        <div className="footer-title d-flex justify-content-center align-items-center ">
          STAFF
        </div>
        <div className="btns-staff">
          <button className="right-staff position-absolute" onClick={next}>
            R
          </button>
          <button className="left-staff position-absolute" onClick={prev}>
            L
          </button>
        </div>
        <div className="renderStaff d-flex position-relative" ref={slideshow}>
          {staffInfo.map((sItem, index) => {
            return <StaffInfo key={index} img={sItem.img} name={sItem.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SetStaffRender;
