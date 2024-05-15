import React, { useState } from 'react'
import './header-lateral-styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faBars } from '@fortawesome/free-solid-svg-icons'

function HeaderLateral({ showHeader }) {

  const [hideMenu, setHideMenu] = useState(showHeader)

  return (
    <>
      <div className={` header-lateral-wrap ${hideMenu ? "" : "active-header"}`}>
        <div className="header-lateral-options"></div>
        <div className="logo-lateral-bars">
          <FontAwesomeIcon icon={faBars} onClick={() => setHideMenu(false)} />
          <ul className="header-options">
            <li><a className='Lateral' href="/InterestelarPage">Película Destacada</a></li>
            <li><a className='Lateral' href="#">Series</a></li>
            <li><a className='Lateral' href="#">Animación</a></li>
            <li><a className='Lateral' href="#">Documentales</a></li>
            <div className="li-categories">
              <details>
                <summary>
                  <div className="categorie-with-icon">
                    <a className='Lateral' href="#">Categorias</a>
                    <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                  </div>
                </summary>
                <div className='opciones'>
                  <h4>Drama</h4>
                  <h4>Acción</h4>
                  <h4>Terror</h4>
                  <h4>Comedia</h4>
                </div>
              </details>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default HeaderLateral