import "./topbar.css"
import "../shop/cart"
import React, { Component } from "react";
import ecomCart from '@ecomplus/shopping-cart'


export default function Topbar() {
    return (
        <>
            <div className="navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/shop">Home</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    
                                </li>
                            </ul>
                        </div>


                        <div id="iconDiv">
                            <a href="/login">
                                <div className="headerIcon">
                                    <img id="icon" src="/media/images/user.png"></img>
                                    Login
                                </div>

                            </a>
                        </div>

                        <div id="iconDiv">
                            <a href="/cart">
                                <div className="headerIcon">
                                    <img id="icon" src="/media/images/shopping-cart.png"></img>
                                    Cart {ecomCart.data.items.length}
                                </div>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}