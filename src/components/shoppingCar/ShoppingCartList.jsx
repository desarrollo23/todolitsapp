import Search from "../search/Search";
import useSearch from "../share/hooks/UseSearch";
import ShoppingCar from "./ShoppingCar";

function ShoppingCartList(props){

    const {carts} = props;
    const { query, setQuery, filteredList } = useSearch(carts);

    
    return (

        
        <>
            <Search 
                value = {query}
                onChange = { e => setQuery(e.target.value) }/>

            <div className="container" style={{ marginTop:'1rem'}}>
                <ShoppingCar />
                {filteredList.map(cart => {
                    return <ShoppingCar shoppingCarObj = {cart}/>
                })}
            </div>
        </>
    )
}

export default ShoppingCartList;