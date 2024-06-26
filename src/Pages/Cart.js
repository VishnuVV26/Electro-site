// Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
