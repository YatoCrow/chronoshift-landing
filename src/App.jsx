import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import Factions from "./pages/Factions";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/factions" element={<Factions />} />
        <Route path="/starter-decks" element={<h2>Starter Decks Page</h2>} />
        <Route path="/rules" element={<h2>Rules Page</h2>} />
        <Route path="/keywords" element={<h2>Keyword Glossary</h2>} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Catch-all 404 route */}
        <Route
          path="*"
          element={
            <div style={{ padding: "4rem 1rem", textAlign: "center", color: "#e8dbc3", fontFamily: "Cinzel, serif" }}>
              <h1 style={{ fontSize: "2rem", color: "#f5d8a0" }}>404 – Page Not Found</h1>
              <p>The page you’re looking for doesn’t exist.</p>
            </div>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
