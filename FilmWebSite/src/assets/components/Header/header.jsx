import React from 'react'
import './header-styles.css'
import { CiUser } from "react-icons/ci"


function Header() {
  return (
    <>
      <div className="header-wrap">
        <div className="header">
          <div className="logo-header">
            <img src="/images/LogoPage.png" alt="hh" />
          </div>
          <ul className="header-menu">
            <li><a href="#">Películas</a></li>
            <li><a href="#">Series</a></li>
            <li><a href="#">Animación</a></li>
            <li><a href="#">Documentales</a></li>
          </ul>
          <div className="navivar">
            <CiUser className="icon-user" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

