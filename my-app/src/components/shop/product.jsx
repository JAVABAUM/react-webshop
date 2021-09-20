import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

import React from "react";
import './shop.css'

export default function Product(props) {
    return (
        <>
            <div className="product">
                <a href="/home" className="product-link">
                    <h3>Title</h3>
                    <img src={getImage()} alt="image" className="product-img" id="image" />
                </a>
            </div>
        </>
    );
}

function getImage() {
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
        document.getElementById("image").setAttribute("src", url);
    })
}