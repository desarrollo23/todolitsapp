import React, { useState, useEffect } from 'react';
import ShoppingCartList from './shoppingCar/ShoppingCartList.jsx';
import apiShoppingCartService from '../services/ShoppingCartService';

class Dashboard extends React.Component{

    state = {}

    constructor(props){  
        super(props)
    }

    componentDidMount(){
        
    }

    render(){
        return (
            <>
                <ShoppingCartList/>
            </>
        )
    }
}

export default Dashboard;