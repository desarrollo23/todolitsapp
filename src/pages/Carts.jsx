import React from 'react';

import ShoppingCartList from '../components/shoppingCar/ShoppingCartList';
import apiShoppingCartService from '../services/ShoppingCartService';
import Loading from '../components/share/Loading';

class Carts extends React.Component{

    state = {
        loading: true,
        error: null,
        data: undefined,
      };

      constructor(props){
        super(props);

        this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
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

    render() {

        if(this.state.loading === true){
            return <Loading />
        }

        return <ShoppingCartList carts = {this.state.data}/>
    }
}

export default Carts;