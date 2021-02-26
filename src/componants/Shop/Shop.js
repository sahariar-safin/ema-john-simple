import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import "./shop.css";

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
            {
                products.map(product => <Product product={product}></Product>)
            }
            </div>
            <div className="cart-container">

            </div>
        </div>
    );
};

export default Shop;