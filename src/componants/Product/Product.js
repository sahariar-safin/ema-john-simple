import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
                <h3 className="product-name">{name}</h3>
                <h5>by: {seller}</h5>
                <h2>${price}</h2>
                <p>Only {stock} left in stock . Order soon</p>
                <button> <FontAwesomeIcon icon={faCartPlus} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;