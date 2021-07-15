import ItemCart from "./ItemCart";
import React, { useMemo, useState } from 'react';
import NewItemCart from "../itemCart/newItemCart";
import Search from "../search/Search";
import useSearch from '../share/hooks/UseSearch'


function ItemCartList(props) {
   
    const { cart } = props;

    const { query, setQuery, filteredList } = useSearch(cart.items);


    return(
        <>
            <div className="col-8 box-with-bottom">
                <div className = "itemsCart">
                    <Search 
                        value = {query}
                        onChange = { e => setQuery(e.target.value)}/>
                    <div>
                        <table className="table" >
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Completado</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredList.map(item => {
                                    return <ItemCart 
                                                item = {item}
                                                key = {item.id} />
                                })}
                                <NewItemCart 
                                    active={false}
                                    idCart = {cart.id}/>
                            </tbody>
                        </table>                      
                    </div>
                </div>
            </div>
           
        
       
        </>
    )
    
}

export default ItemCartList;