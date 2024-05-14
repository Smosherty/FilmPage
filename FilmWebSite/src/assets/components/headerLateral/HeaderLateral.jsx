import React from 'react'
import './header-lateral-styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faBars } from '@fortawesome/free-solid-svg-icons'

function HeaderLateral() {
  return (
    <>
      <div className="header-lateral-wrap">
        <div className="header-lateral-options">
          <div className="logo-lateral-bars"><FontAwesomeIcon icon={faBars} /></div>
          <ul className="header-options">
            <li><a className='Lateral' href="/InterestelarPage">Película Destacada</a></li>
            <li><a className='Lateral' href="#">Series</a></li>
            <li><a className='Lateral' href="#">Animación</a></li>
            <li><a className='Lateral' href="#">Documentales</a></li>
            <div className="li-categories">
              <div className="categorie-with-icon">
                <a className='Lateral' href="#">Categorias</a>
                <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
              </div>
              <div className="dropdown">
                <h4>Drama</h4>
                <h4>Acción</h4>
                <h4>Terror</h4>
                <h4>Comedia</h4>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default HeaderLateral