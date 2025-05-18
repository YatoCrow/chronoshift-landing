// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/chronoshift-logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
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
        <Link to="/factions" onClick={() => setOpen(false)}>Factions</Link>
        <Link to="/starter-decks" onClick={() => setOpen(false)}>Starter Decks</Link>
        <Link to="/rules" onClick={() => setOpen(false)}>Rules</Link>
        <Link to="/keywords" onClick={() => setOpen(false)}>Keywords</Link>
        <a href="https://chronoshift-tracker.yatocrowgames.com" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Tracker</a>
      </div>
    </nav>
  );
}

export default Navbar;
