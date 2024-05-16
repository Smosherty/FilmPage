import React from 'react'
import HideModal from '../../../Data/hideModal'

function Modal() {
  return (
    <>
      <div id="modal" className="modal-wrap">
        <div className="black-overlay "></div>

        <div className="modal-box">
          <span className="uppercase font-extrabold">Privacidad</span>
          <span>
            No recopilamos información personal ni utilizamos cookies en nuestro
            sitio web. Tu privacidad es importante para nosotros.
          </span>

          <button
            onClick={HideModal}
            className="modal-button"
          >
            OK
          </button>
        </div>
      </div>
    </>
  )
}

export default Modal