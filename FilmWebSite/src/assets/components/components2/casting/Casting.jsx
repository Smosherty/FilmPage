import React from 'react'
import './casting-styles.css'
import CastingArray from '../../../../Data/CastingArray'

function Casting() {
    return (
        <>
            <div className="casting-wrap">
                <div className="casting-title">
                    <h1>Casting</h1>
                </div>
                <div className="casting">
                    {
                        CastingArray.map((img, index) => (
                            <div className="casting-boxes" key={index}>
                                <div className="casting-img">
                                    <img src={`/images/${img.img}.png`} alt="array image" />
                                </div>
                                <div className="casting-name">
                                    <h3>{img.name}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Casting