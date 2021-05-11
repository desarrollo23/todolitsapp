import { useState, useMemo } from "react";
import Search from "../search/Search";
import ShoppingCar from "./ShoppingCar";

function ShoppingCartList(props){

    const {carts} = props;
    const [query, setQuery] = useState('');
    const [ filteredCarts, setFilteredCarts ] = useState(carts);

    useMemo(() => {
        const result = carts.filter(cart => {
            return cart.name.toLowerCase()
                            .includes(query.toLocaleLowerCase())
        });

        setFilteredCarts(result);
    }, [carts, query]);

    
    return (

        
        <>
            <Search 
                value = {query}
                onChange = { e => setQuery(e.target.value) }/>

            <div className="container" style={{ marginTop:'1rem'}}>
                <ShoppingCar />
                {filteredCarts.map(cart => {
                    return <ShoppingCar shoppingCarObj = {cart}/>
                })}
            </div>
        </>
    )
}

export default ShoppingCartList;