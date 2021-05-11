import React, { PureComponent } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import apiItemCartService from '../../services/ItemCartService';
import DeleteModal from '../modals/DeleteModal';

class ItemCart extends PureComponent{

    

    state = {
        isCompleted: undefined,
        deleteModalIsOpen: false
    }

    constructor(props){
        super(props);

        this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        this.item = this.props.item;

    }

    componentDidMount(){

    }

    handleCloseDeleteModal(){
        this.setState({deleteModalIsOpen: false});
    }

    handleOpenDeleteModal(){
        this.setState({deleteModalIsOpen: true});
    }

    onDelete(id){
        this.delete(id, this.userInfo.token);
    }

    onCancel(){
        this.handleCloseDeleteModal();
    }

    handleChange = e => {

        this.setState({
            isCompleted: e.target.checked 
        });

        const item = {

            name: this.item.name,
            amount: this.item.amount,
            shoppingCarId: this.item.shoppingCarId,
            isCompleted: this.state.isCompleted
        };

        console.log(item);
        //this.updateState(this.state.item, this.userInfo.token);
    }

    handleDelete(e, id){
        e.preventDefault();
        this.handleOpenDeleteModal();
    }

    async delete(id, token){

        const response = await apiItemCartService.delete(id, token);
        
        if(response.statusCode === 200)
        {
            //TO DO: cambiar este reload, esta deprecado
            window.location.reload(false);
        }
    }

    async updateState(item, token){
        const response = await apiItemCartService.updateState(item, token);

        console.log(response);
    }

    render(){
        
        return(
            
                <tr>
                    <DeleteModal
                        isOpen = {this.state.deleteModalIsOpen}
                        onClose = {this.handleCloseDeleteModal.bind(this)}
                        onDelete = {e => this.onDelete(this.item.id)}
                        onCancel = {this.onCancel.bind(this)}>

                    </DeleteModal>
                    <td>{this.item.name}</td>
                    <td>{this.item.amount}</td>
                    <td>
                        <div class="form-switch col-md-6 offset-md-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="flexSwitchCheckDefault"
                                name = "isCompleted"       
                                onChange = {this.handleChange}
                                checked={this.state.isCompleted}/>
                        </div>
                    </td>
                    <td className="center-content">
                        <button 
                            type="button" 
                            className="btn btn-delete"
                            onClick={ e => this.handleDelete(e, this.item.id)}
                            >
                            <img 
                                src={`${process.env.PUBLIC_URL}/delete.png`}
                                style = {{marginLeft:'4px'}}/>
                        </button>
                    </td>
                </tr>
                
            
        )
    }
}

export default withRouter(ItemCart);