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

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} YatoCrow Games. All rights reserved.</p>
          <p><em>Chronoshift: Eclipse Dawn™</em> are trademarks of YatoCrow Games.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
