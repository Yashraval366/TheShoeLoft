import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Cart from './Cart';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      // If the product is already in the cart, increase its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Sample products, count, handleLeft, and handleRight for the slider
  const products = [
    { id: 1, imgSrc: './images/blazer.png', title: 'Product 1', price: '$10' },
    { id: 2, imgSrc: './images/blazer2.png', title: 'Product 2', price: '$20' },
    { id: 3, imgSrc: './images/crater.png', title: 'Product 3', price: '$30' },
    { id: 4, imgSrc: './images/crater2.png', title: 'Product 4', price: '$40' },
    { id: 5, imgSrc: './images/hippie.png', title: 'Product 5', price: '$30' },
    { id: 6, imgSrc: './images/hippie2.png', title: 'Product 6', price: '$20' }
  ];
  const [count, setCount] = useState(0);
  const handleLeft = () => {
    setCount((prevCount) => (prevCount === 0 ? products.length - 1 : prevCount - 1));
  };
  const handleRight = () => {
    setCount((prevCount) => (prevCount === products.length - 1 ? 0 : prevCount + 1));
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home products={products} count={count} handleLeft={handleLeft} handleRight={handleRight} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </>
  );
}

export default App;

