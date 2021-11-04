import "./topbar.css"
import "../shop/cart"
import React, { Component } from "react";


export default function Topbar() {
    return (
        <>
            <div className="navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/login">Shop</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    About
                                </li>
                            </ul>
                        </div>


                        <div id="iconDiv">
                            <a href="/product">
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
                                    Cart
                                </div>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}



/*
firebase.initializeApp({
    apiKey: "AIzaSyAvxvEtENC1DGh00_tIv6K0Wg8qZ1rMlb4",
    authDomain: "webshop-f0863.firebaseapp.com",
    projectId: "webshop-f0863",
    storageBucket: "webshop-f0863.appspot.com",
    messagingSenderId: "727095280293",
    appId: "1:727095280293:web:718b2c3fffc99ec311c34c"
});

export const db = firebase.firestore(); initialise

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        console.log("User is signed in.")
        document.getElementById("username").innerHTML = displayName
    } else {
        console.log("No user is signed in.")
        document.getElementById("username").innerHTML = "Guest"
    }
});
*/