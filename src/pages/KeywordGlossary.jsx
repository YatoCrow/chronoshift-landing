// src/pages/KeywordGlossary.jsx
import { useState } from "react";
import "./KeywordGlossary.css";

const keywordData = [
  { term: "Burn", def: "Deals direct damage, often to both units and players." },
  { term: "Deadcall", def: "Triggers when this figure is summoned from your discard pile." },
  { term: "Decay", def: "Applies -1/-1 to a unit each turn until it dies." },
  { term: "Drain", def: "When this card deals damage, you heal half that amount (rounded down)." },
  { term: "Enrage", def: "Gains bonus stats or effects after taking damage." },
  { term: "Fury", def: "This unit gains +1 ATK each time it survives damage." },
  { term: "Heal", def: "Restores HP to a unit or player." },
  { term: "Infiltrate", def: "Triggers a bonus if this unit deals damage directly to the opponent." },
  { term: "Lifesteal", def: "When this unit deals damage, you restore that much HP." },
  { term: "On Death", def: "Triggers when this unit is destroyed." },
  { term: "On Play", def: "Triggers when the unit or spell is played." },
  { term: "On Reveal (Flip)", def: "Triggers when a unit with Shadowstep is revealed by attacking or being targeted." },
  { term: "Pack Tactics", def: "Gains a bonus if another allied unit has attacked this turn." },
  { term: "Phaseblend", def: "Acts as though it is in its favored Time Phase regardless of the current phase." },
  { term: "Recursion", def: "Allows you to retrieve cards from your Graveyard or Exile Zone." },
  { term: "Resolve", def: "Triggers when two or more allies activate an ability during the same turn." },
  { term: "Sacrifice", def: "You must destroy a unit or discard a card as a cost." },
  { term: "Shadowstep", def: "This unit enters the battlefield hidden. It is revealed when attacking or being targeted." },
  { term: "Silence", def: "Removes all abilities from a unit (passive and activated)." },
  { term: "Stealth", def: "This unit cannot be targeted until it attacks or is revealed." },
  { term: "Strike First", def: "This unit deals combat damage before opposing units." },
  { term: "Summon", def: "Create a token or additional unit." },
  { term: "Tap", def: "A tapped unit cannot act again until untapped." },
  { term: "Unstable", def: "This unit self-destructs at the end of the turn if it attacked." },
  { term: "Vigilance", def: "This unit can block even while tapped, or block more than once per turn." },
  { term: "Wither", def: "Damage dealt by this unit reduces enemy attack instead of HP." },
  { term: "Figures", def: "Also called units. These are characters you play to the battlefield to fight for you." },
  { term: "Conduits", def: "Also called resources. These are used to generate the energy required to play other cards." },
  { term: "Spell – Sorcery", def: "Can only be played during your main phase." },
  { term: "Spell – Instant", def: "Can be played at any time." },
  { term: "Spell – Counter", def: "Can only be played in response to a spell or figure being played." },
  { term: "Time Phase", def: "The current global condition that affects all players. Changes randomly each round." },
  { term: "Timecharge", def: "A mechanic that lets you attempt to alter the Time Phase using resources and a die roll." },
  { term: "Phasebind", def: "An effect that only activates if the Time Phase matches the required condition." }
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function KeywordGlossary() {
  const [search, setSearch] = useState("");

  const filtered = keywordData.filter(({ term, def }) =>
    term.toLowerCase().includes(search.toLowerCase()) ||
    def.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = alphabet.map(letter => {
    const terms = filtered.filter(k => k.term[0].toUpperCase() === letter);
    return { letter, terms };
  });

  return (
    <div className="keywords-page">
      <h1 className="keywords-title">Keyword Glossary</h1>
      <input
        type="text"
        placeholder="Search keywords..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="keywords-search"
      />

      {grouped.map(({ letter, terms }) =>
        terms.length > 0 && (
          <div key={letter} className="keyword-group">
            <h2 className="keyword-letter">{letter}</h2>
            <ul>
              {terms.map(({ term, def }) => (
                <li key={term}>
                  <strong>{term}</strong>: {def}
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
}
