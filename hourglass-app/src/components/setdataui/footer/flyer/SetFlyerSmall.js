import React from 'react'
import strong from "../../../../images/carousel-images/strong.png"

function SetFlyerSmall() {
    return (
      
        <div className="footer-flyer-container-small d-flex flex-column col-12 d-md-none mt-3 ">
            <div className="footer-title-small d-flex justify-content-center align-items-center ">FLYER</div>
            <div className="footer-flyer-img-small d-flex justify-content-center align-items-center">
            <img src={strong} alt="logo"/>
            </div>
        </div>
       
        
    )
}

export default SetFlyerSmall