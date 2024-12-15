import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaHome, FaGamepad, FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(storedCart.length);
  }, []);

  return (
    <nav className="navbar"> 
      <h1 className='h1'>Shop games</h1>
      <ul>
        <li><FaHome /> <Link className='links' to={"/"}>Home</Link></li>
        <li><FaGamepad /> <Link className='links' to={"/games"}>Games</Link></li>
        <li>
          <FaShoppingCart /> 
          <Link className='links' to={"/cart"}>
            Cart <span className="cart-count">{cartCount}</span>
          </Link>
        </li>
      </ul>
      
    </nav>
  );
}

export default Navbar;
