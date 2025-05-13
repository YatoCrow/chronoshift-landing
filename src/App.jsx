import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div
      style={{
        maxWidth: "640px",
        width: "100%",
        margin: "0 auto",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      {/* Nav Bar */}
      <nav
        style={{
          background: "rgba(10, 10, 10, 0.85)",
          padding: "1rem",
          borderRadius: "12px",
          boxShadow: "0 0 12px #00000066",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/factions" style={linkStyle}>Factions</Link>
        <Link to="/starter-decks" style={linkStyle}>Starter Decks</Link>
        <Link to="/rules" style={linkStyle}>Rules</Link>
        <Link to="/keywords" style={linkStyle}>Keywords</Link>
        <a
          href="https://chronoshift-tracker.yatocrowgames.com"
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
        >
          Tracker
        </a>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/factions" element={<h2>Factions Page</h2>} />
        <Route path="/starter-decks" element={<h2>Starter Decks Page</h2>} />
        <Route path="/rules" element={<h2>Rules Page</h2>} />
        <Route path="/keywords" element={<h2>Keyword Glossary</h2>} />
      </Routes>
    </div>
  );
}

const linkStyle = {
  color: "#f5f2eb",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "color 0.2s",
};

export default App;
