import NavBar from './navbar/Navbar.jsx';
import ShoppingCar from './shoppingCar/ShoppingCar.jsx';

const Dashboard = () => {


    const shopingCarList = [
        {
            "id": 1,
            "name" : "Compras Abril",
            "description": "Compras para hacer en el mes de abril",
            "items": []
        },
        {
            "id": 2,
            "name" : "Compras en el exito",
            "description": "Compras que se deben hacer en el exito",
            "items": []
        },
        {
            "id": 3,
            "name" : "Compras en el d1",
            "description": "Compras para hacer el el D1 porque es mas barato",
            "items": []
        }
    ];

const listItems = shopingCarList.map((el) => {
       return <ShoppingCar 
                    shoppingCarObj = {el}
                    key= {el.id}/>
});

    return (
        <>
            {listItems}
        </>
        
    )
}

export default Dashboard;