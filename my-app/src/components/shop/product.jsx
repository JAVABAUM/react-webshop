import React from "react";
import './shop.css'

export default function Product(props) {
    return (
        <>
            <div className="product">
                <a href="/home" className="product-link">
                    <h3>Title</h3>
                    <img src="" alt="image" class="product-img" />
                </a>
            </div>
        </>
    );
}
