// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/chronoshift-logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [chronologOpen, setChronologOpen] = useState(false);
  const location = useLocation();

  const handleClick = () => setOpen(false);

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo" onClick={handleClick}>
          <img src={logo} alt="Chronoshift Logo" />
        </Link>
      </div>

      <button
        className={`burger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className="burger-bar" />
        <span className="burger-bar" />
        <span className="burger-bar" />
      </button>

      <div className={`navbar-links ${open ? "open" : ""}`}>
        <div
          className="navbar-dropdown"
          onMouseEnter={() => setChronologOpen(true)}
          onMouseLeave={() => setChronologOpen(false)}
        >
          <span className="navbar-link">Chronolog ▾</span>
          {chronologOpen && (
            <div className="dropdown-menu">
              <Link to="/chronolog/news" onClick={handleClick}>News & Updates</Link>
              <Link to="/chronolog/lore" onClick={handleClick}>Lore</Link>
            </div>
          )}
        </div>

        <Link to="/factions" onClick={handleClick}>Factions</Link>
        <Link to="/starter-decks" onClick={handleClick}>Starter Decks</Link>
        <Link to="/rules" onClick={handleClick}>Rules</Link>
        <Link to="/keywords" onClick={handleClick}>Keywords</Link>
        <Link to="/tracker" onClick={handleClick}>Tracker</Link>
      </div>
    </nav>
  );
}

export default Navbar;
