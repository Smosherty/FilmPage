import React from 'react'
import './header-styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars ,faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import HeaderLateral from '../headerLateral/HeaderLateral'

function Header() {

  const [openHeader, setOpenHeader] = useState(false)

  return (
    <>
      <div className="header-wrap">
        <div className="header">
          <div className="logo-header">
            <div className="logo-bars"><FontAwesomeIcon icon={faBars} onClick={() => setOpenHeader(true)}/></div>
          </div>
          <ul className="header-menu">
            <li><a href="/Home">Home</a></li>
            <li><a href="/InterestelarPage">Película Destacada</a></li>
            <li><a href="#">Series</a></li>
            <li><a href="#">Animación</a></li>
            <li><a href="#">Documentales</a></li>
          </ul>
          <div className="navivar">
            <a href="/Account"><FontAwesomeIcon icon={faUser}/></a>
          </div>
        </div>
      </div>
      <HeaderLateral showHeader={openHeader}/>
    </>
  )
}

export default Header

