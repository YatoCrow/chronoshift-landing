// src/pages/Rules.jsx
import "./Rules.css";

export default function Rules() {
  return (
    <div className="rules-page">
      <h1 className="rules-title">Chronoshift: Official Rules</h1>

      {/* Intro */}
      <section className="rules-section">
        <h2>Overview</h2>
        <p>
          Chronoshift is a strategic card game set in a fractured timeline where factions battle for control as Time Phases shift. 
          Players summon figures, cast spells, and manage resources to outmaneuver their opponent. The player who reduces the opponent’s HP to 0 wins.
        </p>
      </section>

      {/* Core Concepts */}
      <section className="rules-section">
        <h2>Core Concepts</h2>
        <ul>
          <li><strong>Time Phase System:</strong> A global time state that changes every round and affects gameplay. There are 5 phases: Night, Full Moon, Day, Scorch, and Dusk.</li>
          <li><strong>Resource System:</strong> Each player uses Conduits to generate clan-specific energy. Some Conduits can shift to unlock special effects.</li>
          <li><strong>Win Condition:</strong> Reduce your opponent’s HP from 30 to 0.</li>
        </ul>
      </section>

      {/* Turn Structure */}
      <section className="rules-section">
        <h2>Turn Structure</h2>
        <ol>
          <li><strong>Start Phase:</strong> Roll the Time Phase die (if it’s a new round), then untap cards and draw.</li>
          <li><strong>Resource Phase:</strong> Play one Conduit from your resource pile. Gain resources based on Time Phase and battlefield control.</li>
          <li><strong>Main Phase:</strong> Summon figures, cast spells, activate abilities.</li>
          <li><strong>Combat Phase:</strong> Declare attacks, resolve blocks, apply damage.</li>
          <li><strong>End Phase:</strong> Resolve end-of-turn effects. Pass to your opponent.</li>
        </ol>
      </section>

      {/* Card Types */}
      <section className="rules-section">
        <h2>Card Types</h2>
        <ul>
          <li><strong>Figures:</strong> Units that occupy the battlefield. They can attack, defend, and have stats like ATK and HP.</li>
          <li><strong>Spells:</strong> Can be Sorcery (main phase only), Instant (any time), or Counter (reaction to another card).</li>
          <li><strong>Conduits:</strong> Resource cards placed in your Resource Pile. Some are Conduit Shift cards that flip to activate Shifted Effects.</li>
          <li><strong>Tokens:</strong> Summoned by card effects. Not part of your deck and come from a separate token pool.</li>
        </ul>
      </section>

      {/* Key Mechanics */}
      <section className="rules-section">
        <h2>Key Mechanics</h2>
        <ul>
          <li><strong>Phasebind:</strong> Figures enter the battlefield tapped unless played during their clan’s Time Phase.</li>
          <li><strong>Timecharge:</strong> Spend 2 resources to roll the die and attempt to change the Time Phase.</li>
          <li><strong>Conduit Shift:</strong> Flip a Conduit face down to activate its Shifted Effect, but only during your clan’s Time Phase.</li>
          <li><strong>Tapping:</strong> Figures tap to attack or activate abilities. Tapped units cannot attack or block again until untapped.</li>
          <li><strong>Reveal (Flip):</strong> Units with Shadowstep are revealed when they attack or are targeted.</li>
        </ul>
      </section>

      {/* Zones */}
      <section className="rules-section">
        <h2>Game Zones</h2>
        <ul>
          <li><strong>Draw Pile:</strong> Your main deck.</li>
          <li><strong>Hand:</strong> Hidden cards you may play on your turn.</li>
          <li><strong>Resource Pile:</strong> Contains face-up Conduits to be played one per turn.</li>
          <li><strong>Battlefield:</strong> The active combat area.</li>
          <li><strong>Graveyard:</strong> Destroyed or used cards.</li>
          <li><strong>Exile Zone:</strong> Permanently removed cards.</li>
          <li><strong>Token Pile:</strong> Separate pile for summoned tokens (not part of your deck).</li>
        </ul>
      </section>

      {/* Deck Construction */}
      <section className="rules-section">
        <h2>Deck Construction</h2>
        <ul>
          <li><strong>Starter Decks:</strong> Pre-built 60-card decks plus tokens. Includes 1 Legendary, 3 Elite, and multiple Commons, Spells, and Conduits.</li>
          <li><strong>Constructed Format:</strong> Build a deck with 60+ cards from a single faction.</li>
          <li><strong>Restrictions:</strong> Max 1 copy of any Legendary card, 2 of any Elite, 3 of any other card. Up to 3 Conduit Shift cards allowed.</li>
        </ul>
      </section>

      {/* Optional Advanced Section */}
      <section className="rules-section">
        <h2>Advanced Play (Optional)</h2>
        <ul>
          <li><strong>Keyword Interactions:</strong> See the <a href="/keywords">Keyword Glossary</a> for detailed definitions.</li>
          <li><strong>Resolution Order:</strong> Spells and abilities resolve last-in, first-out (LIFO) unless otherwise stated.</li>
          <li><strong>Multiplayer:</strong> Multiplayer support will be introduced in future expansions.</li>
        </ul>
      </section>
    </div>
  );
}
