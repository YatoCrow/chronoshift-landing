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
        <h2>What is Chronoshift: Eclipse Dawn?</h2>
        <p className="home-subtagline"><em>Where time is not just a setting. It is your strategy.</em></p>
        <p>
          Chronoshift: Eclipse Dawn is a competitive strategy card game where time itself changes the battlefield. Each round can alter
          the phase of time, influencing abilities, resources, and momentum. Players choose a faction attuned to a specific
          phase like Night, Day, Full Moon, Scorch, or Dusk, and build decks that thrive under those conditions.
        </p>
        <p>
          Every card, ability, and Conduit plays into a greater flow. Whether you prefer steady control, sudden aggression,
          or clever disruption, Chronoshift: Eclipse Dawn rewards strategic planning and bold adaptation. Time will not wait, it will
          shift. The question is, will you shift with it?
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
