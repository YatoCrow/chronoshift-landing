// src/pages/Home.jsx
import "./Home.css";
import { Link } from "react-router-dom";
import logo from "../assets/chronoshift-logo.png"; // Make sure this is correctly imported

function Home() {
  return (
    <div className="home-container">

      {/* Hero */}
      <div className="hero">
        <img src={logo} alt="Chronoshift" className="hero-logo" />
        <p className="tagline">Time is fractured. Power shifts. Who will rise?</p>
        <div className="cta-buttons">
          <Link to="/starter-decks" className="btn-primary">View Starter Decks</Link>
          <Link to="/factions" className="btn-outline">Explore Factions</Link>
        </div>
      </div>

      {/* Game Overview */}
      <section className="home-section">
        <h2>What is Chronoshift?</h2>
        <p>
          Chronoshift is a time-warping strategy card game where the battlefield evolves with every turn. Control a faction bound to a Time Phase—Day, Night, Full Moon, Scorch, or Dusk—and shift the tides in your favor through tactics, spells, and Conduits of power.
        </p>
      </section>

      {/* Time Phases */}
      <section className="home-section">
        <h2>Time Phases</h2>
        <div className="time-phase-list">
          {[
            "Night",
            "Full Moon",
            "Day",
            "Scorch",
            "Dusk",
          ].map((phase) => (
            <div className="time-phase-card" key={phase}>
              <div className="phase-icon">{/* icon placeholder */}</div>
              <span>{phase}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Starter Deck Preview */}
      <section className="home-section">
        <h2>Starter Decks</h2>
        <div className="deck-preview-grid">
          <div className="deck-card">House Noctvaris</div>
          <div className="deck-card">The Moondrath</div>
          <div className="deck-card">Solari Ascendants</div>
        </div>
        <Link to="/starter-decks" className="btn-outline small-btn">See All Decks</Link>
      </section>

    </div>
  );
}

export default Home;
