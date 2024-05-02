import React from 'react'
import './interestelar-styles.css'

function Interestelar() {
    return (
        <>
            <div className="interestelar-wrap">
                <div className="interestelar-background">
                    <div className="interestelar-content">
                        <div className="interestelas-img">
                            <img className="interestelas-img" src="images/Interestelar.png" alt="ff" />
                        </div>

                        <div className="interestelar-text">
                            <div className="interestelar-title">
                                <h3>Interestelar</h3>
                                <p>2014</p>
                            </div>
                            <div className="interestelar-category">
                                <p>Drama</p>
                                <p>Fantasia</p>
                                <p>Aventura</p>
                                <p>+16</p>
                            </div>
                            <button className='interestelar-button'>Ver Ahora</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Interestelar