import { React, Component } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { collection, getDocs, query, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import Topbar from '../topbar/topbar'
import Footer from "../footer/footer";
import './shop.css';
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { productlist: [], images: [] };
    }

    render() {
        const { productlist, images } = this.state;
        const prlist = Array.from(productlist).map(function (product, index) {
            return <div className="product" >
                <h3 className="">{product.title}</h3>
                <img className="product-img" src={images[index]} alt="product" />
                <br />

                <Link
                    to={{
                        pathname: `/product/${product.title}`,
                        state: { product: product, images: images, index: index }
                    }} >
                        <br/>
                    <button className="view-btn" >View Product</button>
                </Link>
            </div>;
        });


        return (
            <>
                <Topbar />
                <div className="shop-container">
                    <h2 className="title">Products</h2>
                    <div className="" id="product-container">
                        {prlist}
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    async componentDidMount() {
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
            this.getImageUrl(product.data().image_src);
        });
        this.setState({ productlist: list });
    }


    getImageUrl(img) {
        const storage = getStorage();
        getDownloadURL(ref(storage, `product-images/${img}`))
            .then((url) => {
                this.setState({ images: [...this.state.images, url] });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentWillUnmount() {
    }
}

export default Shop;