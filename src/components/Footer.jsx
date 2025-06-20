// src/components/Footer.jsx
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/factions">Factions</Link>
          <Link to="/starter-decks">Starter Decks</Link>
          <Link to="/rules">Rules</Link>
          <Link to="/keywords">Keywords</Link>
          <a href="https://chronoshift-tracker.yatocrowgames.com" target="_blank" rel="noreferrer">Tracker</a>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        {/* ✅ Add Logo Here */}
        <div className="footer-logo-wrapper">
  <a href="https://yatocrowgames.com" target="_blank" rel="noreferrer">
    <img
      src="/yatocrow-logo300.webp"
      alt="YatoCrow Games Logo"
      className="footer-logo"
    />
  </a>
</div>

        <div className="footer-bottom">
          <p>© 2025 YatoCrow Games. All rights reserved.</p>
          <p>
            <em>Chronoshift™</em> and <em>Eclipse Dawn™</em> are trademarks of YatoCrow Games.<br />
            <em>Chronoshift: Eclipse Dawn™</em> is the title of the first official release.
          </p>
          <p className="footer-contact">
            Contact us at <a href="mailto:contact@yatocrowgames.com">contact@yatocrowgames.com</a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
