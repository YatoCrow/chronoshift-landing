import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: "1rem", background: "#111", color: "#fff" }}>
          <Link to="/" style={{ margin: "0 1rem", color: "#fff" }}>Home</Link>
          <Link to="/factions" style={{ margin: "0 1rem", color: "#fff" }}>Factions</Link>
          <Link to="/starter-decks" style={{ margin: "0 1rem", color: "#fff" }}>Starter Decks</Link>
          <Link to="/rules" style={{ margin: "0 1rem", color: "#fff" }}>Rules</Link>
          <Link to="/keywords" style={{ margin: "0 1rem", color: "#fff" }}>Keywords</Link>
          <a href="https://chronoshift-tracker.vercel.app" target="_blank" style={{ margin: "0 1rem", color: "#fff" }}>Tracker</a>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Welcome to Chronoshift</h2>} />
          <Route path="/factions" element={<h2>Factions Page</h2>} />
          <Route path="/starter-decks" element={<h2>Starter Decks Page</h2>} />
          <Route path="/rules" element={<h2>Rules Page</h2>} />
          <Route path="/keywords" element={<h2>Keyword Glossary</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;