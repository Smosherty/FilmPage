import React from 'react'
import './modal-styles.css'
import HideModal from '../../../Data/hideModal'

function Modal() {
  return (
    <>
      <div id="modal" className="modal-wrap">
        <div className="black-overlay "></div>

        <div className="modal-box">
          <span className="uppercase font-extrabold">NOS PREOCUPAMOS POR TU SEGURIDAD</span>
          <span>
           Utilizamos cookies propias y de terceros y tecnologías similares para mejorar nuestro sitio, analizar nuestro tráfico, proporcionar funcionalidades para redes sociales y personalizar el contenido y la pubicidad en funcion de tus habitos de tus habitos de navegación, que  aceptas haciendo clic en el botón 'Aceptar'
          </span>

          <button
            onClick={HideModal}
            className="modal-button">Aceptar</button>
        </div>
      </div>
    </>
  )
}

export default Modal