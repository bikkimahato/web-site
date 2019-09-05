// Name Field : This field accept only valid user name, which include user First, Middle and Last name.
// Email Field : This field accept only valid Email address of user.
// Mobile Field : This field accept valid 10 digit mobile number of user.
// Password Field : This field accept only accept user password details. This validation makes the user password very strong and which complies below format :
//  Must be at least 8 characters
// At least 1 special character from @#$%&
// At least 1 number, 1 lowercase, 1 uppercase letter

import React from 'react'
import style1 from './index.module.css'

class Register extends React.Component {
    state = {
        fields: {},
        errors: {}
    }


    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["emailid"] = "";
            fields["mobileno"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });
            alert("Form submitted");
        }
    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }

        if (typeof fields["username"] !== "undefined") {
            if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobileno"] !== "undefined") {
            if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobileno"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }

    render() {

        return (
            <div className={style1.registerClass}>
                <form onSubmit={this.submituserRegistrationForm.bind(this)}>
                    <div className={style1.container}>
                        <h1 style={{ marginTop: "8px" }}>Register</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />

                        <label><b>Name</b></label>
                        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange.bind(this)} />
                        <div className={style1.errorMsg}>{this.state.errors.username}</div>

                        <label><b>Email ID:</b></label>
                        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange.bind(this)} />
                        <div className={style1.errorMsg}>{this.state.errors.emailid}</div>

                        <label><b>Mobile No:</b></label>
                        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange.bind(this)} />
                        <div className={style1.errorMsg}>{this.state.errors.mobileno}</div>

                        <label><b>Password</b></label>
                        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange.bind(this)} />
                        <div className={style1.errorMsg}>{this.state.errors.password}</div>

                        <hr />
                        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                        <button type="submit" className={style1.registerbtn}  >Register</button>
                    </div>

                </form>
            </div >
        )
    }
}
export default Register