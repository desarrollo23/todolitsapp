import React from 'react';
import apiItemCartService from '../../services/ItemCartService';
import Loading from '../share/Loading';

class NewItemCart extends React.Component{

    constructor(props){
        super(props);
        this.active = props.active || false;
        this.idCart = props.idCart || 0;

        this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

        this.state = {
            error: null,
            loading: false,
            active: this.active,
            showAddButton: false,
            itemForm: {
                name: '',
                amount: 0,
                isCompleted: false,
                shoppingCarId: this.idCart ,
            }
        }
    }

    componentDidMount(){
        
    }

    handleChange(e){
        this.setState({
            itemForm: {
                ...this.state.itemForm,
                [e.target.name]: e.target.value == 'on' ? e.target.checked : e.target.value
            }
        })
    }

    handleAdd(){
        this.setState({
            active:true,
            showAddButton: true,
        });
    }

     handleNewItem(){
        this.createCart();
    }

    async createCart(){
        try{

            const response = 
                await apiItemCartService.create(this.state.itemForm, this.userInfo.token);

            //TO DO: cambiar este reload, esta deprecado
            window.location.reload(false);

        }catch(err){
            this.setState({ error: err });
        }
    }

    render(){
        return (
            <>
                {this.state.loading === true && <Loading />}
                <tr>
                    <td>
                        <input 
                            type ="text"
                            name="name"
                            disabled={!this.state.active}
                            onChange={this.handleChange.bind(this)}/>
                    </td>
                    <td>
                        <input 
                            type="text"
                            name="amount"
                            disabled={!this.state.active}
                            onChange={this.handleChange.bind(this)}/>
                    </td>
                    <td>
                        <div class="form-switch col-md-6 offset-md-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="flexSwitchCheckDefault"
                                name = "isCompleted"       
                                onChange = {this.handleChange.bind(this)}
                                disabled={!this.state.active}/>
                        </div>
                    </td>
                    <td className="center-content">
                        {this.state.showAddButton === false &&
                            <button 
                            className="btn"
                            onClick = {this.handleAdd.bind(this)}>
                            <img src={`${process.env.PUBLIC_URL}/add.png`} />
                            </button>
                        }
                        

                        {this.state.showAddButton === true && 
                            <button 
                                className="btn btn-primary-custom"
                                onClick = {this.handleNewItem.bind(this)}>
                                    Agregar
                            </button>}
                    </td>
                </tr>
            </>
        )
    }
}

export default NewItemCart;