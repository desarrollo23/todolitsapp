import React from 'react'

class EditShoppingCart extends React.Component{

    state = {};

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        
        const { name, description, userId } = this.props.cart;

        return(
            <>
                <div className="container">
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Nombre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                           
                            onChange = {this.handleChange}
                            name ="name"/>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput2" className="form-label">Descripcion</label>
                        <textarea 
                            class="form-control" 
                            id="description" 
                            rows="3"
                           
                            onChange = {this.handleChange}
                            name = "description"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary-custom">Guardar</button>
                    </div>
                </div>
            </>
        )
    }
}

export default EditShoppingCart;