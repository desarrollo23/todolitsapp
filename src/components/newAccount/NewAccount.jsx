import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios').default;

class NewAccount extends React.Component{

    // [datos, setDatos] = useState();
    state = {}
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.handleCreate();
    }

    handleCreate = () => {
        const baseUrl = "https://localhost:44382/api";

        axios.post(`${baseUrl}/User/create`, {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                identification: this.state.identification,
                email: this.state.email,
                password: this.state.password
          }).then(response => {
              
            const {data} = response;

            if(data.errors.length > 0){

                const msg = data.errors[0].message;
                alert(msg);
                return;
            }

            alert('Usuario creado con exito');
            this.props.history.push('/login');
          })
          .catch(console.log);
    }

    render(){
        return(
            <>
                <div className="container">
               
                    <div className="form-container">
                        
                        <div class="row" style = {{ marginTop: '40px'}}>
                            
                            <div class="col-md-6 offset-md-3 padding-25px text-align-center box-with-bottom">
                            <Link to="/login" style={{display:'inline', margin: '0 5px', float:'left'}} >
                                    <img 
                                        src = {`${process.env.PUBLIC_URL}/back.png`}
                                        alt = "Volver atras"/>
                                </Link>
                                <h3>Nueva cuenta</h3>
                                <div className="form-floating mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control back-color-main" 
                                        id="firstName" 
                                        placeholder="name@example.com"
                                        name = "firstName"
                                        onChange = {this.handleChange}
                                    />
                                    <label htmlFor="floatingInput">Nombres</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control back-color-main" 
                                        id="lastName" 
                                        placeholder="name@example.com"
                                        name = "lastName"
                                        onChange = {this.handleChange}
                                    />
                                    <label htmlFor="floatingInput">Apellidos</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control back-color-main" 
                                        id="identification" 
                                        placeholder="name@example.com" 
                                        name = "identification"
                                        onChange = {this.handleChange}
                                    />
                                    <label htmlFor="floatingInput">Identificación</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control back-color-main" 
                                        id="email" 
                                        placeholder="name@example.com" 
                                        name = "email"
                                        onChange = {this.handleChange}
                                    />
                                    <label htmlFor="floatingInput">Email</label>
                                </div>
                                <div className="form-floating">
                                    <input 
                                        type="password" 
                                        className="form-control back-color-main" 
                                        id="password" 
                                        placeholder="Password" 
                                        name = "password"
                                        onChange = {this.handleChange}
                                    />
                                    <label htmlFor="floatingPassword">Contraseña</label>
                                </div>
                                <div style = {{ padding: "5px"}}>
                                    <button 
                                        class="btn btn-primary-custom" 
                                        type="submit"
                                        onClick = {this.handleSubmit}>Crear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }
}

export default NewAccount;