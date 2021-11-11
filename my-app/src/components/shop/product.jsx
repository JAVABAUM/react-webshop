import React from "react";
import './product.css'
import Topbar from '../topbar/topbar'
import Footer from "../footer/footer";

import ecomCart from '@ecomplus/shopping-cart'

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            product: this.props.location.state.product,
            images: this.props.location.state.images,
            index: this.props.location.state.index
        };
    }

    componentDidMount() {
        const img = this.state.images.get(this.state.index);
        this.setState({ image: img });
    }
    render() {
        return (
            <>
                <Topbar></Topbar>

                <div className="product-container">
                    <h2 className="title">{this.props.match.params.title}</h2>

                    <div className="innercontainer">

                        <img src={this.state.image} id="bigImage" alt="product" />

                        <br></br>
                        <button className="button-6" id="smallerbutton" role="button" onClick={incQ.bind(this)}>+</button>
                        <button className="button-6" id="smallerbutton" role="button" onClick={decQ.bind(this)}>-</button>
                        <br></br>
                        <input
                            className="numUpDown"
                            type="number"
                            readOnly
                            value={this.state.quantity}
                        ></input>
                        <button className="button-6" role="button" onClick={addCart.bind(this)}>Add to cart!</button>

                    </div>


                </div>
                <Footer></Footer>
            </>
        );

        function incQ() {
            if (this.state.quantity >= 10) {
                alert("can't add more items");
            } else {
                this.setState({ quantity: this.state.quantity + 1 })
            }

        }

        function decQ() {
            if (this.state.quantity <= 1) {
                alert("can't add less that 1 item");
            } else {
                this.setState({ quantity: this.state.quantity - 1 })
            }
        }

        function addCart() {
            ecomCart.addItem({
                _id: this.state.product.id,
                product_id: this.state.product.id,
                sku: this.state.product.id,
                name: this.state.product.title,
                quantity: this.state.quantity,
                price: this.state.product.price,
                keep_item_price: true
            })
        }
    }
}

export default Product;