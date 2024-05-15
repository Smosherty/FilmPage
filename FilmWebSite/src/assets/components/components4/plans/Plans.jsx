import React from 'react'
import './plans-styles.css'

function Plans() {
  return (
    <>
      <div className="plans-wrap">
        <div className="plan-box">
          <div className="plan-info">
            <div className="plan-price">
              <h2>Suscripción básica</h2>
              <p>Una Pantalla</p>
              <h1>7€/mes</h1>
            </div>
            <div className="plan-details">
              <p>Sin Anuncios</p>
              <p>Donde Quieras</p>
              <p>1TB de memoria</p>
            </div>
            <button className="Plan-button">Pruebalo</button>
          </div>
        </div>
        <div className="plan-box-premium">
          <div className="plan-info">
            <div className="plan-price">
              <h2>Suscripción Premium</h2>
              <p>Hasat 5 Pantallas</p>
              <h1>15€/mes</h1>
            </div>
            <div className="plan-details">
              <p>Sin Anuncios</p>
              <p>Donde Quieras</p>
              <p>10TB de memoria</p>
            </div>
            <button className="Plan-button">Pruebalo</button>
          </div>
        </div>
        <div className="plan-box">
          <div className="plan-info">
            <div className="plan-price">
              <h2>Suscripción Gold</h2>
              <p>Todo el contenido sin restricción</p>
              <h1>20€/mes</h1>
            </div>
            <div className="plan-details">
              <p>Sin Anuncios</p>
              <p>Donde Quieras</p>
              <p>1TB de memoria</p>
            </div>
            <button className="Plan-button">Pruebalo</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Plans