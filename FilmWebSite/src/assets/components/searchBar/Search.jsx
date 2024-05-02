import React from 'react'
import './SearchBar-styles.css'

function Search() {
  return (
    <>
      <div className="search-bar-wrap">
        <h3>
          Buscador
        </h3>
        <p>Encuentra tus películas favoritas</p>
        <div className="serch-bar-bar">
          <input type="text" className='search-input'/>
        </div>
      </div>
    </>
  )
}

export default Search