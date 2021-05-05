
import ValidateLogin from "../security/ValidateLogin";
import EditShoppingCart from "./EditShoppingCart";
import ItemCartList  from "./ItemCartList";
import ModalComponent from '../modals/Modal';
import './ShoppingCartDetail.css';
import { useState } from "react";

const axios = require('axios').default;

const ShoppingCarDetail = (props) => {

    const { state } = props.location;
    const cartObj = state.detail;
    const baseUrl = "https://localhost:44382/api";

    const [html, setHtml] = useState();

    let editCartHtml = '';

    const deteleCart = (e) => {
        e.preventDefault();
        const answer = prompt('¿Esta seguro de eliminar el carrito?');

        if(answer == 'si'){
            deleteCartService();
        }
    }

    const deleteCartService = () => {

        axios({
            method: 'delete',
            url: `${baseUrl}/ShoppingCar/deleteShoppingCar/${cartObj.id}`
        }).then(console.log)
        .catch(console.log);
    }

    const editCart = (e) => {
        e.preventDefault();

        editCartHtml = <EditShoppingCart cart= {cartObj}/>; 
        setHtml(editCartHtml);

    }

    return(
        <>
            <div className="container" style={{ marginTop: "20px"}}>
                <div className="row">
                    <div className="col-12">
                        <h4 className="font-custom-bold">{cartObj.name}</h4>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="card box-with-bottom text-align-center inline-block">
                            <img 
                                src = {`${process.env.PUBLIC_URL}/carrito_compras.png`}
                                className = "card-img-top" style = {{ width: "45%" }}/>
                            <div className="card-body">
                                <p className="card-text">
                                    {cartObj.description}
                                </p>
                                <a 
                                    href="#" 
                                    className="btn btn-primary-custom"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                    onClick = {editCart}>Editar</a>
                                <a 
                                    href="#" 
                                    className="btn btn-delete"
                                    onClick= {deteleCart}
                                    >Eliminar</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 box-with-bottom">
                        <div className = "itemsCart">
                            <h5>Productos</h5>
                            <div>
                                 <ItemCartList items = { cartObj.items }/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalComponent html = {html}/>
        </>
    )
}

export default ShoppingCarDetail;