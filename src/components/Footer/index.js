import React from 'react'
import LeftFooter from './components/LeftFooter/index'
import RightFooter from './components/RightFooter/index'
import './index.css'

const Footer = () => {
    return (
        <div className="footer-class">
            <LeftFooter></LeftFooter>
            <RightFooter></RightFooter>
        </div>
    )
}

export default Footer