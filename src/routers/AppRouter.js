import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import Dashboard from "../components/Dashboard.js";
import Login from '../components/login/Login.js';
import ShoppingCarDetail from '../pages/ShoppingCarDetail';
import ShoppingCar from '../components/shoppingCar/ShoppingCar.jsx';
import ItemCart from "../components/shoppingCar/ItemCart.jsx";
import ItemCartList from "../components/shoppingCar/ItemCartList.jsx";
import ShoppingCartList from "../components/shoppingCar/ShoppingCartList.jsx";
import NewAccount from "../components/newAccount/NewAccount.jsx";
import NewShoppingCart from "../components/shoppingCar/NewShoppingCart.jsx";
import EditShoppingCart from "../components/shoppingCar/EditShoppingCart.jsx";
import Layout from "../components/share/Layout.jsx";
import NewItemCart from "../components/itemCart/newItemCart.jsx";


const AppRouter = () => {
    
      return(
        
        <Router>
            <Layout>
                <Switch>
                    <Route path='/login' exact component = {Login}/>
                    <Route path='/' exact component = {Dashboard}/>
                    <Route path='/newAccount' exact component = {NewAccount}/>
                    <Route path='/dashboard' exact component = {Dashboard}/>
                    <Route path='/shoppingCar/detail/:id' exact component = {ShoppingCarDetail}/>
                    <Route path='/shoppingCar' exact component = {ShoppingCar}/>
                    <Route path='/shoppingCart/new' exact component = {NewShoppingCart}/>
                    <Route path='/shoppingCart/edit/:id' exact component = {EditShoppingCart}/>
                    <Route path='/shoppingCarList' exact component = { ShoppingCartList }/>
                    <Route path='/shoppingCar/detail/itemCart' exact component = {ItemCart}/>
                    <Route path='/itemCart/new' exact component = {NewItemCart}/>
                    <Route path='/shoppingCar/detail/itemCartList' exact component = { ItemCartList }/>
                    <Route path = "/404">
                        <h1>404 not found</h1>
                    </Route>
                    <Route path = "*">
                        <Redirect to = "/404" />
                    </Route>
                </Switch>
            </Layout>
        </Router>
      )
  }

  export default AppRouter;