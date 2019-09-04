import React from 'react'
import './index.css'
import Login from '../../../Login'

const Banner = ({ onClickLogin }) => {
    return (
        <div className="container-banner" >
            <div className="banner clearfix">
                GoodWorkLabs - Technology Superstars
                <button type="button" onClick={onClickLogin} className="button" style={{ verticalAlign: "middle" }}><span>Login </span></button>
            </div>
        </div>
    )
}

export default Banner
