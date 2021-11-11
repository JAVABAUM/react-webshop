import { React, Component } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { collection, getDocs, query, getFirestore } from "firebase/firestore";
import firebase from '../../firebase.js'
import { Link } from "react-router-dom";
import Topbar from '../topbar/topbar'
import Footer from "../footer/footer";
import './shop.css';
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { productlist: [], images: new Map() };
    }

    render() {
        const { productlist, images } = this.state;
        const prlist = Array.from(productlist).map(function (product, index) {
            return <div className="product" key={index}>
                <h3 className="">{product.title}</h3>
                <img className="product-img" src={images.get(product.image)} alt="product" />
                <br />

                <Link
                    to={{
                        pathname: `/product/${product.title}`,
                        state: { product: product, images: images, index: product.image }
                    }} >
                    <br />
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
        const db = getFirestore(firebase);

        let list = [];
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((product) => {
            list.push(
                {
                    id: product.id,
                    title: product.data().title,
                    image: product.data().image_src,
                    description: product.data().description,
                    price: product.data().price,
                });
            this.getImageUrl(product.data().image_src);


        });
        this.setState({ productlist: list });
    }


    getImageUrl(img) {
        const storage = getStorage();
        getDownloadURL(ref(storage, `product-images/${img}`))
            .then((url) => {
                const old = this.state.images;
                old.set(img, url);
                this.setState({ images: old });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentWillUnmount() {
    }
}

export default Shop;