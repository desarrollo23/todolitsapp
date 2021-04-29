import React, { PureComponent } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import './ShoppingCar.css';

class ShoppingCar extends PureComponent {
    
    goToDetail = (id) => {
        const {history} = this.props;
        history.push('/shoppingCar/detail/' + id);
    }

    render(){
        const { shoppingCarObj } = this.props;

        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{shoppingCarObj.name}</h5>
                        <p 
                            className="card-text">
                                {shoppingCarObj.description}
                        </p>
                        <a 
                            
                            className="btn btn-primary"
                            onClick = {(event) => this.goToDetail(shoppingCarObj.id)}>Entrar al carrito</a>
                </div>
            </div>
        )
    }
    
}

export default withRouter(ShoppingCar);