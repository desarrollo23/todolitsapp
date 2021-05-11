import React from 'react';
import { Link } from "react-router-dom";

import EditShoppingCart from "../components/shoppingCar/EditShoppingCart";
import ItemCartList  from "../components/shoppingCar/ItemCartList";
import apiShoppingCartService from '../services/ShoppingCartService';
import Loading from "../components/share/Loading";
import Modal from '../components/modals/Modal';
import DeleteModal from "../components/modals/DeleteModal";

import '../components/styles/Modal.css';

class ShoppingCarDetail extends React.Component {

    constructor(props){
        super(props);

        this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

        this.state = {
            modalIsOpen: false,
            deleteModalIsOpen: false,
            cart: {},
            loading: true,
            showModal: false
        } ;
    }
    
    componentDidMount(){
        const id = this.props.match.params.id;
        this.getCartById(id);
    }

    async getCartById(id){
        this.setState({loading: true});

        const response = await apiShoppingCartService.getById(id, this.userInfo.token);

        this.setState({cart: response.entity});
        this.setState({loading: false});
    }

    handleClickEdit(){

        this.handleOpenModal();
    }

    handleCloseModal(){
        this.state.modal.style.display = "none";
    }

    handleOnCloseModal(){
        this.setState({ modalIsOpen: false });
    }

    handleCloseDeleteModal(){
        this.setState({ deleteModalIsOpen: false });
    }

    handleOpenDeleteModal(){
        this.setState({ deleteModalIsOpen: true });
    }

    onDelete(){
        console.log('lo elimino');
    }

    onCancel(){
        console.log('lo cancelo');
    }

    handleOpenModal(){
        this.setState({ modalIsOpen: true });
    }

    onEditFormSubmit(e){
        e.preventDefault();
        this.handleCloseModal();
    }

    render(){

        if(this.state.loading === true){
            return <Loading />
        }

        return(
            <>
                <div>
                    <Modal 
                        isOpen ={this.state.modalIsOpen}
                        onClose = {this.handleOnCloseModal.bind(this)} 
                        >
                        <EditShoppingCart 
                                        cart = {this.state.cart}
                                        onSubmit = {this.onEditFormSubmit.bind(this)}/>
                    </Modal>

                    <DeleteModal
                        isOpen = {this.state.deleteModalIsOpen}
                        onClose = {this.handleCloseDeleteModal.bind(this)}
                        onDelete = {this.onDelete.bind(this)}
                        onCancel = {this.onCancel.bind(this)}>
                    </DeleteModal>
                        
                        <div className="container" style={{ marginTop: "20px"}}>
                        <div className="row">
                            <div className="col-12">
                                <Link to="/dashboard" style={{display:'inline', margin: '0 5px'}} >
                                    <img 
                                        src = {`${process.env.PUBLIC_URL}/back.png`}
                                        alt = "Volver atras"/>
                                </Link>
                                <h4 className="font-custom-bold" style={{display:'inline'}}>{this.state.cart.name}</h4>
                                <hr/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                
                                <div className="card box-with-bottom text-align-center" style={{alignItems:'center'}}>
                                
                                    <img 
                                        src = {`${process.env.PUBLIC_URL}/carrito_compras.png`}
                                        className = "card-img-top" style = {{ width: "45%" }}/>
                                    <div className="card-body">
                                        <p className="card-text">
                                            {this.state.cart.description}
                                        </p>
                                        <hr />
                                        <button 
                                            id="myBtn" 
                                            className="btn btn-primary-custom"
                                            onClick={this.handleClickEdit.bind(this)}>Editar</button>
                                        <a 
                                            href="#" 
                                            className="btn btn-delete"
                                            onClick = {this.handleOpenDeleteModal.bind(this)}
                                            >Eliminar</a>
                                    </div>
                                </div>
                            </div>
        
                            <ItemCartList cart = { this.state.cart }/> 
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
    
}

export default ShoppingCarDetail;