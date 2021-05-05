import ShoppingCar from "./ShoppingCar";

const ShoppingCartList = (props) => {

    const { data } = props;
    let cartList = data || [];

    return(
        <>
        <div className="container">
            <ShoppingCar/>
            {cartList.map(item => (
                <ShoppingCar shoppingCarObj = {item} key={item.id}/>
            ))}

        </div>
        </>
    )
}

export default ShoppingCartList;