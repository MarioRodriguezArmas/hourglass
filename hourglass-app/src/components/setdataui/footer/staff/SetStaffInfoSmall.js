import React from 'react'
import '../../../../style/Small.css'


function SetStaffInfoSmall(props) {
    return (
        <div className='footer-staff-container-small col-12 d-flex justify-content-center align-items-center'> 
            <img  src={props.img} alt='staff'/>
            <div className='staff-name-small position-absolute  d-flex justify-content-center align-items-center'>{props.name}</div>
        </div>
    )
}

export default SetStaffInfoSmall
