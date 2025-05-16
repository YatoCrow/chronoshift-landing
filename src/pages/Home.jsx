import './Home.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-wrapper">
      <section className="hero-section">
        <img src={logo} alt="Chronoshift Eclipse Dawn" className="hero-logo" />
        <h2 className="tagline">Command time. Bend fate. Rule your phase.</h2>

        <div className="cta-buttons">
          <Link to="/faction" className="cta-btn">Explore Factions</Link>
          <Link to="/tracker" className="cta-btn">Open Tracker</Link>
        </div>
      </section>

      <section className="description">
        <p>
          Chronoshift is a time-bending strategy card game where factions rise and fall with the hour.
          Battle for dominance as time shifts unpredictably. Align your deck with the phase. Control fate.
        </p>
      </section>
    </div>
  );
}