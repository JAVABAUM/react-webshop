import Footer from "../footer/footer";
import Topbar from '../topbar/topbar'
import { React, Component } from "react";
import './cart.css';

import ecomCart from '@ecomplus/shopping-cart'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {thing: 'thing'};
    }
    componentDidMount() {
        
    }
    resetCart() {
        alert('Reset');
    }
    checkout() {
        window.location.href = '/checkout';
    }

    render() {        
        function removeItem(id) {
            ecomCart.removeItem(id);
        };
        const items = Array.from(ecomCart.data.items).map(function (item, index) {
            return (
                <div className="card" key={index}>
                    <div className="card-body">
                        <div className="hstack gap-3">
                            <div>
                                Name: {item.name}
                            </div>
                            <div>
                                Quantity: {item.quantity}
                            </div>
                            <div>
                                Price: {item.price}
                            </div>
                            <div>
                                <button className="remove-btn" onClick={removeItem(item.product_id)}>remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <>
                <Topbar />
                <div className="cart-container">
                    <h2 className="title">Cart</h2>
                    <div className="cart-items">
                        {items}
                        <br />
                        <div className="total">
                            Total: {ecomCart.data.subtotal} CHF
                        </div>

                        <div className="reset">
                            <button className="cart-btn" onClick={this.resetCart}>Reset</button>
                            <button className="cart-btn" onClick={this.checkout}>Check out</button>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </>
        );
    }
}

export default Cart;