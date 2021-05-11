import React from 'react';
import apiShoppingCartService from '../../services/ShoppingCartService';

class NewShoppingCart extends React.Component{

    state = {};
    
    constructor(props){
        super(props);

        this.userData = JSON.parse(localStorage.getItem('userInfo')) || {};

        this.state = {
            
        };
    }

    componentDidMount(){
        
    }

    handleChange = e => {

        this.setState({ 
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {

        this.createShoppingCart();
    }

    async createShoppingCart(){

        const request = {
            name: this.state.name,
            description: this.state.description,
            userId: this.userData.id,
            token: this.userData.token,
        };

        const response = await apiShoppingCartService.create(request);

        if(response.error.length > 0){
            alert('Se presento un error');
            return;
        }

        alert('Carrito creado con exito');

        this.props.history.push('/dashboard');
    }

    render(){
        return(
            <>
                <div className="container">
                    <div className="form-container">
                        <div class="row">
                            <div 
                                class="col-md-6 offset-md-3 box-with-bottom text-align-center"
                                style = {{marginTop: '70px'}}>
                            <h3>Nuevo carrito</h3>
                                <div className="form-floating mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control back-color-main" 
                                        id="firstName" 
                                        placeholder="name@example.com"
                                        name = "name"
                                        onChange = {this.handleChange}
                                    />
                                    <label for="floatingInput">Nombre</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea 
                                        class="form-control back-color-main" 
                                        id="description" 
                                        rows="3"
                                        onChange = {this.handleChange}
                                        name = "description">
                                    </textarea>
                                    <label for="floatingInput">Descripción</label>
                                </div>
                                <div style = {{ padding: "5px"}}>
                                    <button 
                                        class="btn btn-primary-custom" 
                                        type="submit"
                                        onClick = {this.handleSubmit}>Guardar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                       
            </>
        )
    }
}

export default NewShoppingCart;