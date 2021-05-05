import React , { useState } from 'react';
import { Link, Router } from 'react-router-dom';

const axios = require('axios').default;
const Login = (props) => {

        const baseUrl = "https://localhost:44382/api";

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

        const Authenticate = () => {

            axios.post(`${baseUrl}/Security/authenticate`, {
                identification,
                password
              })
              .then(function (response) {
                  const {data} = response;
                  
                if(data.statusCode === 200){

                    
                    localStorage.setItem('user', JSON.stringify(data));

                    props.history.push({
                        pathname: '/dashboard',
                        state: { detail: data }
                    });
                }
                    

              })
              .catch(function (error) {
                
                const alertDv = document.querySelector("#alert");
                alertDv.style.display = "block";

              });
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