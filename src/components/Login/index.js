import React from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Login extends React.Component {
    state = {
        defaultCredentials: {
            username: 'admin',
            password: 'admin'
        },
        userCredential: {
            username: '',
            password: ''
        }
    }

    changeHandler = (value, key) => {
        const { userCredential } = this.state
        this.setState({
            ...this.state,
            userCredential: { ...userCredential, [key]: value }
        })
    }

    validateHandler = () => {
        let { defaultCredentials, userCredential } = this.state

        return ((defaultCredentials.username === userCredential.username) && (defaultCredentials.password === userCredential.password)) ?
            alert('Login Successful') :
            alert('Username or Password incorrect')

    }

    render() {
        const { userCredential } = this.state
        const { username, password } = userCredential
        const { changeHandler } = this
        const { validateHandler } = this
        return (
            <div className="form-class">
                <form >

                    <div className="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required value={username}
                            onChange={e => changeHandler(e.target.value, 'username')} />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required value={password}
                            onChange={e => changeHandler(e.target.value, 'password')} />

                        <button type="submit" onClick={validateHandler}>Login</button>

                    </div>

                    <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                        <button type="button" className="registerbtn">Register</button>
                        <span className="psw"><Link to='/'>Home </Link></span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login