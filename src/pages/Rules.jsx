import CollapsibleRuleSection from "../components/CollapsibleRuleSection";
import "./Rules.css";

export default function Rules() {
  return (
    <div className="rules-page">
      <h1 className="rules-title">Chronoshift: Official Rules</h1>

      <CollapsibleRuleSection title="Game Overview">
        <p><strong>Chronoshift: Eclipse Dawn</strong> is a strategic, time-shifting fantasy card game. Players command powerful factions, each aligned with a unique phase of time: Night, Full Moon, Day, Scorch, or Dusk, and seek to reduce their opponent’s HP from <strong>30 to 0</strong>.</p>
        <p>Each faction thrives during its preferred Time Phase, using unique cards, resource strategies, and abilities that become stronger when the timeline is in their favor. Gameplay evolves round by round as the Time Phase changes unpredictably.</p>
        <p>Master timing, manage your resources wisely, and outplay your opponent by building a synergistic deck and adapting to the ever-shifting battlefield.</p>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Core Concepts">
        <ul>
          <li><strong>Time Phase System:</strong> A central mechanic where time changes each round based on a die roll. The current phase impacts abilities, effects, and resource generation.</li>
          <li><strong>Resource System:</strong> Players use Conduits to gain resources. Some Conduits shift during specific Time Phases to grant bonuses.</li>
          <li><strong>Faction Alignment:</strong> All cards in your deck, including Figures, Spells, and Conduits, must match your chosen faction.</li>
          <li><strong>Victory Condition:</strong> Bring your opponent’s HP to 0 through combat, spells, or card effects.</li>
        </ul>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Resource System">
        <p>Resources in Chronoshift come from <strong>Conduits</strong> which are special cards placed from your separate <strong>Resource Pile</strong>. These do not come from your draw deck and are face-up for strategic play.</p>
        <ul>
          <li><strong>Play 1 Conduit per turn</strong> during your Resource Phase.</li>
          <li><strong>Channel:</strong> Activating a Conduit to generate 1 resource. The Conduit is rotated sideways to show it has been used this turn.</li>
          <li><strong>Recharge:</strong> At the start of your turn, all previously used Conduits are restored to their upright position, making them usable again.</li>
          <li>Gain extra resources if the current Time Phase matches your faction or if you control the battlefield (more units than your opponent).</li>
        </ul>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Conduit Mechanics (Advanced)">
        <p><strong>Conduits</strong> are not just fuel; they are attuned to time. Some advanced Conduits, called <strong>Conduit Shift cards</strong>, can flip when time favors your faction, granting bonus effects that trigger when conditions are met.</p>

        <h3>Conduit Types</h3>
        <ul>
          <li><strong>Basic Conduits:</strong> Played from your Resource Pile. Generate 1 resource when channeled.</li>
          <li><strong>Conduit Shift Cards:</strong> Flip when the Time Phase matches your faction. Their <strong>Shifted Effect</strong> activates if its trigger is fulfilled.</li>
        </ul>

        <h3>Conduit Shift Rules</h3>
        <ul>
          <li>Each deck may include <strong>up to 3</strong> Conduit Shift cards.</li>
          <li>They flip during your <strong>Start Phase</strong> if the Time Phase matches your faction.</li>
          <li>Once flipped, they remain in that state until exiled or replaced.</li>
          <li>Their effects only activate under specific conditions.</li>
        </ul>

        <h3>Example</h3>
        <p><strong>Moonfang Grove (Moondrath)</strong> — Shifted Effect: “When a <strong>Fangshade token</strong> is summoned, it gains <strong>+1/+0</strong> and <strong>Stealth</strong> this turn.”</p>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Time Phase Roll">
  <p>
    At the beginning of each round (the first player's turn), roll a six-sided die to determine the current Time Phase:
  </p>

  <div className="phase-roll-grid">
    {[
      { number: 1, name: "Night", file: "night.webp" },
      { number: 2, name: "Full Moon", file: "fullmoon.webp" },
      { number: 3, name: "Day", file: "day.webp" },
      { number: 4, name: "Scorch", file: "scorch.webp" },
      { number: 5, name: "Dusk", file: "dusk.webp" },
      { number: 6, name: "Retain", file: "retain.webp" }, // Optional icon
    ].map((phase) => (
      <div className="phase-roll-item" key={phase.number}>
        <img
          src={`/assets/timephases/${phase.file}`}
          alt={`${phase.name} Emblem`}
          className="phase-roll-icon"
        />
        <p>
          <strong>{phase.number}</strong> → {phase.name}
        </p>
      </div>
    ))}
  </div>

  <p>
    The current Time Phase affects card abilities, resource gain, and faction advantages. Plan your turns around the shifting timeline.
  </p>
</CollapsibleRuleSection>

      <CollapsibleRuleSection title="Timecharge Mechanic">
  <p>
    <strong>Timecharge</strong> is a high-risk, high-reward mechanic that allows a player to attempt to manipulate the current Time Phase during their turn.
  </p>

  <div className="timecharge-grid">
    {[
      {
        roll: "1–2",
        label: "Fail: Time Resists",
        file: "fail.webp",
        desc: "The timeline resists your attempt. Time remains unchanged, but resources are still spent.",
      },
      {
        roll: "3–5",
        label: "Partial Shift: Chaos Stirs",
        file: "random.webp",
        desc: "Time shifts, but not by your will. A random Time Phase is chosen instead.",
      },
      {
        roll: "6",
        label: "Success: Choose the Phase",
        file: "success.webp",
        desc: "Your control is perfect. You choose the new Time Phase.",
      },
    ].map((result) => (
      <div className="timecharge-item" key={result.roll}>
        <img
          src={`/assets/timecharge/${result.file}`}
          alt={`${result.label} Icon`}
          className="timecharge-icon"
        />
        <p><strong>{result.roll}</strong> → {result.label}</p>
        <p className="timecharge-desc">{result.desc}</p>
      </div>
    ))}
  </div>

  <ul>
    <li><strong>Cost:</strong> Spend 2 resources to activate. Each additional use in the same game increases the cost by +1 (max 5).</li>
    <li><strong>Timing:</strong> May only be used once per turn, after the Start Phase and before the Draw Phase.</li>
  </ul>
</CollapsibleRuleSection>

      <CollapsibleRuleSection title="Turn Structure">
        <ol>
          <li><strong>Start Phase:</strong> Recharge all Conduits and Figures. If you are the first player, roll to determine the Time Phase.</li>
          <li><strong>Timecharge Window:</strong> You may attempt to Timecharge (once per turn).</li>
          <li><strong>Draw Phase:</strong> Draw 1 card from your draw pile.</li>
          <li><strong>Resource Phase:</strong> Play 1 Conduit from your Resource Pile, then gain:
            <ul>
              <li>+1 resource if the Time Phase matches your faction</li>
              <li>+1 resource if you control the battlefield (more units than your opponent)</li>
            </ul>
          </li>
          <li><strong>Main Phase:</strong> Play Figures, cast Spells, and activate abilities. You may attack if your Figures are ready.</li>
          <li><strong>Combat Phase:</strong> Declare attackers and blockers, resolve combat damage, and trigger any related effects.</li>
          <li><strong>End Phase:</strong> Finalize end-of-turn effects and pass the turn to your opponent.</li>
        </ol>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Card Types & Spell Subtypes">
        <ul>
          <li><strong>Figures:</strong> Units placed on the battlefield. Each has ATK/HP stats and may attack, block, or use abilities.</li>
          <li><strong>Spells:</strong> One-time use effects. Three subtypes exist:
            <ul>
              <li><strong>Spell – Rite:</strong> Can only be played during your Main Phase.</li>
              <li><strong>Spell – Burst:</strong> Can be played at any time, including during your opponent’s turn or combat.</li>
              <li><strong>Spell – Dispel:</strong> Counter a Spell or Figure as it is played. Used in response.</li>
            </ul>
          </li>
          <li><strong>Conduits:</strong> Resource cards that generate energy. Some are Conduit Shift cards with special flipped effects.</li>
          <li><strong>Tokens:</strong> Summoned units created by card effects. Tokens are not part of your main deck and are drawn from a separate Token Pile.</li>
        </ul>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Key Mechanics">
        <ul>
          <li><strong>Phasebind:</strong> Figures enter the battlefield in a <strong>Phasebound</strong> state unless summoned during your faction’s favored Time Phase. A Phasebound unit is rotated sideways and cannot attack or activate abilities until it is recharged on your next turn.</li>
          <li><strong>Timecharge:</strong> Optional mechanic to influence the Time Phase. Requires resources and a die roll.</li>
          <li><strong>Conduit Shift:</strong> Advanced Conduits that flip during your Time Phase and activate conditional effects.</li>
          <li><strong>Channel:</strong> Activating a Conduit to generate 1 resource. The Conduit is rotated sideways to show it has been used this turn.</li>
          <li><strong>Recharge:</strong> At the start of your turn, all previously used Conduits and Figures are restored to their upright position, making them usable again.</li>
          <li><strong>Reveal (Flip):</strong> Some Figures remain hidden until they attack or are targeted. Trigger “On Reveal” effects when they flip.</li>
          <li><strong>LIFO Stack:</strong> Effects resolve in reverse order. Last effect in is the first to resolve. Only Bursts and Dispels may be played in response.</li>
        </ul>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Game Zones">
        <ul>
          <li><strong>Draw Pile:</strong> Your main deck of cards (minimum 60 in constructed).</li>
          <li><strong>Hand:</strong> Cards in your possession, hidden from your opponent.</li>
          <li><strong>Resource Pile:</strong> A separate, face-up pile of Conduits. You may play 1 per turn from here.</li>
          <li><strong>Battlefield:</strong> The active zone where Figures and Tokens are summoned and engage in combat.</li>
          <li><strong>Graveyard:</strong> Discarded or destroyed cards. Some mechanics interact with this zone.</li>
          <li><strong>Exile Zone:</strong> Cards permanently removed from the game.</li>
          <li><strong>Token Pile:</strong> A separate pool for summoned token units (e.g., Fangshade, Solar Militia). Not drawn into your hand or deck.</li>
        </ul>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Deck Construction">
        <ul>
          <li><strong>Starter Decks:</strong> Pre-built 60-card decks containing 1 Legendary, 3 Elite cards, and a mix of Commons and Spells. Also includes tokens.</li>
          <li><strong>Constructed Format:</strong> Build your own deck of 60 or more cards. All cards must belong to one faction.</li>
          <li><strong>Card Limits:</strong>
            <ul>
              <li>1 copy of any <strong>Legendary</strong> card</li>
              <li>2 copies of any <strong>Elite</strong> card</li>
              <li>3 copies of any <strong>Common</strong> or non-resource card</li>
              <li>Up to 3 <strong>Conduit Shift</strong> cards</li>
            </ul>
          </li>
        </ul>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Advanced Play">
        <ul>
          <li><strong>Keyword Glossary:</strong> Visit the <a href="/keywords">Keyword Glossary</a> for detailed definitions of all combat and status effects.</li>
          <li><strong>Stack Resolution:</strong> All effects follow the Last-In-First-Out (LIFO) rule. The most recent effect resolves first.</li>
          <li><strong>Multiplayer:</strong> Support for multiplayer formats is planned in future expansions.</li>
        </ul>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Card Anatomy">
        <p>Understanding card structure is key to mastering Chronoshift. Refer to the diagram below to learn how to read cost, stats, abilities, and type at a glance.</p>
        <img
          src="/assets/card-anatomy.webp"
          alt="Card Anatomy Diagram"
          className="card-anatomy-image"
        />
      </CollapsibleRuleSection>

      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑ Back to Top
      </button>
    </div>
  );
}
