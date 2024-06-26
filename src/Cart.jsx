import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

function Cart({ cartItems, incrementQuantity, decrementQuantity, removeFromCart }) {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Product</th>
                <th></th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td><button onClick={() => removeFromCart(item.id)}>X</button></td>
                  <td><img src={item.imgSrc} alt={item.title} /></td>
                  <td>
                    <div>{item.title}</div>
                    <div className="item-color">{item.color}</div>
                  </td>
                  <td>
                    <button onClick={() => item.liked = !item.liked}>
                      {item.liked ? '❤️' : '♡'}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                  </td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="checkout">
            <Link to="/payment">
              <button className="checkout-button">Proceed to Payment</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
