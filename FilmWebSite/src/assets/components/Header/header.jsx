import React from 'react'
import './header-styles.css'
import { CiUser } from "react-icons/ci"


function Header() {
  return (
    <>
        <div className="header-wrap"> 
          <div className="header-top">
            <h1 className="header-logo">LOGO</h1>
            {/* <nav>
              <ul className="header-menu"> 
                <li><a href="#">Películas</a></li>
                <li><a href="#"></a>Series</li>
                <li><a href="#"></a>Animación</li>
                <li><a href="#"></a>Documentales</li>
              </ul>
            </nav> */}
            <div className="navivar">
              <CiUser className="icon-user"/>
            </div>
          </div>

          <div className="header-bot">
            <div className="film-header-info">
              <h1>El joker</h1>
              <button className="Film-more">Ver más</button>
              <p>Gotam. El comediante Arthur Fleck vive con su madre enferma, quien le ha enseñado desde pequeño a “caminar con una sonrisa”</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Header

