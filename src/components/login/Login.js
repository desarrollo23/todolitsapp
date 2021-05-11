import React , { useState } from 'react';
import { Link, Router } from 'react-router-dom';
import apiLoginService from '../../services/LoginService';

const Login = (props) => {
        const [identification, setIdentification] = useState();
        const [password, setPassword] = useState();

        const handleSubmit = (event) => {
            event.preventDefault();
           

            const isModelValid = ValidateModel();

            if(isModelValid){
                Authenticate();
            }
            else{
                alert('Debe ingresar las credenciales');
            }
        }

        const Authenticate = async() => {

            const response = await apiLoginService.login(identification, password);
           
            if(response.error != undefined){
                alert('Credenciales no validas');
                return;
            }

            sessionStorage.setItem('userInfo', JSON.stringify(response.result));

            props.history.push('/dashboard');
        }

        const ValidateModel = () => {

            return (password && identification);
        }

    return (
        <div className="login ">
           
            <div className="box-with-bottom col-md-4 offset-md-4 box_full_shadow boder-radius-light" style = {{ textAlign: 'center', marginTop: '70px'}}>
                <div className="alert alert-danger alert-dismissible fade show" style={{display: 'none'}} id="alert" role="alert">
                    Credenciales incorrectas
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="app-title">
                    <h3>Login</h3>
                </div>
                <div className="login-form padding-25px ">
                    <form onSubmit = {handleSubmit.bind(this)}>
                    <div className="form-floating mb-3">
                        <input 
                            type="text" 
                            className="form-control back-color-main"
                            placeholder="identification" 
                            id="login-name" 
                            name="identification"
                            onChange={e => setIdentification(e.target.value)}/>
                       <label htmlFor="floatingInput">Identificación</label>
                    </div>
                    <div className="form-floating mb-3">
				        <input 
                            type="password" 
                            className="form-control back-color-main"  
                            placeholder="password" 
                            id="login-pass" 
                            name="password"
                            onChange={e => setPassword(e.target.value)}/>
				       <label htmlFor="floatingInput">Contraseña</label>
				    </div>

                    <button type="submit"
                    className="btn btn-primary-custom btn-large btn-block">
                        Entrar
                    </button>
                    </form>
                
                    <hr />
                    <span>¿No tienes una cuenta? Crea una</span>
                    <span>
                        <Link 
                            to="/newAccount" 
                            style={{textDecoration: 'none', 
                                    marginLeft: '3px', 
                                    color: '#17252A', 
                                    fontWeight: 'bold'}}
                            >
                            Aqui
                        </Link>
                    </span>
                    
                </div>

                
            </div>
        </div>
    )
}

export default Login;