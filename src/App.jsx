import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Factions from "./pages/Factions";
import StarterDecks from "./pages/StarterDecks";
import Rules from "./pages/Rules";
import KeywordGlossary from "./pages/KeywordGlossary";
import Tracker from "./pages/Tracker";
import ChronologNews from "./pages/ChronologNews"; // ✅ News page
import ChronologLore from "./pages/ChronologLore"; // ✅ Lore page
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/factions" element={<Factions />} />
        <Route path="/starter-decks" element={<StarterDecks />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/keywords" element={<KeywordGlossary />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/chronolog/news" element={<ChronologNews />} />  {/* ✅ News */}
        <Route path="/chronolog/lore" element={<ChronologLore />} />  {/* ✅ Lore */}
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

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
