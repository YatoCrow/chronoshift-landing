// src/components/DeckList.jsx
import React, { useState } from "react";
import "./DeckList.css";

function DeckList({ title, deck }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="decklist-wrapper">
      <button className="decklist-toggle" onClick={() => setExpanded(!expanded)}>
        {expanded ? `▲ Hide ${title}` : `▼ Show ${title}`}
      </button>

      {expanded && (
        <>
          {["Figures", "Spells", "Conduits", "Tokens"].map((section) =>
            deck[section] && deck[section].length > 0 ? (
              <div key={section} className="decklist-section">
                <h4 className="decklist-heading">{section}</h4>
                <ul className="decklist-items">
                  {deck[section].map((card) => (
                    <li key={card.name} className="decklist-entry">
                      <span className="card-quantity">{card.count}×</span>{" "}
                      <span className="card-name">{card.name}</span>
                      {card.subtype && (
                        <span className="card-subtype"> ({card.subtype})</span>
                      )}
                      {card.rarity && (
                        <span className={`card-rarity rarity-${card.rarity.toLowerCase()}`}>
                          {" "}
                          [{card.rarity}]
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null
          )}
        </>
      )}
    </div>
  );
}

export default DeckList;
