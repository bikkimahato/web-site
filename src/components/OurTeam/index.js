import React from 'react'
import Team from './components/Team/index'
import './index.css'

const OurTeam = ({ name }) => {
    return (
        <div className="all-tech">
            {name.map(naming => {
                return <Team
                    name1={naming.name}
                    desg1={naming.desgination}
                    img1={naming.img}
                />
            })}
        </div>
    )
}
export default OurTeam