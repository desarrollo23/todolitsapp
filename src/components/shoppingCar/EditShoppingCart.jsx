import React from 'react'
import apiShoppingCartService from '../../services/ShoppingCartService';
import Loading from '../share/Loading';

class EditShoppingCart extends React.Component{

    state = {
        error: null,
        loading: true,
        form: {
            name: '',
            description: '',
            id: 0,
            userId: 0
        }
    };

    constructor(props){

        super(props);

        this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

        this.token = this.userInfo.token;
        this.cartInfo = this.props.cart;
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    
    componentDidMount(){
           this.setState({
               form: {
                   name: this.cartInfo.name,
                   description: this.cartInfo.description,
                   id: this.cartInfo.id,
                   userId: this.cartInfo.userId
               }
           });

           this.setState({loading:false});
    }
    

    handleSave(e){    
        this.saveCart();
    }

    async saveCart(){

        try{
            this.setState({ loading: true });
            const response = 
                await apiShoppingCartService.edit(this.state.form, this.token);

            this.setState({ loading: false });
            document.getElementById("myForm").submit();
            // this.props.history.push(`shoppingCar/detail/${this.state.form.id}`);
            
        }catch(err){
            this.setState({error: err});
        }
    }

    render(){
    

        return(
            <>
                {this.state.loading === true && <Loading />}

                {this.state.loading === false && 
                    <form id="myForm" onSubmit = {this.props.onSubmit.bind(this)}>
                        <div className="container box-with-bottom">
                            <div className="mb-3">
                                <label for="formGroupExampleInput" className="form-label">Nombre</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    onChange = {this.handleChange}
                                    name ="name"
                                    value={this.state.form.name}/>
                            </div>
                            <div className="mb-3">
                                <label for="formGroupExampleInput2" className="form-label">Descripcion</label>
                                <textarea 
                                    class="form-control" 
                                    id="description" 
                                    rows="3"
                                    onChange = {this.handleChange}
                                    name = "description"
                                    value={this.state.form.description}></textarea>
                            </div>
                            <div style={{justifyContent:'center', display:'flex'}}>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary-custom"
                                    onClick = {this.handleSave.bind(this)}>Actualizar</button>
                            </div>
                        </div>
                    </form>
                    
                }

            </>
        )
    }
}

export default EditShoppingCart;