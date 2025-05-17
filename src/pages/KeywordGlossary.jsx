// src/pages/KeywordGlossary.jsx
import { useState } from "react";
import "./KeywordGlossary.css";

const keywordData = [
  {
    term: "Burn",
    def: "Deals direct damage to a target, bypassing normal combat. Often used in spells or triggered effects that can damage figures or players directly.",
    tags: ["Combat"]
  },
  {
    term: "Conduits",
    def: "Also called resource cards. Conduits are played from your resource pile and generate your clan’s resource each turn. Some have passive bonuses or interact with Time Phases.",
    tags: ["Resource"]
  },
  {
    term: "Conduit Shift",
    def: "A special type of Conduit that may be shifted (flipped face down) during your faction’s favored Time Phase. Once shifted, it activates a Shifted Effect that lasts until removed. Conduit Shifts are still counted as resources.",
    tags: ["Mechanic", "Resource"]
  },
  {
    term: "Deadcall",
    def: "Triggers when a figure is summoned from your discard pile. Deadcall abilities activate as the unit enters play, allowing powerful recursion-based plays.",
    tags: ["Trigger"]
  },
  {
    term: "Decay",
    def: "Applies -1/-1 to a unit at the start of its controller’s turn. This effect continues each turn until the unit dies or the status is removed.",
    tags: ["Status"]
  },
  {
    term: "Drain",
    def: "When this card deals damage, you heal for half the amount (rounded down). Applies to both figures and spell effects.",
    tags: ["Combat"]
  },
  {
    term: "Enrage",
    def: "This unit gains stats or abilities after taking damage. Some Enrage effects are temporary, others permanent.",
    tags: ["Status"]
  },
  {
    term: "Figures",
    def: "Also called units. These are your characters on the battlefield. They can attack, defend, use abilities, and be affected by combat and status effects.",
    tags: ["Resource"]
  },
  {
    term: "Fury",
    def: "This unit gains +1 ATK each time it survives damage, whether in combat or from effects. Fury stacks with each trigger.",
    tags: ["Status"]
  },
  {
    term: "Heal",
    def: "Restores HP to a unit or player. Cannot raise health beyond the unit’s maximum unless specified.",
    tags: ["Combat"]
  },
  {
    term: "Infiltrate",
    def: "Triggers if this unit deals direct damage to the opponent. Often rewards aggressive stealth tactics.",
    tags: ["Trigger"]
  },
  {
    term: "Lifesteal",
    def: "Whenever this unit deals damage, you heal for that exact amount. Works on both figures and players.",
    tags: ["Combat"]
  },
  {
    term: "On Death",
    def: "Triggers when the unit is destroyed and moves to the graveyard. On Death effects resolve immediately.",
    tags: ["Trigger"]
  },
  {
    term: "On Play",
    def: "Triggers when a card (figure or spell) is played from your hand. On Play effects resolve before entering the battlefield.",
    tags: ["Trigger"]
  },
  {
    term: "On Reveal (Flip)",
    def: "Triggers when a hidden unit with Shadowstep is revealed, either by attacking or being targeted. These effects reflect ambush tactics.",
    tags: ["Trigger"]
  },
  {
    term: "Pack Tactics",
    def: "Triggers when another ally has attacked during the same turn. Used to reward coordination and swarm playstyles.",
    tags: ["Combat"]
  },
  {
    term: "Phasebind",
    def: "All Figures enter the battlefield tapped unless they are summoned during their clan’s favored Time Phase. This restriction can be bypassed by Ambush or similar effects.",
    tags: ["Mechanic"]
  },
  {
    term: "Phaseblend",
    def: "Allows this unit to act as though it is in its favored Time Phase, even when it is not. Often overrides Phasebind and conditional triggers.",
    tags: ["Status"]
  },
  {
    term: "Recursion",
    def: "Allows you to return cards from your discard pile or exile zone to your hand, deck, or battlefield. Central to long-game control decks.",
    tags: ["Mechanic"]
  },
  {
    term: "Resolve",
    def: "Triggers when two or more allies activate abilities during the same turn. Promotes synergy and tactical timing.",
    tags: ["Trigger"]
  },
  {
    term: "Sacrifice",
    def: "You must destroy a unit or discard a card as a cost to activate a card or ability. Often appears on powerful spells or dark-themed factions.",
    tags: ["Mechanic"]
  },
  {
    term: "Shadowstep",
    def: "This unit enters the battlefield hidden and cannot be targeted or blocked. It is revealed when it attacks or becomes a target.",
    tags: ["Status"]
  },
  {
    term: "Silence",
    def: "Removes all abilities from a unit (both passive and activated). A silenced unit retains its stats, but loses all traits and effects.",
    tags: ["Status"]
  },
  {
    term: "Spell – Sorcery",
    def: "Can only be played during your main phase. Sorcery spells are typically more powerful but slower to cast.",
    tags: ["Subtype"]
  },
  {
    term: "Spell – Instant",
    def: "Can be played at any time, even during your opponent’s turn. These spells are highly reactive and flexible.",
    tags: ["Subtype"]
  },
  {
    term: "Spell – Counter",
    def: "Can only be played in response to a spell or figure being played. Counters usually prevent the card from resolving.",
    tags: ["Subtype"]
  },
  {
    term: "Stealth",
    def: "This unit cannot be targeted by spells or abilities until it attacks or is revealed. A persistent concealment status.",
    tags: ["Status"]
  },
  {
    term: "Strike First",
    def: "This unit deals its combat damage before opposing units during battle. If it kills the enemy, it avoids taking return damage.",
    tags: ["Combat"]
  },
  {
    term: "Summon",
    def: "Creates a token or additional unit. Summoned units enter play immediately and may trigger On Play or Deadcall effects.",
    tags: ["Mechanic"]
  },
  {
    term: "Tap",
    def: "A tapped unit cannot act again until untapped. Units usually tap to attack or activate abilities. Figures enter tapped unless otherwise stated.",
    tags: ["Mechanic"]
  },
  {
    term: "Time Phase",
    def: "A global condition that affects all players. It changes each round and determines which clans gain advantages or trigger effects. Phases include Night, Full Moon, Day, Scorch, and Dusk.",
    tags: ["Mechanic"]
  },
  {
    term: "Timecharge",
    def: "A strategic mechanic that lets you spend 2 resources to roll a die in an attempt to alter the Time Phase. Used to control battlefield tempo.",
    tags: ["Mechanic"]
  },
  {
    term: "Unstable",
    def: "This unit self-destructs at the end of the turn if it attacked. Encourages reckless or aggressive strategies.",
    tags: ["Status"]
  },
  {
    term: "Vigilance",
    def: "This unit can block even while tapped, or block multiple times per turn if allowed. Excellent for defenders.",
    tags: ["Combat"]
  },
  {
    term: "Wither",
    def: "Damage dealt by this unit reduces the target’s ATK instead of HP. Great for disabling high-damage threats.",
    tags: ["Status"]
  }
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
              {terms.map(({ term, def, tags }) => (
  <li key={term}>
    <div className="keyword-entry">
      <div className="keyword-title">
        <strong>{term}</strong>
        {tags && tags.map(tag => (
          <span key={tag} className={`keyword-tag tag-${tag.toLowerCase()}`}>
            [{tag}]
          </span>
        ))}
      </div>
      <p>{def}</p>
    </div>
  </li>
))}
            </ul>
          </div>
        )
      )}
    </div>
  );
}
