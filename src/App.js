import React from 'react';
// import './index.css'
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path='/login' component={Login} />
    </Router>
  )
}

export default App