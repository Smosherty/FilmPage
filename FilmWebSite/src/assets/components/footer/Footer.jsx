import React from 'react'
import './footer-styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faArrowUp, faBridgeWater } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <>
            <div className="footer-wrap">
                <div className="footer-name">
                    <h2>Titulo</h2>
                    <h3>Sobre nosotros</h3>
                    <h3>Blog</h3>
                    <h3>Comportamiento</h3>
                </div>
                <div className="footer-name">
                    <h2>Ayuda</h2>
                    <h3>Preguntas y respuestas</h3>
                    <h3>Lista de dispositivos</h3>
                    <h3>Distribuidor</h3>
                    <h3>Contactos</h3>
                </div>
                <div className="footer-name">
                    <div className="footer-button">
                        <div className="footer-icon-text">
                            <h4>Siempre estamos listos para ayudarte.Nuestros operadores están en línea 24 horas al día, 7 días a la semana</h4>
                        </div>
                        <div className="footer-icons">
                            <div className="footer-icon">
                                <FontAwesomeIcon icon={faBell} />
                            </div>
                            <div className="footer-icon">
                                <FontAwesomeIcon icon={faArrowUp} />
                            </div>
                            <div className="footer-icon">
                                <FontAwesomeIcon icon={faBridgeWater} />
                            </div>
                        </div>
                        <button className="button">chat</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer