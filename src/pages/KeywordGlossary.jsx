// src/pages/KeywordGlossary.jsx
import { useState } from "react";
import "./KeywordGlossary.css";

const keywordData = [
  { term: "Burn", def: "Deals direct damage, often to both units and players." },
  { term: "Conduits", def: "Also called resources. These are used to generate the energy required to play other cards. Played from your resource pile." },
  { term: "Deadcall", def: "Triggers when this figure is summoned from your discard pile." },
  { term: "Decay", def: "Applies -1/-1 to a unit each turn until it dies." },
  { term: "Drain", def: "When this card deals damage, you heal half that amount (rounded down)." },
  { term: "Enrage", def: "Gains bonus stats or effects after taking damage." },
  { term: "Figures", def: "Also called units. These are characters you place onto the battlefield to fight, defend, or activate effects." },
  { term: "Fury", def: "This unit gains +1 ATK each time it survives damage." },
  { term: "Heal", def: "Restores HP to a unit or player." },
  { term: "Infiltrate", def: "Triggers a bonus if this unit deals damage directly to the opponent." },
  { term: "Lifesteal", def: "When this unit deals damage, you restore that much HP." },
  { term: "On Death", def: "Triggers when this unit is destroyed." },
  { term: "On Play", def: "Triggers when the unit or spell is played." },
  { term: "On Reveal (Flip)", def: "Triggers when a unit with Shadowstep is revealed by attacking or being targeted." },
  { term: "Pack Tactics", def: "Gains a bonus if another allied unit has attacked this turn." },
  { term: "Phasebind", def: "This ability or effect only activates if the current Time Phase matches the one specified." },
  { term: "Phaseblend", def: "Acts as though it is in its favored Time Phase regardless of the current phase." },
  { term: "Recursion", def: "Allows you to retrieve cards from your Graveyard or Exile Zone." },
  { term: "Resolve", def: "Triggers when two or more allies activate an ability during the same turn." },
  { term: "Sacrifice", def: "You must destroy a unit or discard a card as a cost." },
  { term: "Shadowstep", def: "This unit enters the battlefield hidden. It is revealed when attacking or being targeted." },
  { term: "Silence", def: "Removes all abilities from a unit (passive and activated)." },
  { term: "Spell – Counter", def: "A spell subtype. Counter cards are only playable in response to another spell or figure being played." },
  { term: "Spell – Instant", def: "A spell subtype. Instant cards can be played at any time, even during your opponent’s turn." },
  { term: "Spell – Sorcery", def: "A spell subtype. Sorcery cards can only be played during your main phase." },
  { term: "Stealth", def: "This unit cannot be targeted until it attacks or is revealed." },
  { term: "Strike First", def: "This unit deals combat damage before opposing units." },
  { term: "Summon", def: "Create a token or additional unit." },
  { term: "Tap", def: "A tapped unit cannot act again until untapped." },
  { term: "Time Phase", def: "A global state that shifts each round and affects abilities, Conduit effects, and faction strategies. There are five phases: Night, Full Moon, Day, Scorch, and Dusk." },
  { term: "Timecharge", def: "An advanced mechanic. Spend 2 resources to roll for a chance to change the Time Phase." },
  { term: "Unstable", def: "This unit self-destructs at the end of the turn if it attacked." },
  { term: "Vigilance", def: "This unit can block even while tapped, or block more than once per turn." },
  { term: "Wither", def: "Damage dealt by this unit reduces enemy attack instead of HP." }
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
