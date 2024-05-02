import React from 'react'
import CarruselArray from '../../../Data/CarruselArray'
import './Carrusel-styles.css'

function Carrusel() {
  return (
    <>
        <div className="carrusel-wrap">
        {
            CarruselArray.map((image, index) => (
              <div className="carrusel-images" key={index}>
                <div className="carrusel-image-images">
                  <img src={`/images/${image.src}.png`} alt="array image" />
                </div>
                <h5>{image.title}</h5>
                <p>{image.date}</p>
              </div>
            ))
          }
        </div>
    </>
  )
}

export default Carrusel