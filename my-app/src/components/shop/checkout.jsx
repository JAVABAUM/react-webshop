import Footer from "../footer/footer";
import Topbar from '../topbar/topbar'
import { React, Component } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import firebase from "../../firebase";
import './cart.css';
import ecomCart from '@ecomplus/shopping-cart'
import { getAuth } from "@firebase/auth";

export default class checkout extends Component {

    constructor(props) {
        super(props);
        this.state = { cart: [], user: null };
    }
    componentDidMount() {
        const ecom = Array.from(ecomCart.data.items);
        this.setState({ cart: ecom });
        var dbuser = getAuth()
        setTimeout(() => {
            dbuser = dbuser.currentUser.uid;
            this.setState({ user: dbuser });
        }, 500);
    }

    pay(e) {
        e.preventDefault();
        const db = getFirestore(firebase);
        const cart = this.state.cart;
        const user = this.state.user;
        const currentdate = new Date();
        var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();

        cart.forEach(item => {
            const doc = {
                price: item.price,
                product: item.name,
                quantity: item.quantity,
                user: user,
                date: datetime
            }
            console.log(doc)
            const docRef = addDoc(collection(db, "orders"), doc);
        });


        setTimeout(() => {
            window.location.href = "/";
        }, 1500);
    };


    render() {

        return (
            <>
                <Topbar></Topbar>
                <div className="cart-container">
                    <div className="row">
                        <div className="col-3"></div>
                        <h2>PAYMENT</h2>
                        <form className="loginForm col-8" onSubmit={(e) => this.pay(e)}>
                            <div className="mb-2">
                                <label htmlFor="login-mail" className="form-label">
                                    Card Number
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="login-mail"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="login-mail" className="form-label">
                                    Numbers on the back
                                </label>
                                <input
                                    type="number"
                                    min="1111"
                                    max="9999"
                                    className="form-control"
                                    id="login-mail"
                                    aria-describedby="emailHelp"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="login-password" className="form-label">
                                    Card Holder Name
                                </label>
                                <input type="text" className="form-control" id="login-password" />
                            </div>
                            <button type="submit" className="login-button" >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <Footer></Footer>
            </>
        );
    }


}
