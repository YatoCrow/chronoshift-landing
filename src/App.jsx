import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/factions" element={<h2>Factions Page</h2>} />
        <Route path="/starter-decks" element={<h2>Starter Decks Page</h2>} />
        <Route path="/rules" element={<h2>Rules Page</h2>} />
        <Route path="/keywords" element={<h2>Keyword Glossary</h2>} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
