// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/chronoshift-logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
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
