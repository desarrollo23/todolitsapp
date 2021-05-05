import React, { useState, useEffect } from 'react';
import ShoppingCartList from './shoppingCar/ShoppingCartList.jsx';

const axios = require('axios').default;

const Dashboard = () => {

    const baseUrl = "https://localhost:44382/api";
    const userData = JSON.parse(localStorage.getItem('user')) || {};
    
    const [dataEntity, setDataEntity] = useState([]);
    const {id, token } = userData;

    useEffect(() => {
        const getShoppingCarsUser = async () => {
            const result = await axios.get(`${baseUrl}/ShoppingCar/getShoppingCars/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }});

                setDataEntity(result.data.entity);
        };

        getShoppingCarsUser();
    }, []);

    return (
        <>
            <ShoppingCartList data = {dataEntity}/>
        </>
        
    )
}

export default Dashboard;