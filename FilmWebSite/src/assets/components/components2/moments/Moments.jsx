import React from 'react'
import './moments-styles.css'

function Moments() {
    return (
        <>
            <div className="moments-wrap">
                <div className="moment-title">
                    <h1>Momentos Destacados</h1>
                </div>
                <div className="moments">
                    <div className="moments-1">
                        <img src="/images/moment1.png" alt="" />
                    </div>
                    <div className="moments-2">
                        <div className="moment">
                            <img src="/images/moment2.png" alt="" />
                        </div>
                        <div className="moment">
                            <img src="/images/moment3.png" alt="" />
                        </div>
                    </div>
                    <div className="moments-3">
                        <div className="moment">
                            <img src="/images/moment4.png" alt="" />
                        </div>
                        <div className="moment">
                            <img src="/images/moment5.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Moments