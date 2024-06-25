import React from 'react';

function Cart({ cartItems, addToCart }) {
  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map((item, index) => (
        <div key={index} className="cartCard">
          <img src={item.imgSrc} alt={item.title} className="cartItemImage" />
          <div className="cartItemDetails">
            <h2>{item.title}</h2>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => addToCart(item)}>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;