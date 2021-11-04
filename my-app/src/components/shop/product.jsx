import React from "react";
import ReactDOM, { render } from 'react-dom';
import './product.css'
import Topbar from '../topbar/topbar'
import Footer from "../footer/footer";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        };

    }
    componentDidMount() {
        
    }
    render() {
        return (
            <>
                <Topbar></Topbar>
                <div className="product-container">
                    <h2 className="title">{this.props.match.params.title}</h2>
                    <br></br>
                    {console.log(this.props.location.state)}
                    <div className="innercontainer">
                        <br></br>
                        <br></br>
                        <button class="button-6" id="smallerbutton" role="button" onClick={incQ.bind(this)}>+</button>
                        <button class="button-6" id="smallerbutton" role="button" onClick={decQ.bind(this)}>-</button>
                        <br></br>
                        <input
                            className="numUpDown"
                            type="number"
                            readOnly
                            value={this.state.quantity}
                        ></input>
                        <button class="button-6" role="button" onClick={addCart.bind(this)}>Add to cart!</button>

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
            alert("adding " + this.state.quantity + " itemname" + " to the basket");
        }

    }



}

export default Product;