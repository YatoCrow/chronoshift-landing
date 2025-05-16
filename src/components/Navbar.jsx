import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar-wrapper">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          Chronoshift
        </Link>
        <nav className="navbar-links">
          <Link to="/factions" className={location.pathname === "/factions" ? "active" : ""}>Factions</Link>
          <Link to="/starter-decks" className={location.pathname === "/starter-decks" ? "active" : ""}>Starter Decks</Link>
          <Link to="/rules" className={location.pathname === "/rules" ? "active" : ""}>Rules</Link>
          <Link to="/keywords" className={location.pathname === "/keywords" ? "active" : ""}>Keywords</Link>
          <a href="https://chronoshift-tracker.yatocrowgames.com" target="_blank" rel="noreferrer">
            Tracker
          </a>
        </nav>
      </div>
    </header>
  );
}
