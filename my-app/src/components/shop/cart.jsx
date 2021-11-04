import Footer from "../footer/footer";
import Topbar from '../topbar/topbar'
import { React, Component } from "react";
import './cart.css';

import ecomCart from '@ecomplus/shopping-cart'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
    }
    resetCart() {
        ecomCart.reset();
    }

    render() {
        // return item with title quantity and price

        const items = Array.from(ecomCart.data.items).map(function (item, index) {
            return (
                <div className="card">
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
                            Total: {ecomCart.data.subtotal}
                        </div>

                        <div className="reset">
                            <button className="cart-btn" onClick={this.resetCart}>Reset</button>
                            <button className="cart-btn">Check out</button>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </>
        );
    }
}

export default Cart;