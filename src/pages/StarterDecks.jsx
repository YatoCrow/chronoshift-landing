import { useState } from "react";
import "./StarterDecks.css";

export default function StarterDecks() {
  const [open, setOpen] = useState(false);

  return (
    <div className="starter-page">
      <h1 className="starter-title">Starter Kits</h1>

      {/* Bonds of Night – Collapsible */}
      <div className="starter-section">
        <button className="starter-toggle" onClick={() => setOpen(!open)}>
          Bonds of Night {open ? "▲" : "▼"}
        </button>
        {open && (
          <div className="starter-content">
            <img
              src="/assets/bon-panel.webp"
              alt="Bonds of Night"
              className="starter-banner"
            />
            <p className="starter-text">
              Featuring House Noctvaris and The Moondrath. A tactical clash of vampiric control and feral aggression,
              where the night strengthens both blood and fang.
            </p>
            {/* Additional content like decklist preview can be added here */}
          </div>
        )}
      </div>

      {/* Rise of Light – Static */}
      <div className="starter-section">
        <h2 className="starter-heading">Rise of Light</h2>
        <p className="starter-text">
          Featuring Solari Ascendants and Scorchborne. A radiant blend of order and chaos — expect midrange synergy,
          fire-fueled aggression, and a showdown of flame and faith.
          <br /><br />
          <em>Full kit reveal coming soon.</em>
        </p>
      </div>

      {/* Whispers of Dusk – Static */}
      <div className="starter-section">
        <h2 className="starter-heading">Whispers of Dusk</h2>
        <p className="starter-text">
          Featuring Umbra’kin and Noctara Sanctum. A clash of abyss and exile — expect recursion, counterplay,
          and cunning late-game dominance forged in shadows.
          <br /><br />
          <em>Full kit reveal coming soon.</em>
        </p>
      </div>
    </div>
  );
}
