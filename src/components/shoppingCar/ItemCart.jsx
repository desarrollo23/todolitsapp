import React, { PureComponent } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';

class ItemCart extends PureComponent{

    handleChange = e => {
        console.log(e.target);
    }

    render(){
        const { item } = this.props;
        return(
            
                <tr>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td>
                        <div class="form-switch col-md-6 offset-md-3">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                id="flexSwitchCheckDefault"
                                name = "item-status"       
                                onChange = {this.handleChange}/>
                        </div>
                    </td>
                    <td>
                        <button type="button" className="btn btn-delete">Eliminar</button>
                    </td>
                </tr>
            
        )
    }
}

export default withRouter(ItemCart);