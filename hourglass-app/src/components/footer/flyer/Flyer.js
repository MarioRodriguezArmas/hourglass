import React from 'react'
import strong from "../../../images/carousel-images/strong.png"

function Flyer() {
    return (
      
        <div className="footer-flyer-container d-flex flex-column col-2 d-none d-md-block ">
            <div className="footer-title d-flex justify-content-center align-items-center ">FLYER</div>
            <div className="footer-flyer-img d-flex justify-content-center align-items-center">
            <img src={strong} alt="logo"/>
            </div>
        </div>
       
        
    )
}

export default Flyer
