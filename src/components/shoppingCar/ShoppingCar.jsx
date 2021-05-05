import React, { PureComponent, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/ShoppingCart.css';

class ShoppingCar extends PureComponent {
    
    goToDetail = (cart) => {
        this.props.history.push({
            pathname: '/shoppingCar/detail',
            state: { detail: cart }
        });
    }

    create = () => {
        this.props.history.push('/shoppingCart/new');
    }
    
   

    render(){
        const { shoppingCarObj } = this.props;

        let newShoppingCart = shoppingCarObj;
        let image = `${process.env.PUBLIC_URL}/carrito_compras.png`;
        let isNewCart = false;

        if(!newShoppingCart){
            isNewCart = true;
            newShoppingCart = {
                name: 'Crear carrito',
                description: 'Puedes agregar un nuevo carrito'
            }

            image = `${process.env.PUBLIC_URL}/nuevo_carrito_compras_lista.png`;
        }

        return(
            <>
            

              

                    <div 
                        className="card text-align-center back-color-main box-cart inline-block" 
                        style = {{ width: '18rem'}}>
                        
                            <img 
                                src= {image}
                                className="card-img-top img-fluid" 
                                alt="..."
                                style = {{ width: "6rem"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{newShoppingCart.name }</h5>
                            <p class="card-text"></p>
                            { !isNewCart ? 
                                    <a 
                                        
                                    className="btn btn-primary-custom"
                                    onClick = 
                                        {(event) => this.goToDetail(newShoppingCart)}>
                                            Entrar al carrito</a>
                                    : 
                                    <a 
                                    
                                    className="btn btn-primary-custom"
                                    onClick = 
                                        {(event) => this.create()}>
                                            Nuevo</a>
                            }
                        </div>
                    
                </div>

            </>
        )
    }
    
}

export default withRouter(ShoppingCar);