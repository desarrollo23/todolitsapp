import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

import Dashboard from "../components/Dashboard.js";
import Login from '../components/login/Login.js';
import ShoppingCarDetail from '../components/shoppingCar/ShoppingCarDetail.jsx';
import ShoppingCar from '../components/shoppingCar/ShoppingCar.jsx';
import Navbar from "../components/navbar/Navbar.jsx";

const AppRouter = () => {
    
      return(
        
          <Router>
              <Navbar />
              <Switch>
                  <Route path='/login' exact component = {Login}/>
                    
                  
                    <Route path='/' exact component = {Dashboard}/>
                    <Route path='/dashboard' exact component = {Dashboard}/>
                    <Route path='/shoppingCar/detail/:id' exact component = {ShoppingCarDetail}/>
                    <Route path='/shoppingCar' exact component = {ShoppingCar}/>
                    <Route path = "/404">
                        <h1>404 not found</h1>
                    </Route>
                    <Route path = "*">
                        <Redirect to = "/404" />
                    </Route>
                  
              </Switch>
          </Router>
      )
  }

  export default AppRouter;