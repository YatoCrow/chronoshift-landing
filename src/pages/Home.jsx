// src/pages/Home.jsx
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <img
          src="/assets/chronoshift-logo.png"
          alt="Chronoshift"
          className="hero-logo"
        />
        <p className="tagline">Time is fractured. Power shifts. Who will rise?</p>

        <div className="cta-buttons">
          <a href="/starter-decks" className="btn-primary">View Starter Decks</a>
          <a href="/factions" className="btn-outline">Explore Factions</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
