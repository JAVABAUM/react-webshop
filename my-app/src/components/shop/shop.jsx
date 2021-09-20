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
