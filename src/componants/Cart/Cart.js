import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    let total = cart.reduce((total, product) => total + product.price, 0);

    let shippingCost = 0;
    if (total === 0) {
        shippingCost = 0;
    }
    else if (total > 20) {
        shippingCost = 19.99;
    }
    else if (total > 0) {
        shippingCost = 4.99;
    }

    const roundNumber = (num) => {
        const number = Math.round(num);
        return number;
    }

    let tex = roundNumber(total + shippingCost) / 10;

    return (
        <div className="order-cart">
            <h1>Order Summary</h1>
            <h3>Product Ordered: {cart.length}</h3>
            <h3>Total product price: {total.toFixed(2)}</h3>
            <h3><small>Shipping cost: {shippingCost}</small></h3>
            <h3><small>Tax + Vat: {tex} </small></h3>
            <h2>Total: {roundNumber(total + shippingCost + tex)} </h2>
        </div>
    );
};

export default Cart;