import React , { useState, Component } from 'react';
import { withRouter } from 'react-router-dom';

import './login.css';

const Login = ({history}) => {


        const [datos, setDatos] = useState({
            identification: '',
            password: ''
        })
    

        const handleChange = (event) => {
            console.log(event.target.value);
            setDatos({
                ...datos,
                [event.target.name]: event.target.value
            })
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            history.push('/dashboard');
        }

    return (
        <div className="login">
            <div className="login-screen">
                <div className="app-title">
                    <h3>Login</h3>
                </div>
                <div className="login-form">
                    <form onSubmit = {handleSubmit.bind(this)}>
                    <div className="control-group">
                        <input 
                            type="text" 
                            className="login-field"
                            placeholder="identification" 
                            id="login-name" 
                            name="identification"
                            onChange={handleChange}/>
                        <label className="login-field-icon fui-user" htmlFor="login-name"></label>
                    </div>
                    <div className="control-group">
				        <input 
                            type="password" 
                            className="login-field"  
                            placeholder="password" 
                            id="login-pass" 
                            name="password"
                            onChange={handleChange}/>
				        <label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
				    </div>

                    <button type="submit"
                    className="btn btn-primary btn-large btn-block">
                        Submit
                    </button>
                    </form>
                   
				    <a 
                        className="login-link" 
                        href="#">Lost your password?
                    </a>
                </div>

                
            </div>

            <h3>{datos.identification}</h3>
                <h3>{datos.password}</h3>
        </div>
    )
}

    

export default Login;