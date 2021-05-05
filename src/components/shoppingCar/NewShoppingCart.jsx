import React from 'react';

class NewShoppingCart extends React.Component{

    state = {}

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        console.log(this.state);
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
                                        name = "firstName"
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