import React from 'react'
import './relevant-styles.css'

function Relevant() {
  return (
    <>
        <div className="relevant-wrap">
            <div className="relevant-title">
                <h1>Relevante</h1>
            </div>
            <div className="relevant-images">
                <div className="relevant-img">
                    <img src="/images/Cine.png" alt="ff" />
                    <h2>En cines</h2>
                </div>
                <div className="relevant-img">
                    <img src="/images/Scene.png" alt="ff" />
                    <h2>Estreno</h2>
                </div>
                <div className="relevant-img">
                    <img src="/images/Trailer.png" alt="" />
                    <h2>Trailer</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default Relevant