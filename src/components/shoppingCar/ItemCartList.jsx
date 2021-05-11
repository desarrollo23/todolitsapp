import ItemCart from "./ItemCart";
import React from 'react';
import Loading from "../share/Loading";
import NewItemCart from "../itemCart/newItemCart";


class ItemCartList extends React.Component {
   
    state = {}
    constructor(props){
        super(props);
        this.cart = props.cart;

        this.state = {
            loading: true,
            cart: this.cart
        };

        console.log(this.state);
    }


    componentDidMount(){
        // this.setState({
        //     cart: this.cart
        // });

        // this.setState({loading:false});
    }

    

render(){
    return(
        <>
            
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
                    {this.state.cart.items.map(item => {
                        return <ItemCart 
                                    item = {item}
                                    key = {item.id} />
                    })}
                    <NewItemCart 
                        active={false}
                        idCart = {this.state.cart.id}/>
                </tbody>
            </table>
        
       
        </>
    )
}
    
}

export default ItemCartList;