import React from 'react';
import './index.css'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'


const Login = () => {
    return (
        <div className="form-class">
            <form >

                <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit" >Login</button>

                </div>

                <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button type="button" className="registerbtn">Register</button>
                    <span className="psw"><Link to='/'>Home </Link></span>
                </div>
            </form>
        </div>
    );
}

export default Login