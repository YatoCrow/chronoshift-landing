import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Chronoshift: Eclipse Dawn</h1>
        <p className="hero-subtitle">
          A time-bending strategy card game where clans rise and fall with the hour.
        </p>
        <Link to="/tracker" className="button-link">Explore the Tracker</Link>
      </section>

      {/* Featured Release */}
      <section className="featured-release">
        <img src="/images/chronoshift-banner.webp" alt="Chronoshift Banner" className="feature-image" />
        <div className="featured-info">
          <h2>Coming July 2025</h2>
          <p>The first set of Chronoshift launches soon. Explore the lore, build your deck, and shift time itself.</p>
          <Link to="/factions" className="button-link">Meet the Clans</Link>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="quick-links">
        <div className="link-tile">
          <h3>Read the Lore</h3>
          <p>Uncover the mystery of the Crimson Council and the moonlit betrayal.</p>
          <Link to="/lore">Start Reading →</Link>
        </div>
        <div className="link-tile">
          <h3>Card Gallery</h3>
          <p>Browse the entire Eclipse Dawn set, including tokens and conduits.</p>
          <Link to="/cards">Browse Cards →</Link>
        </div>
        <div className="link-tile">
          <h3>View Tracker</h3>
          <p>Use the Chronoshift digital tracker during your next match.</p>
          <a href="https://chronoshift-tracker.yatocrowgames.com" target="_blank" rel="noreferrer">Launch Tracker →</a>
        </div>
      </section>

    </div>
  );
}

export default Home;
