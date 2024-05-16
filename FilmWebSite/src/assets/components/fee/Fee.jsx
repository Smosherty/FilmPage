import React from 'react'
import './fee-styles.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faBell} from '@fortawesome/free-solid-svg-icons'

function Fee() {
    return (
        <>
            <div className="fee-wrap">
                <div className="fee-icons">
                    <div className="fee-icon">
                        <img className="icon" src="/images/ad.svg" alt="" />
                    </div>
                    <div className="fee-icon">
                        <img className="icon" src="/images/video.svg" alt="" />
                    </div>
                    <div className="fee-icon">
                        <img className="icon" src="/images/conection.svg" alt="" />
                    </div>
                </div>
                <div className="fee-button">
                    <button className="button"><a href="/PlansPage">Ver Planes</a></button>
                </div>
            </div>
        </>
    )
}

export default Fee