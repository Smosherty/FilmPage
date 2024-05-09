import React from 'react'
import './categories-styles.css'
import CategoriesArray from '../../../Data/CategoriesArray'

function Categories() {
    return (
        <>
            <div className="categories-wrap">
                <div className="categories-title">
                    <h3>
                        Peliculas a tu gusto
                    </h3>
                    <p>Nuestro sitio web contiene una gran cantidad de películas y series de televisión para todos los gustos</p>
                </div>
                <div className="categories-gallery">
                    {
                        CategoriesArray.map((icon, index) => (
                            <div className="categories-icons" key={index}>
                                <div className="categories-icon-one">
                                <img src={`/images/${icon.icon}.svg`} alt="array image" />
                                </div>
                                <div className="categories-text">
                                    <h5>{icon.category}</h5>
                                    <p>{icon.amount}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Categories