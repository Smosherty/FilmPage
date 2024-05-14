import React from 'react'
import './create-styles.css'

function Create() {
  return (
    <>
      <div className="create-wrap">
        <div className="create-crud">
          <div className="create-text">
            <h1>Crea Una Cuenta</h1>
          </div>
          <div className="crud-imputs">
            <form>
              <div className="form-group">
                <label htmlFor="usuario">Usuario:</label>
                <input type="text" className="form-control" id="usuario"/>
              </div>
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" className="form-control" id="nombre"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" className="form-control" id="email"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Create