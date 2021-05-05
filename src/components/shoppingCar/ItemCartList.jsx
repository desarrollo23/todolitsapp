import ItemCart from "./ItemCart";
import React from 'react';


const ItemCartList = (props) => {
    const { items } = props;

    const itemCartRender = items.map(el => {
        
        return <ItemCart 
                    item = {el}
                    key = {el.id}/> 
            
    });

    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Completado</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { itemCartRender }
                </tbody>
            </table>
            <div className="text-align-center">
                <a href="" style = {{textDecoration: 'none'}}>
                    <img src= { `${process.env.PUBLIC_URL}/add.png`} alt=""/>
                    <span className="text-muted">Agregar</span>
                </a>
            </div>
       
        </>
    )
}

export default ItemCartList;