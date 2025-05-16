import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { to: '/faction', label: 'Factions' },
    { to: '/starter-decks', label: 'Starter Decks' },
    { to: '/rules', label: 'Rules' },
    { to: '/keywords', label: 'Keywords' },
    { to: '/tracker', label: 'Tracker' }
  ];

  return (
    <header className="navbar-wrapper">
      <div className="navbar-inner">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Chronoshift Logo" className="logo-img" />
        </Link>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={location.pathname === link.to ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
