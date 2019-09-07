import React from 'react'
import './index.css'
import {Route} from 'react-router-dom'
import UserHome from './components/User-Home'
import Settings from './components/Settings'
import Attendance from './components/Attendance'

class Content extends React.Component {
    render() {
        return(
            <div className="dashboard-content">
                <Route exact path='/dashboard' component={UserHome}/>
                <Route path='/dashboard/attendance' component={Attendance}/>
                <Route path='/dashboard/settings' component={Settings}/>
            </div>
        )
    }
}

export default Content