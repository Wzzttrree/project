import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import cr7image from '../../images/adssad.jpg';
import clashofclans from '../../images/nurbollox.jpg';
import ape from '../../images/ape.jpg';
import block from '../../images/block.jpg';
import brawl from '../../images/brawl.jpg';
import clash from '../../images/clash.jpg';
import Coun from '../../images/coun.png';
import fore from '../../images/fore.jpg';
import free from '../../images/free.jpg';
import mine from '../../images/mine.jpg';
import pubg from '../../images/pubg.jpg';
import rob from '../../images/rob.jpg';
import war from '../../images/war.jpg';
import among from '../../images/among.jpg';
import ang from '../../images/ang.jpg';
import guys from '../../images/guys.jpg';
import hile from '../../images/hile.jpg';
import mini from '../../images/mini.jpg';
import mob from '../../images/mob.jpg';
import plant from '../../images/plant.jpg';
import shadow from '../../images/shadow.jpg';
import shark from '../../images/shark.jpg';
import stick from '../../images/stick.jpg';
import mario from '../../images/mario.jpg';
import call from '../../images/call.jpg';

import './Games.css';

function Games() {
  const games = [
    { id: 1, name: 'CR7', price: 50, img: cr7image },
    { id: 2, name: 'Clash of Clans', price: 30, img: clashofclans },
    { id: 3, name: 'Apex Legends', price: 40, img: ape },
    { id: 4, name: 'Block Black', price: 10, img: block },
    { id: 5, name: 'Brawl Stars', price: 20, img: brawl },
    { id: 6, name: 'Clash of Royale', price: 60, img: clash },
    { id: 7, name: 'CS 2', price: 60, img: Coun },
    { id: 8, name: 'Fortnite', price: 60, img: fore },
    { id: 9, name: 'Free Fire', price: 70, img: free },
    { id: 10, name: 'Minecraft', price: 70, img: mine },
    { id: 11, name: 'Pubg Mobile', price: 80, img: pubg },
    { id: 12, name: 'Roblox', price: 30, img: rob },
    { id: 13, name: 'War Thunder', price: 30, img: war },
    { id: 14, name: 'Among Us', price: 30, img: among },
    { id: 15, name: 'Angry Birds', price: 30, img: ang },
    { id: 16, name: 'Stumble Guys', price: 30, img: guys },
    { id: 17, name: 'Hill Climb', price: 30, img: hile },
    { id: 18, name: 'Mini Militia', price: 30, img: mini },
    { id: 19, name: 'Mobile Legends', price: 310, img: mob },
    { id: 20, name: 'Shadow Fight 2', price: 20, img: shadow },
    { id: 21, name: 'Shark Hungry', price: 30, img: shark },
    { id: 22, name: 'Call of Duty', price: 310, img: call },
    { id: 23, name: 'Super Mario Run', price: 20, img: mario },
    { id: 24, name: 'Stickman Party', price: 30, img: stick },
  ];

  const [cart, setCart] = useState([]);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (game) => {
    const gameWithUniqueId = { ...game, uniqueId: uuidv4() };
    setCart((prevCart) => [...prevCart, gameWithUniqueId]);
  };

  const handleSubscribe = () => {
    setSubscribed(!subscribed); 
  };

  return (
    <div className="games">
      <h2 className="games-title">Available Games</h2>
      <ul className="games-list">
        {games.map((game) => (
          <li key={game.id} className="games-item">
            <img src={game.img} alt={game.name} className="games-item-img" />
            <div className="games-item-info">
              <span className="games-item-name">{game.name}</span>
              <span className="games-item-price">${game.price}</span>
            </div>
            <button className="games-item-button" onClick={() => addToCart(game)}>
              Add to Cart
            </button>
          </li>
        ))}
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
            <h4>Subscribe to our Newsletter</h4>
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

export default Games;
