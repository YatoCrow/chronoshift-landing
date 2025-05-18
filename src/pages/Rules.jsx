import CollapsibleRuleSection from "../components/CollapsibleRuleSection";
import "./Rules.css";

export default function Rules() {
  return (
    <div className="rules-page">
      <h1 className="rules-title">Chronoshift: Official Rules</h1>

      <CollapsibleRuleSection title="Game Overview">
        <p>Chronoshift is a strategic card game where the battlefield evolves with shifting Time Phases. Players choose a faction, build a deck, and use figures, spells, and resources to reduce their opponent’s HP from 30 to 0.</p>
        <p>Each faction thrives during a specific Time Phase and draws strength from unique mechanics. The game is dynamic, tactical, and rewards careful planning, timing, and deck synergy.</p>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Core Concepts">
        <ul>
          <li><strong>Time Phase System:</strong> Global state that changes every round. Affects card abilities and resource gain.</li>
          <li><strong>Resource System:</strong> Each player plays 1 Conduit per turn. Some Conduits can shift during Time Phases.</li>
          <li><strong>Faction Alignment:</strong> All cards in your deck must belong to your chosen faction.</li>
          <li><strong>Victory Condition:</strong> Reduce your opponent’s HP from 30 to 0.</li>
        </ul>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Resource System">
        <p>Resources are represented by special cards called <strong>Conduits</strong>. These generate your faction’s resource type.</p>
        <ul>
          <li>Conduits are <strong>channeled</strong> to gain 1 resource.</li>
          <li>Channeled Conduits <strong>recharge</strong> at the start of your turn.</li>
          <li>Resources are used to play <strong>Figures</strong> and <strong>Spells</strong>.</li>
        </ul>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Conduit Mechanics (Advanced)">
        <p><strong>Conduits</strong> are the lifeblood of your strategy — the resources you rely on to play Figures and Spells. Some can <em>shift</em> during your faction’s favored Time Phase.</p>
        <h3>Conduit Types</h3>
        <ul>
          <li><strong>Basic Conduits:</strong> Generate 1 resource. Played from your Resource Pile.</li>
          <li><strong>Conduit Shift Cards:</strong> Flip during your faction’s Time Phase and activate powerful conditional effects.</li>
        </ul>
        <h3>Conduit Shift Rules</h3>
        <ul>
          <li>Maximum 3 Conduit Shift cards per deck.</li>
          <li>Played like normal Conduits. Flip during Start Phase if Time Phase matches your faction.</li>
          <li>Shifted effects activate if their condition is met and last until the card is exiled or replaced.</li>
        </ul>
        <h3>Example</h3>
        <p><strong>Moonfang Grove (Moondrath)</strong> – Shifted Effect: “Beasts you summon gain +1/+0.”</p>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Time Phase Roll">
        <p>At the start of each round, roll a six-sided die:</p>
        <ul>
          <li>1 → Night</li>
          <li>2 → Full Moon</li>
          <li>3 → Day</li>
          <li>4 → Scorch</li>
          <li>5 → Dusk</li>
          <li>6 → Retain current Time Phase</li>
        </ul>
        <p>Time Phases affect card timing and faction abilities.</p>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Timecharge Mechanic">
        <p>Spend resources to attempt to change the current Time Phase. Roll a die:</p>
        <ul>
          <li>1–2: No change</li>
          <li>3–5: Random Time Phase</li>
          <li>6: Choose Time Phase</li>
        </ul>
        <p>Cost starts at 2 resources and increases per use (up to 5). May only be used once per turn after Start Phase and before Draw Phase.</p>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Turn Structure">
        <ol>
          <li><strong>Start Phase:</strong> Recharge, resolve start effects, roll for Time Phase.</li>
          <li><strong>Timecharge Window:</strong> Optional use of Timecharge.</li>
          <li><strong>Draw Phase:</strong> Draw 1 card.</li>
          <li><strong>Resource Phase:</strong> Play 1 Conduit, gain additional resources if conditions met.</li>
          <li><strong>Main Phase:</strong> Play Figures, Spells, and abilities.</li>
          <li><strong>Combat Phase:</strong> Declare attacks and blockers.</li>
          <li><strong>End Phase:</strong> Resolve end-of-turn effects.</li>
        </ol>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Card Types & Spell Subtypes">
        <ul>
          <li><strong>Figures:</strong> Units with ATK/HP that can attack, block, and use abilities.</li>
          <li><strong>Spells:</strong> Effects with subtypes:
            <ul>
              <li><strong>Spell – Rite:</strong> Play only during Main Phase.</li>
              <li><strong>Spell – Burst:</strong> Play any time.</li>
              <li><strong>Spell – Dispel:</strong> Counter a spell or figure.</li>
            </ul>
          </li>
          <li><strong>Conduits:</strong> Resource cards. Some can Shift during Time Phase.</li>
          <li><strong>Tokens:</strong> Summoned units not in your deck or hand. Drawn from Token Pile.</li>
        </ul>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Key Mechanics">
        <ul>
          <li><strong>Phasebind:</strong> Figures enter tapped unless summoned during your faction’s Time Phase.</li>
          <li><strong>Timecharge:</strong> Strategic attempt to change Time Phase.</li>
          <li><strong>Conduit Shift:</strong> Flip special Conduits to activate conditional bonuses.</li>
          <li><strong>Channel:</strong> Tap to generate resources.</li>
          <li><strong>Reveal (Flip):</strong> Triggers when a hidden unit attacks or is targeted.</li>
          <li><strong>LIFO Stack:</strong> Effects resolve Last In, First Out. Bursts and Dispels can be used in response.</li>
        </ul>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Game Zones">
        <ul>
          <li><strong>Draw Pile:</strong> Your main deck.</li>
          <li><strong>Hand:</strong> Hidden cards you draw.</li>
          <li><strong>Resource Pile:</strong> Separate Conduit pile (1 per turn).</li>
          <li><strong>Battlefield:</strong> Zone for Figures and Tokens.</li>
          <li><strong>Graveyard:</strong> Destroyed/discarded cards.</li>
          <li><strong>Exile Zone:</strong> Permanently removed cards.</li>
          <li><strong>Token Pile:</strong> Summoned token cards only.</li>
        </ul>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Deck Construction">
        <ul>
          <li><strong>Starter Decks:</strong> 60 cards + tokens. Includes 1 Legendary, 3 Elite.</li>
          <li><strong>Constructed:</strong> 60+ cards, all same faction.</li>
          <li><strong>Card Limits:</strong>
            <ul>
              <li>1x Legendary</li>
              <li>2x Elite</li>
              <li>3x all others</li>
              <li>Up to 3 Conduit Shift cards</li>
            </ul>
          </li>
        </ul>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Advanced Play">
        <ul>
          <li><strong>Keyword Glossary:</strong> See the <a href="/keywords">Keyword Glossary</a> for status and combat effects.</li>
          <li><strong>Stack Resolution:</strong> Uses LIFO stack order.</li>
          <li><strong>Multiplayer:</strong> Support coming in future expansions.</li>
        </ul>
      </CollapsibleRuleSection>

      <CollapsibleRuleSection title="Card Anatomy">
        <p>Learn how to read a card at a glance. See diagram below:</p>
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
