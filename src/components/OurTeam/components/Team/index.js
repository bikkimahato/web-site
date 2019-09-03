import React from 'react'
import './index.css'

const Team = ({ name1, desg1, img1 }) => {
    return (
        <div className="col-md-3">
            <div className="team-style">
                <div className="card" >
                    <img src={img1} alt="Avatar" style={{ width: '100%' }} />
                    <div className="container" >
                        <h4><b>{name1}</b></h4>
                        <p>{desg1}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team