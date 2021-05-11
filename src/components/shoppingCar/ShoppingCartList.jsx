import React from 'react';
import ShoppingCar from "./ShoppingCar";
import apiShoppingCartService from '../../services/ShoppingCartService';
import Loading from '../share/Loading';

class ShoppingCartList extends React.Component{

    state = {};

    constructor(props){
        super(props);

        this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

        this.state = {
            loading: true,
            data:[]
        };

    }
    
    componentDidMount(){
        this.getShoppingCarts();
    }

    async getShoppingCarts(){

        this.setState({loading: true});
        const response = await apiShoppingCartService
            .getByUser(this.userInfo.id, this.userInfo.token);

        if(response.entity){
            this.setState({
                data: response.entity
            });
        }

        this.setState({loading: false});

    }
    render(){
        return(
            <>
                {this.state.loading === true && <Loading />}

                {this.state.loading === false && 
                     <div className="container" style={{ marginTop:'1rem'}}>
                     <ShoppingCar />
                     
                     {this.state.data.map(item => {
 
                         return (
                             <ShoppingCar shoppingCarObj = {item} key={item.id}/>
                         );
                     })}
         
                 </div>
                }
               
            </>
        )
    }
}

export default ShoppingCartList;