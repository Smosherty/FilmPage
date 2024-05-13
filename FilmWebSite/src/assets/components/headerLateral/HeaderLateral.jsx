import React from 'react'
import './header-lateral-styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function HeaderLateral() {
  return (
    <>
      <div className="header-lateral-wrap">
        <div className="header-lateral-options">
          <ul className="header-options">
            <li><a href="/InterestelarPage">Película Destacada</a></li>
            <li><a href="#">Series</a></li>
            <li><a href="#">Animación</a></li>
            <li><a href="#">Documentales</a></li>
            <div className="li-categories">
              <div className="categorie-with icon">
                <li className="li-categories-categorie">Categorias</li>
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