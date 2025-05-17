// src/pages/Home.jsx
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">

      {/* Hero */}
      <div className="hero">
        <img src="/assets/chronoshift-logo.png" alt="Chronoshift" className="hero-logo" />
        <p className="tagline">Time is fractured. Power shifts. Who will rise?</p>
        <div className="cta-buttons">
          <Link to="/starter-decks" className="btn-primary">View Starter Decks</Link>
          <Link to="/factions" className="btn-outline">Explore Factions</Link>
        </div>
      </div>

      {/* Game Overview */}
      <section className="home-section">
        <h2>What is Chronoshift?</h2>
        <p className="home-subtagline"><em>Where time isn’t just a setting... it’s your strategy.</em></p>
        <p>
          Chronoshift is a competitive, time-shifting strategy card game where every turn can alter the flow of battle.
          Harness the power of factions tied to the ever-changing phases of time, from the eternal night of vampires
          to the searing heat of fire-worshippers. Each match unfolds with unpredictable tempo, strategic surprises,
          and a rich world full of lore-driven mechanics.
        </p>
        <p>
          Build your deck, shift the timeline, and outplay your opponent with timing, synergy, and tactical flair.
          Every second counts — especially when time refuses to behave.
        </p>
      </section>

      {/* Faction Emblem Grid */}
      <section className="home-section">
        <h2>Meet the Factions</h2>
        <div className="faction-grid">
          {[
            { name: "House Noctvaris", file: "HN-Emblem.webp" },
            { name: "The Moondrath", file: "TM-Emblem.webp" },
            { name: "Solari Ascendants", file: "SA-Emblem.webp" },
            { name: "Scorchborne", file: "SB-Emblem.webp" },
            { name: "Umbra’kin", file: "UK-Emblem.webp" },
            { name: "Noctara Sanctum", file: "NS-Emblem.webp" },
          ].map((faction) => (
            <div className="faction-card" key={faction.name}>
              <img
                src={`/assets/emblems/${faction.file}`}
                alt={`${faction.name} Emblem`}
                className="faction-emblem"
              />
              <span className="faction-name">{faction.name}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;
