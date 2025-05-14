// src/pages/Home.jsx
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
    <div className="layout-inner">
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="game-title">Chronoshift</h1>
          <p className="subtitle">A Battle Across Shifting Time</p>
          <div className="cta-buttons">
            <Link to="/tracker" className="btn">Play Tracker</Link>
            <Link to="/rules" className="btn">Learn the Game</Link>
            <Link to="/starter-decks" className="btn">Buy Starter Decks</Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="feature">
          <h2>Enter the Rift</h2>
          <p>Chronoshift is a competitive fantasy card game where time is unstable and factions rise and fall with the hour. Each match reshapes the battlefield with randomized Time Phases.</p>
        </div>
        <div className="feature">
          <h2>Choose Your Clan</h2>
          <p>Wield the power of Vampires, Werewolves, Flamekin, Humans, Demons—or the mysterious exiled. Each faction thrives during their favored phase.</p>
        </div>
        <div className="feature">
          <h2>Track Time in Real Time</h2>
          <p>Use the built-in Chronoshift Tracker to roll, monitor, and control the battlefield's evolving conditions.</p>
        </div>
      </section>
      </div>

      <footer className="footer">
        <p>© 2025 YatoCrow Games. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/terms">Terms of Use</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}
