import { useState } from "react";
import "./StarterDecks.css";

export default function StarterDecks() {
  const [open, setOpen] = useState({
    bon: false,
    rol: false,
    wod: false,
  });

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="starter-page">
      <h1 className="starter-title">Starter Kits</h1>

      {/* Bonds of Night */}
      <div className="starter-section">
        <button className="starter-toggle" onClick={() => toggle("bon")}>
          Bonds of Night {open.bon ? "▲" : "▼"}
        </button>
        {open.bon && (
          <div className="starter-content">
            <img
              src="/assets/bon-panel.webp"
              alt="Bonds of Night"
              className="starter-banner"
            />
            <p className="starter-text">
              Featuring House Noctvaris and The Moondrath. Darkness unites where blood and fang meet.
            </p>
            {/* More content will go here */}
          </div>
        )}
      </div>

      {/* Rise of Light */}
      <div className="starter-section">
        <button className="starter-toggle" onClick={() => toggle("rol")}>
          Rise of Light {open.rol ? "▲" : "▼"}
        </button>
        {open.rol && (
          <div className="starter-content">
            <p className="starter-text">
              Featuring Solari Ascendants and Scorchborne. Light rises where flame meets faith.
            </p>
            {/* Placeholder for banner + content */}
          </div>
        )}
      </div>

      {/* Whispers of Dusk */}
      <div className="starter-section">
        <button className="starter-toggle" onClick={() => toggle("wod")}>
          Whispers of Dusk {open.wod ? "▲" : "▼"}
        </button>
        {open.wod && (
          <div className="starter-content">
            <p className="starter-text">
              Featuring Umbra’kin and Noctara Sanctum. Secrets stir where dusk forgets the war.
            </p>
            {/* Placeholder for banner + content */}
          </div>
        )}
      </div>
    </div>
  );
}
