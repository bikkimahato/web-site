import React from 'react'
import Technology from './components/Technology';
import './index.css'

const Technologies = ({ names = [], index }) => {
    return (
        <div className="all-tech">
            {names.map((naming, index) => {
                return <Technology
                    name1={naming.name}
                    desc1={naming.desc}
                    index={index}
                />
            })
            }

        </div>
    )
}

export default Technologies