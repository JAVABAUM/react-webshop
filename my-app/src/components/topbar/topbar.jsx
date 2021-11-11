import "./topbar.css"
import "../shop/cart"
import React, { Component } from "react";
import ecomCart from '@ecomplus/shopping-cart'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { collection, getDocs, query, getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from "../../firebase";


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
                            
                            <div id="p1"></div>
                        </div>

                        <div id="iconDiv">
                            <a href="/login">
                                <div className="headerIcon">
                                    <img id="icon" src="/media/images/user.png"></img>

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
                        <div id="iconDiv" >
                            <a onclick="firebaseLogout()" href="/login" >
                                <div className="headerIcon">
                                    Logout
                                </div>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

const app = firebase;
const db = getFirestore(app);


const auth = getAuth();
const user = auth.currentUser;
function getmail(){
    if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        const uid = user.uid;
        console.log(email);
        document.getElementById("p1").innerHTML = getemailbf(email);

    }
};

function getemailbf(email) {
    return email.substring(0, email.indexOf("@"));
}

function firebaseLogout() {
    auth.signOut().then(function () {
        console.log("Logged out");
        document.getElementById("p1").innerHTML = "";
    }).catch(function (error) {
        console.log("Error logging out");
    });
}
onAuthStateChanged(auth, (user) => {
    getmail();
});
