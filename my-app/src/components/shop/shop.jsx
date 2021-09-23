import React from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp, firestore } from "firebase/app";
import { collection, getDocs, setDoc, getFirestore } from "firebase/firestore";


import './shop.css'
import Product from './product'

export default function Shop(props) {
    return (
        <>
            <div className="shop-container">
                <h2 className="title">Products</h2>
                <div className="product-container">
                    {productList.map(product => (
                        <Product title={product.title}></Product>
                        
                    ))}
                    
                </div>
                
            </div>
        </>
    );
}

let productList = getProductList();

function getProductList() {

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

    /*var leadsRef = db('products');
    leadsRef.on('value', function (snapshot) {
        // snapshot.forEach(function(childSnapshot) {
        var childData = snapshot.node_.children_.root_.value.value_;
        console.log("snapshot.node_.children_.root_.value.value_: ", snapshot.node_.children_.root_.value.value_)
        // });
    });

    //return getList(db);*/
    return [{ title: "title a" }, { title: "title b" }, { title: "title c" }]
}

async function getList(db) {
    const col = collection(db, 'products');
    const snapshot = await getDocs(col);
    return snapshot.docs.map(doc => doc.data());
}

function getImage() {
    const storage = getStorage();
    const path = ref(storage, '/placeholder.jpg');
    getDownloadURL(path).then((url) => {
        console.log(url);
        return url;
    })
}

function getData() {
    
    const dbRef = ref(getFirestore());
    getFirestore(dbRef, `products/B2gnqPDuDEJa5PvervxA`).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}
