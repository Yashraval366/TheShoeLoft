import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Cart from './Cart';
import Payment from './Payment'; // Import the payment component
import { Routes, Route } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const incrementQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const products = [
    { id: 1, imgSrc: './images/blazer.png', title: 'blazer', color: 'White', price: 5000 },
    { id: 2, imgSrc: './images/blazer2.png', title: 'blazer2', color: 'White', price: 5000 },
    { id: 3, imgSrc: './images/crater.png', title: 'crater', color: 'Brown', price: 5000 },
    { id: 4, imgSrc: './images/crater2.png', title: 'crater2', color: 'Brown', price: 5000 },
    { id: 5, imgSrc: './images/hippie.png', title: 'hippie', color: 'Brown', price: 5000 },
    { id: 6, imgSrc: './images/hippie2.png', title: 'hippie2', color: 'Brown', price: 5000 },
    { id: 7, imgSrc: './images/air.png', title: 'air', color: 'Brown', price: 5000 },
    { id: 8, imgSrc: './images/air2.png', title: 'air2', color: 'Brown', price: 5000 },
  ];

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/payment"
          element={<Payment />} // Add the payment route
        />
      </Routes>
    </>
  );
}

export default App;
