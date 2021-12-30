import React from 'react'


function SetBarsQrInfo(props) {
    return (
        <div className='footer-barsQr-container d-flex justify-content-center align-items-center'>
            <div className='footer-barsQr-card m-1 d-flex flex-row justify-content-around align-items-center col-11'>
                <img className='barsQr-img m-1 rounded col-4 ' src= {props.img} alt='bar'/>
                <div className='barsQr-info-card col-7 d-flex flex-column justify-content-around align-items-center'>
                    <div className='barsQr-name'>{props.name}</div>
                    <div className='barsQr-hour'>{props.hour}</div>
                </div>
            </div>
        </div>
    )
}

export default SetBarsQrInfo
