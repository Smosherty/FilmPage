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
            <input type="text" className='search-input'/>
        </div>
    </>
  )
}

export default Search