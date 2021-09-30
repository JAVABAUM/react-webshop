import React from "react";
import './shop.css'

export default function Product(props) {
    return (
        <>
            <div className="product">
                <a href="/home" className="product-link">
                    <h3>{props.title}</h3>
                    <img src={props.image} alt="image" className="product-img"/>
                </a>
            </div>
        </>
    );
}