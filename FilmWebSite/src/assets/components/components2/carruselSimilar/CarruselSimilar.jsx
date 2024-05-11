import React from 'react'
import './carruselSimilar-styles.css'
import SimilarArray from '../../../../Data/SimilarArray'

function CarruselSimilar() {
    return (
        <>
            <div className="similar-wrap">
                <div className="similar-title">
                    <h1>Títulos similares</h1>
                </div>
                <div className="similar-boxes">
                    {
                        SimilarArray.map((similar, index) => (
                            <div className="similar-images" key={index}>
                                <div className="similar-image">
                                    <img src={`/images/${similar.img}.png`} alt="array image" />
                                </div>
                                <h5>{similar.title}</h5>
                                <p>{similar.date}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CarruselSimilar