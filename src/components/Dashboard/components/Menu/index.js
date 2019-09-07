import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

class Menu extends React.Component {
    render() {
        return (
            <div className="menu-section">
                <ul className='menu-list'>
                    <li>
                        <Link className='list-items' to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link className='list-items' to="/dashboard/attendance">Attendance</Link>
                    </li>
                    <li>
                        <Link className='list-items' to="/dashboard/settings">Settings</Link>
                    </li>
                    <li>
                        <Link className='list-items' to="/">Logout</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu