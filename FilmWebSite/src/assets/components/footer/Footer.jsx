import React from 'react'
import './footer-styles.css'

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
                        <button className="button">chat</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer