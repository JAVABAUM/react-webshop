
import { collection, doc, setDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import React from "react";
import './shop.css'

export default function Product(props) {
    return (
        <>
            <div className="shop-container">
                <button onClick={() => addOrderToFirebase({ name: "aa", price: 10, quantity: 1 })}>Buy</button>
            </div>
        </>
    );
}
const firebaseConfig = {
    apiKey: "AIzaSyAvxvEtENC1DGh00_tIv6K0Wg8qZ1rMlb4",
    authDomain: "webshop-f0863.firebaseapp.com",
    projectId: "webshop-f0863",
    storageBucket: "webshop-f0863.appspot.com",
    messagingSenderId: "727095280293",
    appId: "1:727095280293:web:718b2c3fffc99ec311c34c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log(db);

function addOrderToFirebase(product){
    
    setDoc(doc(db, "orders", Math.floor(Math.random() * 100000)), {
        product: product.name,
        quantity: product.quantity,
        price: product.price
      });   
}
