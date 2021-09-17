import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import React from "react";

import './shop.css'
import Product from './product'

export default function Shop(props) {
    return (
        <>
            <div className="shop-container">
                <h2 className="title">Products</h2>
                <div className="product-container">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
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

const storage = getStorage();
const path = ref(storage, '/placeholder.jpg');
getDownloadURL(path).then((url) => {
    let productList;
})

