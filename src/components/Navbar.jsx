// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/chronoshift-logo.png"; // Use your actual logo file path

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Chronoshift Logo" />
      </Link>

      <div className="navbar-links">
        <Link to="/factions">Factions</Link>
        <Link to="/starter-decks">Starter Decks</Link>
        <Link to="/rules">Rules</Link>
        <Link to="/keywords">Keywords</Link>
        <a href="https://chronoshift-tracker.yatocrowgames.com" target="_blank" rel="noreferrer">Tracker</a>
      </div>
    </div>
  );
}

export default Navbar;
