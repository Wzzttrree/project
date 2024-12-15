import React, { useState, useEffect } from 'react';
import './Cart.css';

function Cart() {
  const [cart, setCart] = useState([]);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (uniqueId) => {
    const updatedCart = cart.filter((game) => game.uniqueId !== uniqueId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const buyGame = (game) => {

    alert(`Thank you for purchasing ${game.name}!`);
    
  
    const updatedCart = cart.filter((item) => item.uniqueId !== game.uniqueId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleSubscribe = () => {
    setSubscribed(!subscribed); 
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      <ul>
        {cart.length > 0 ? (
          cart.map((game) => (
            <li key={game.uniqueId}>
              <img src={game.img} alt={game.name} className="games-item-img" />
              {game.name} - ${game.price}{" "}
              <button onClick={() => removeFromCart(game.uniqueId)}>Delete</button>
              <button onClick={() => buyGame(game)}>Buy</button>
            </li>
          ))
        ) : (
          <p>Cart is empty</p>
        )}
      </ul>

      <div className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <p>© 2024 Game Store. All rights reserved.</p>
          </div>

          <div className="footer-section">
            <h4>Useful Links</h4>
            <div className="footer-links">
              <a href="https://chatgpt.com/c/675e5708-8d18-8013-b16e-0decafe619f8">Privacy Policy</a>
              <a href="https://mui.com/material-ui/react-menu/">Terms of Use</a>
              <a href="https://uiverse.io/">Contacts</a>
              <a href="https://store.steampowered.com/?l=russian">About Us</a>
              <a href="https://en.wikipedia.org/wiki/English_language">FAQ</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/?locale=ru_RU" className="facebook">🔵 Facebook</a>
              <a href="https://x.com/?lang=ru" className="twitter">🐦 Twitter</a>
              <a href="https://www.instagram.com/" className="instagram">📸 Instagram</a>
              <a href="https://www.youtube.com/" className="youtube">▶️ YouTube</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Subscribe to Our Newsletter</h4>
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn" onClick={handleSubscribe}>
              {subscribed ? 'You are subscribed!' : 'Subscribe'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
