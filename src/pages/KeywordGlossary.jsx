// src/pages/KeywordGlossary.jsx
import { useState } from "react";
import "./KeywordGlossary.css";

const keywordData = [
  { term: "Burn", def: "Burn effects deal direct damage to units or players without entering combat. These effects often bypass abilities like Stealth and are useful for finishing weakened enemies.", tags: ["Combat"] },
  { term: "Conduits", def: "Conduits are your core resource cards. Played from your resource pile, each Conduit generates your clan’s energy each turn. Some Conduits include passive effects, while others interact with specific Time Phases.", tags: ["Resource"] },
  { term: "Conduit Shift", def: "Conduit Shift cards are special Conduits that flip during your clan’s favored Time Phase. When flipped (shifted face down), they activate a Shifted Effect that enhances gameplay. Only 3 Conduit Shifts are allowed per deck.", tags: ["Mechanic", "Resource"] },
  { term: "Deadcall", def: "Deadcall abilities trigger when a figure is summoned from your discard pile. These effects enable graveyard synergy and can be used to revive momentum in late-game scenarios.", tags: ["Trigger"] },
  { term: "Decay", def: "A unit affected by Decay receives -1/-1 at the start of its controller’s turn. This status continues each turn until the unit dies or the effect is removed. Decay effects can stack over time.", tags: ["Status"] },
  { term: "Drain", def: "When this card deals damage, you heal for half the amount (rounded down). Drain effects apply to both figure attacks and spell damage.", tags: ["Combat"] },
  { term: "Enrage", def: "Enrage triggers after a unit takes damage, granting it bonus stats or effects. It encourages aggressive trades and self-damage tactics.", tags: ["Status"] },
  { term: "Figures", def: "Figures are units that occupy the battlefield. They can attack, block, and activate abilities. Each Figure belongs to a faction and may have keywords like Shadowstep or Deadcall.", tags: ["Card Type"] },
  { term: "Fury", def: "A unit with Fury gains +1 ATK each time it survives damage. These buffs are permanent unless the unit dies or is silenced.", tags: ["Status"] },
  { term: "Heal", def: "Heal effects restore HP to a unit or player. Healing cannot exceed a unit's maximum health unless specified.", tags: ["Combat"] },
  { term: "Infiltrate", def: "Infiltrate triggers when this unit deals direct damage to the opposing player. Often paired with Stealth or evasion-based strategies.", tags: ["Trigger"] },
  { term: "Lifesteal", def: "When this unit deals damage, you restore HP equal to the amount dealt. Lifesteal works whether damage is dealt to units or players.", tags: ["Combat"] },
  { term: "On Death", def: "This effect triggers when a unit is destroyed and enters the graveyard. On Death effects resolve immediately.", tags: ["Trigger"] },
  { term: "On Play", def: "Triggers when a card (Figure or Spell) is played from your hand. These effects resolve as the card enters the battlefield.", tags: ["Trigger"] },
  { term: "On Reveal (Flip)", def: "Triggers when a unit with Shadowstep is revealed, either by attacking or being targeted by a spell or ability.", tags: ["Trigger"] },
  { term: "Pack Tactics", def: "Triggers if another allied unit has attacked this turn. It rewards swarming or coordinated assault strategies.", tags: ["Combat"] },
  { term: "Phasebind", def: "All Figures enter the battlefield channeled unless they are summoned during their clan’s favored Time Phase. This can be bypassed by abilities such as Ambush or others that override Phasebind.", tags: ["Mechanic"] },
  { term: "Phaseblend", def: "Allows this unit to act as though the current Time Phase matches its clan’s. This can unlock phase-restricted effects or bypass Phasebind.", tags: ["Status"] },
  { term: "Recursion", def: "Refers to effects that return cards from your discard pile or exile zone to hand, deck, or battlefield. Often central to long-game strategies.", tags: ["Mechanic"] },
  { term: "Resolve", def: "Triggers when two or more allied units activate abilities in the same turn. It represents synchronized momentum between allies.", tags: ["Trigger"] },
  { term: "Sacrifice", def: "You must destroy one of your own units or discard a card to activate this effect. Sacrifice is often used in dark-themed factions for power gain.", tags: ["Mechanic"] },
  { term: "Shadowstep", def: "This unit enters the battlefield hidden and cannot be blocked or targeted. It is revealed when it attacks or becomes the target of a spell or effect.", tags: ["Status"] },
  { term: "Silence", def: "Removes all passive and activated abilities from a unit. The unit retains its stats but loses keywords and effects.", tags: ["Status"] },
  { term: "Spell – Sorcery", def: "Can only be played during your main phase. Sorcery spells tend to be powerful, but slower and more deliberate.", tags: ["Subtype"] },
  { term: "Spell – Instant", def: "Can be played at any time, including your opponent’s turn. Instant spells allow tactical responses and disruption.", tags: ["Subtype"] },
  { term: "Spell – Counter", def: "Can only be played in response to another spell or Figure being played. Counter spells cancel the target spell if successful.", tags: ["Subtype"] },
  { term: "Stealth", def: "This unit cannot be targeted by spells or abilities until it attacks or is revealed. Stealth allows units to evade effects until they act.", tags: ["Status"] },
  { term: "Strike First", def: "This unit deals its combat damage before its opponent in battle. If it defeats the enemy in one strike, it avoids taking return damage.", tags: ["Combat"] },
  { term: "Summon", def: "Creates a token or additional unit and places it onto the battlefield. Summon effects often trigger other abilities.", tags: ["Mechanic"] },
  { term: "Channel", def: "To use a Conduit, turn it sideways to indicate it has been used. This action generates 1 resource matching your clan. Only Conduits that are not already channeled may be used.", tags: ["Mechanic"] },
  { term: "Recharge", def: "At the beginning of your turn during the Start Phase, all your previously channeled Conduits and units automatically return to their ready state (upright).", tags: ["Mechanic"] },
  { term: "Time Phase", def: "A rotating global phase that changes each round. The five Time Phases are Night, Full Moon, Day, Scorch, and Dusk. Each faction thrives during its favored Time Phase.", tags: ["Mechanic"] },
  { term: "Timecharge", def: "A mechanic where you spend 2 resources to roll a die and attempt to alter the Time Phase. On a high result, you may choose the new Time Phase.", tags: ["Mechanic"] },
  { term: "Unstable", def: "This unit self-destructs at the end of the turn if it attacked. Unstable units hit hard but are short-lived.", tags: ["Status"] },
  { term: "Vigilance", def: "This unit can block even while channeled, and in some cases, block multiple times in a single round. Ideal for defensive strategies.", tags: ["Combat"] },
  { term: "Wither", def: "Damage dealt by this unit reduces the target’s ATK instead of HP. This weakens powerful threats without killing them outright.", tags: ["Status"] }
];

// Group keywords alphabetically
const groupByLetter = (entries) => {
  const groups = {};
  entries.forEach(entry => {
    const letter = entry.term[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(entry);
  });
  return groups;
};

export default function KeywordGlossary() {
  const [search, setSearch] = useState("");
  const filtered = keywordData.filter(({ term, def }) =>
    term.toLowerCase().includes(search.toLowerCase()) ||
    def.toLowerCase().includes(search.toLowerCase())
  );
  const grouped = groupByLetter(filtered);

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

      {Object.keys(grouped).sort().map(letter => (
        <div key={letter} className="keyword-group">
          <h2 className="keyword-letter">{letter}</h2>
          {grouped[letter].map(({ term, def, tags }) => (
            <div key={term} className="keyword-entry">
              <div className="keyword-term-line">
                <strong className="keyword-term">{term.toUpperCase()}</strong>
                {tags && tags.map(tag => (
                  <span key={tag} className={`keyword-tag tag-${tag.toLowerCase()}`}>
                    [{tag}]
                  </span>
                ))}
              </div>
              <p className="keyword-def">{def}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
