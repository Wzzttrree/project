import React, { useState } from 'react';
import './Home.css';
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
import Cr7 from '../../images/adssad.jpg';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [subscribed, setSubscribed] = useState(false); // State to track subscription status

  const games = [
    { id: 1, name: 'CR7', price: 50, category: 'sports', img: Cr7 },
    { id: 2, name: 'Clash of Clans', price: 30, category: 'strategy', img: clashofclans },
    { id: 3, name: 'Apex Legends', price: 40, category: 'action', img: ape },
    { id: 4, name: 'Block Black', price: 10, category: 'strategy', img: block },
    { id: 5, name: 'Brawl Stars', price: 20, category: 'action', img: brawl },
    { id: 6, name: 'Clash of Royale', price: 60, category: 'strategy', img: clash },
    { id: 7, name: 'CS 2', price: 60, category: 'action', img: Coun },
    { id: 8, name: 'Fortnite', price: 60, category: 'action', img: fore },
    { id: 9, name: 'Free Fire', price: 70, category: 'action', img: free },
    { id: 10, name: 'Minecraft', price: 70, category: 'adventure', img: mine },
    { id: 11, name: 'Pubg Mobile', price: 80, category: 'action', img: pubg },
    { id: 12, name: 'Roblox', price: 30, category: 'adventure', img: rob },
    { id: 13, name: 'War Thunder', price: 30, category: 'action', img: war },
    { id: 14, name: 'Among Us', price: 30, category: 'puzzle', img: among },
    { id: 15, name: 'Angry Birds', price: 30, category: 'puzzle', img: ang },
    { id: 16, name: 'Stumble Guys', price: 30, category: 'adventure', img: guys },
    { id: 17, name: 'Hill Climb', price: 30, category: 'racing', img: hile },
    { id: 18, name: 'Mini Militia', price: 30, category: 'action', img: mini },
    { id: 19, name: 'Mobile Legends', price: 310, category: 'strategy', img: mob },
    { id: 20, name: 'Shadow Fight 2', price: 20, category: 'fighting', img: shadow },
    { id: 21, name: 'Shark Hungry', price: 30, category: 'adventure', img: shark },
    { id: 22, name: 'Call of Duty', price: 310, category: 'action', img: call },
    { id: 23, name: 'Super Mario Run', price: 20, category: 'adventure', img: mario },
    { id: 24, name: 'Stickman Party', price: 30, category: 'party', img: stick },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredGames = games.filter((game) => {
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    const matchesSearchQuery = game.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  const buyGame = (game) => {
    alert(`Thank you for purchasing ${game.name}!`);
  };

  // Handle subscription toggle
  const handleSubscribe = () => {
    setSubscribed(!subscribed); // Toggle subscription status
  };

  return (
    <div className="home-page">
      <header>
        <h1>Shop games</h1>
        <p>Welcome to our store, select a game by category or search query!</p>
      </header>

      <section className="search-bar">
        <input
          type="text"
          placeholder="Search by game name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>

      <section className="categories">
        <h2>Categories</h2>
        <div className="category-list">
          <button onClick={() => handleCategoryClick('all')} className={`category-item ${selectedCategory === 'all' ? 'active' : ''}`}> All </button>
          <button onClick={() => handleCategoryClick('sports')} className={`category-item ${selectedCategory === 'sports' ? 'active' : ''}`}>⚽ Sport</button>
          <button onClick={() => handleCategoryClick('action')} className={`category-item ${selectedCategory === 'action' ? 'active' : ''}`}>🎮 Action</button>
          <button onClick={() => handleCategoryClick('strategy')} className={`category-item ${selectedCategory === 'strategy' ? 'active' : ''}`}>🧠 Strategy</button>
          <button onClick={() => handleCategoryClick('racing')} className={`category-item ${selectedCategory === 'racing' ? 'active' : ''}`}>🚗 Race</button>
          <button onClick={() => handleCategoryClick('adventure')} className={`category-item ${selectedCategory === 'adventure' ? 'active' : ''}`}> 🏞 travel</button>
          <button onClick={() => handleCategoryClick('puzzle')} className={`category-item ${selectedCategory === 'puzzle' ? 'active' : ''}`}>🧩 Puzzles</button>
        </div>
      </section>

      <section className="games-section">
        <h2>Games</h2>
        <div className="game-cards">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <div key={game.id} className="game-card">
                <img src={game.img} alt={game.name} />
                <h3>{game.name}</h3>
                <p>Price: ${game.price}</p>
                <button className="buy-button" onClick={() => buyGame(game)}>Buy</button>
              </div>
            ))
          ) : (
            <p>There are no games matching your request.</p>
          )}
        </div>
      </section>

      <div className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <p>© 2024 Game Store. All rights reserved.</p>
          </div>
          <div className="footer-section">
            <h4>Usefull links</h4>
            <div className="footer-links">
              <a href="https://chatgpt.com/c/675e5708-8d18-8013-b16e-0decafe619f8">Privacy Policy</a>
              <a href="https://mui.com/material-ui/react-menu/">Terms of Use</a>
              <a href="https://uiverse.io/">Contacts</a>
              <a href="https://store.steampowered.com/?l=russian">About us</a>
              <a href="https://en.wikipedia.org/wiki/English_language">FAQ</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Follow us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/?locale=ru_RU" className="facebook">🔵 Facebook</a>
              <a href="https://x.com/?lang=ru" className="twitter">🐦 Twitter</a>
              <a href="https://www.instagram.com/" className="instagram">📸 Instagram</a>
              <a href="https://www.youtube.com/" className="youtube">▶️ YouTube</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Subscribe to our newsletter</h4>
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

export default Home;
