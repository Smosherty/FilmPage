import React from 'react'
import './interestelar-styles.css'

function Interestelar() {
  return (
    <>
        <div className="interestelar-wrap">
            <div className="interestelar-background"></div>
            <div className="interestelar-content">
                <img src="images/Godland.png" alt="ff" />
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
                    <button className='interestelar-botton'>Ver Ahora</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Interestelar