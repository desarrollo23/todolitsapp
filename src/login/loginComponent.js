import React , {useState} from 'react';
import './login.css';

const Login = () => {


        const [datos, setDatos] = useState({
            identification: '',
            password: ''
        })
    

        const handleChange = (event) => {
            console.log(event.target.name);
            setDatos({
                ...datos,
                [event.target.name]: event.target.value
            })
        }

    return (
        <div className="login">
            <div className="login-screen">
                <div className="app-title">
                    <h1 id="titleForm">To do List</h1>
                    <h3>Login</h3>
                </div>
                <div className="login-form">
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

                    <a className="btn btn-primary btn-large btn-block" href="#">login</a>
				    <a className="login-link" href="#">Lost your password?</a>
                </div>

                
            </div>

            <h3>{datos.identification}</h3>
                <h3>{datos.password}</h3>
        </div>
    )
}

    

export default Login;