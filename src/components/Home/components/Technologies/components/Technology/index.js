import React from 'react'
import './index.css'

const Technology = ({ name1, desc1 }) => {
    return (
        <div>
            {(
                <div className="flip-box" >
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <h2>{name1}</h2>
                        </div>
                        <div className="flip-box-back">
                            <p>{desc1}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Technology
{/* <div className="flip-box-front">
                        <h2>{names[index].name}</h2>
                    </div>
                    <div className="flip-box-back">
                        <h2>{names[index].desc}</h2>
                    </div> */}