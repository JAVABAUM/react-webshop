import { React } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { collection, getDocs, query, getFirestore } from "firebase/firestore";
import Topbar from '../topbar/topbar'
import placeholder from './placeholder.jpg';
import './shop.css';

export default function Shop() {
    return (
        <>  
            {getList()}
            <div className="shop-container">
                <h2 className="title">Products</h2>
                <div className="product-container" id="product-container">

                </div>
            </div>
        </>
    );
}

async function getProductList() {

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

    let list = [];
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((product) => {
        list.push(
            {
                title: product.data().title,
                image: product.data().image_src,
                description: product.data().description
            });
    });
    return list;
}

function getList() {
    let productlist = getProductList();
    let final = [];
    productlist.then((list) => {
        list.forEach((product) => {
            final.push(product);
        })
    }).finally((e) => {
        final.forEach((element) => {
            const div = document.createElement(`div`);
            const link = document.createElement(`a`);
            const title = document.createElement(`h3`);
            const img = document.createElement(`img`);

            title.innerHTML = (`${element.title}`);
            div.className = "product";

            link.className = "product-link";

            getImageUrl(element.image);

            img.setAttribute("id", element.image);
            img.className = "product-img";

            link.appendChild(title);
            link.appendChild(img);
            div.appendChild(link);

            document.getElementById("product-container").appendChild(div)
        })
    })
}

function getImageUrl(img) {
    const storage = getStorage();
    getDownloadURL(ref(storage, `product-images/${img}`))
        .then((url) => {
            document.getElementById(img).setAttribute("src", url);
        })
        .catch((error) => {
            console.log(error);
            document.getElementById(img).setAttribute("src", placeholder);
        });
}