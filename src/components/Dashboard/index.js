import React from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Content from './components/Content'
import './index.css'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className='dashboard-menu-content-flex'>
                    <Menu />
                    <Content />
                </div>

            </div>
        )
    }
}

export default Dashboard