import { useState } from "react";
import "./StarterDecks.css";

export default function StarterDecks() {
  const [open, setOpen] = useState(false);

  return (
    <div className="starter-page">
      <h1 className="starter-title">Starter Kits</h1>

      {/* Bonds of Night – Collapsible */}
   <div className="starter-section">
  <h2 className="starter-heading">Bonds of Night</h2>
  <button className="starter-toggle" onClick={() => setOpen(!open)}>
    {open ? "▲ Hide" : "▼ Show Contents"}
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

      <div className="starter-includes">
        <img
          src="/assets/bon-starterkit-product.webp"
          alt="Bonds of Night Starter Kit Product Preview"
          className="starter-product-image"
        />

        <h3>Included in the Starter Kit:</h3>
        <ul>
          <li>2 60-card Starter Decks (House Noctvaris and The Moondrath)</li>
          <li>Each deck includes:
            <ul>
              <li>1 Legendary Figure</li>
              <li>3 Elite Figures</li>
              <li>Commons, Spells, and Conduits (Resources)</li>
            </ul>
          <li>5 Bloodshade Tokens (House Noctvaris)</li>
          <li>6 Fangshade Tokens (The Moondrath)</li>
          </li>
          <li>Beginner’s Grimoire</li>
          <li>2 Custom D6:
            <ul>
              <li>Time Phase Die</li>
              <li>Timecharge Die</li>
            </ul>
          </li>
          <li>Downloadables (PDF rules, playmat design)</li>
        </ul>
      </div>
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
