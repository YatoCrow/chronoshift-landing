// src/components/DeckList.jsx
import React from "react";
import "./DeckList.css"; // We'll style this next

function DeckList({ title, deck }) {
  return (
    <div className="decklist-wrapper">
      <h3 className="decklist-title">{title}</h3>

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
    </div>
  );
}

export default DeckList;
