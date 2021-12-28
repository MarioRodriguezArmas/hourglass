import Clock from "./Clock";
import Weather from "./Weather.js";
import breathless from "../../images/carousel-images/logo.png";

function HeaderRender() {
  return (
    
      <div className=" header d-flex flex-row justify-content-around align-items-center  m-0 p-0">
        <Clock />
        <div className="logo d-flex align-items-center justify-content-center col-4">
          <img src={breathless} alt="logo"/>
        </div>
        <Weather />
      </div>
    
  
  );
}

export default HeaderRender;
