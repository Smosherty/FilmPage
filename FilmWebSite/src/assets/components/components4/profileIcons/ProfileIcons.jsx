import React from 'react'
import './profile-icons-styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBackward, faHeart, faList } from '@fortawesome/free-solid-svg-icons'

function ProfileIcons() {
  return (
    <>
      <div className="profile-icons-wrap">
        <div className="profile-icons">
          <div className="profile-icon-box">
            <FontAwesomeIcon className="box-icon" icon={faCartShopping} />
            <h3>Compras</h3>
          </div>
          <div className="profile-icon-box">
            <FontAwesomeIcon className="box-icon" icon={faBackward} />
            <h3>Historia</h3>
          </div>
          <div className="profile-icon-box">
            <FontAwesomeIcon className="box-icon" icon={faHeart} />
            <h3>Favoritos</h3>
          </div>
          <div className="profile-icon-box">
            <FontAwesomeIcon className="box-icon" icon={faList} />
            <h3>Suscripciones</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileIcons