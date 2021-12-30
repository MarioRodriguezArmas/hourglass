import React from 'react'


function SetStaffInfo(props) {
    return (
        <div className='footer-staff-container d-flex justify-content-center align-items-center'> 
            <img  src={props.img} alt='staff'/>
            <div className='staff-name position-absolute  d-flex justify-content-center align-items-center'>{props.name}</div>
        </div>
    )
}

export default SetStaffInfo
