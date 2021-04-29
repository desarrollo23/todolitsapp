import './ShoppingCartDetail.css';

const ShoppingCarDetail = ({shoppingCar, history}) => {


    return(
        <>
            <div className="container" style={{ marginTop: "20px"}}>
                <div className="row">
                    <div className="col-12">
                        <h4>Compras mes de Abril</h4>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <img 
                                src = {`${process.env.PUBLIC_URL}/shopping_cart_black_36dp.png`}
                                className = "card-img-top" style = {{ width: "45%" }}/>
                            <div className="card-body">
                                <p className="card-text">
                                ome quick example text to build on the card title and make up the bulk of the card's content
                                </p>
                                <a href="#" class="card-link">Editar</a>
                                <a href="#" class="card-link">Eliminar</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-8">
                        <div className = "itemsCart">
                            <h5>Productos</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCarDetail;