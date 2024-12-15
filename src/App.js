import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './public/home/Home';
import Games from './public/games/Games';
import Cart from './public/cart/Cart';
import { Route, Routes } from 'react-router-dom';
import { FaHome, FaGamepad, FaShoppingCart } from 'react-icons/fa';



function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart((prevCart) => [...prevCart, game]);
  };

  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </div>
  );
}

export default App;

