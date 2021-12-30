import React from 'react'
import '../../../../style/Small.css'

function SetBarsQrInfoSmall(props) {
    return (
        <div className='footer-barsQr-container-small d-flex justify-content-center align-items-center'>
            <div className='footer-barsQr-card-small mt-3 d-flex flex-row justify-content-around align-items-center col-11'>
                <img className='barsQr-img-small m-1 rounded col-4 ' src= {props.img} alt='bar'/>
                <div className='barsQr-info-card-small col-7 d-flex flex-column justify-content-around align-items-center'>
                    <div className='barsQr-name'>{props.name}</div>
                    <div className='barsQr-hour'>{props.hour}</div>
                </div>
            </div>
        </div>
    )
}

export default SetBarsQrInfoSmall
