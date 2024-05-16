import React from 'react'
import './header-styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faArrowDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Header() {

  const [openHeader, setOpenHeader] = useState(false)

  return (
    <>
      <div className="header-wrap">
        <div className="header">
          <div className="logo-header">
            <div className="logo-bars"><FontAwesomeIcon icon={faBars} onClick={() => setOpenHeader(true)} /></div>
          </div>
          <ul className="header-menu">
            <li><a href="/Home">Home</a></li>
            <li><a href="/InterestelarPage">Película Destacada</a></li>
            <li><a href="#">Series</a></li>
            <li><a href="#">Animación</a></li>
            <li><a href="#">Documentales</a></li>
          </ul>
          <div className="navivar">
            <a href="/Account"><FontAwesomeIcon icon={faUser} /></a>
          </div>
        </div>
      </div>
      <div className={openHeader ? 'active-header' : 'header-lateral-wrap'}>
        <div className="header-lateral-options"></div>
        <div className="logo-lateral-bars">
          <FontAwesomeIcon icon={faTimes} onClick={() => setOpenHeader(false)} />
          <ul className="header-options">
            <li><a className='Lateral' href="/Home">Home</a></li>
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

export default Header






// import React from 'react'
// import './header-styles.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars, faUser, faArrowDown, faBars } from '@fortawesome/free-solid-svg-icons'
// import { useState } from 'react'

// function Header() {

//   const [openHeader, setOpenHeader] = useState(false)

//   return (
//     <>
//       <div className="header-wrap">
//         <div className="header">
//           <div className="logo-header">
//             <div className="logo-bars"><FontAwesomeIcon icon={faBars} onClick={() => setOpenHeader(true)} /></div>
//           </div>
//           <ul className="header-menu">
//             <li><a href="/Home">Home</a></li>
//             <li><a href="/InterestelarPage">Película Destacada</a></li>
//             <li><a href="#">Series</a></li>
//             <li><a href="#">Animación</a></li>
//             <li><a href="#">Documentales</a></li>
//           </ul>
//           <div className="navivar">
//             <a href="/Account"><FontAwesomeIcon icon={faUser} /></a>
//           </div>
//         </div>
//       </div>
//       <div className={openHeader ? 'active-header' : 'header-lateral-wrap'}>
//         <div className="header-lateral-options"></div>
//         <div className="logo-lateral-bars">
//           <FontAwesomeIcon icon={faBars} onClick={() => setHideMenu(false)} />
//           <ul className="header-options">
//             <li><a className='Lateral' href="/Home">Home</a></li>
//             <li><a className='Lateral' href="/InterestelarPage">Película Destacada</a></li>
//             <li><a className='Lateral' href="#">Series</a></li>
//             <li><a className='Lateral' href="#">Animación</a></li>
//             <li><a className='Lateral' href="#">Documentales</a></li>
//             <div className="li-categories">
//               <details>
//                 <summary>
//                   <div className="categorie-with-icon">
//                     <a className='Lateral' href="#">Categorias</a>
//                     <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
//                   </div>
//                 </summary>
//                 <div className='opciones'>
//                   <h4>Drama</h4>
//                   <h4>Acción</h4>
//                   <h4>Terror</h4>
//                   <h4>Comedia</h4>
//                 </div>
//               </details>
//             </div>
//           </ul>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Header

