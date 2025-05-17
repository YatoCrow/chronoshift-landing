// src/pages/Rules.jsx
import "./Rules.css";

export default function Rules() {
  return (
    <div className="rules-page">
      <h1 className="rules-title">Chronoshift: Official Rules</h1>

      {/* Overview */}
      <section className="rules-section">
        <h2>Overview</h2>
        <p>
          Chronoshift is a strategic card game where the battlefield evolves with shifting Time Phases. Players choose a faction, build a deck, and use figures, spells, and resources to reduce their opponent’s HP from 30 to 0.
        </p>
        <p>
          Each faction thrives during a specific Time Phase and draws strength from unique mechanics. The game is dynamic, tactical, and rewards careful planning, timing, and deck synergy.
        </p>
      </section>

      {/* Core Concepts */}
      <section className="rules-section">
        <h2>Core Concepts</h2>
        <ul>
          <li><strong>Time Phase System:</strong> A global state that changes every round. Time Phases affect card abilities and resource gain. The five phases are: Night, Full Moon, Day, Scorch, and Dusk.</li>
          <li><strong>Resource System:</strong> Each player plays 1 Conduit per turn from their Resource Pile. Some Conduits can shift to activate additional effects.</li>
          <li><strong>Faction Alignment:</strong> All cards and resources in your deck must belong to your chosen faction.</li>
          <li><strong>Victory Condition:</strong> Reduce your opponent’s HP from 30 to 0.</li>
        </ul>
      </section>

      {/* Time Phase Mechanics */}
      <section className="rules-section">
        <h2>Time Phase Roll</h2>
        <p>
          At the start of each round (the beginning of the first player’s turn), roll a six-sided die:
        </p>
        <ul>
          <li><strong>1</strong> → Night</li>
          <li><strong>2</strong> → Full Moon</li>
          <li><strong>3</strong> → Day</li>
          <li><strong>4</strong> → Scorch</li>
          <li><strong>5</strong> → Dusk</li>
          <li><strong>6</strong> → Retain the current Time Phase</li>
        </ul>
        <p>
          This mechanic introduces unpredictability and strategic timing based on faction alignment.
        </p>
      </section>

      {/* Timecharge */}
      <section className="rules-section">
  <h2>Timecharge Mechanic</h2>
  <p>
    Timecharge allows a player to attempt to change the current Time Phase during their turn. To activate Timecharge, you must spend a number of clan-specific resources and roll a six-sided die:
  </p>
  <ul>
    <li><strong>1–2:</strong> Time remains unchanged (resources are spent)</li>
    <li><strong>3–5:</strong> Time Phase shifts randomly</li>
    <li><strong>6:</strong> Choose the next Time Phase</li>
  </ul>
  <p>
    The cost to use Timecharge starts at <strong>2 resources</strong> and increases by <strong>+1</strong> each time you use it. This increase is tracked individually per player and caps at a maximum cost of <strong>5 resources</strong>. For example:
  </p>
  <ul>
    <li>1st use: 2 resources</li>
    <li>2nd use: 3 resources</li>
    <li>3rd use: 4 resources</li>
    <li>4th use and beyond: 5 resources</li>
  </ul>
</section>


      {/* Turn Structure */}
      <section className="rules-section">
        <h2>Turn Structure</h2>
        <ol>
          <li><strong>Start Phase:</strong> If you are the first player of the round, roll to determine the Time Phase. Then untap your cards and draw one card.</li>
          <li><strong>Resource Phase:</strong> Play one Conduit from your Resource Pile. Then gain:
            <ul>
              <li>+1 base resource</li>
              <li>+1 if the current Time Phase matches your clan</li>
              <li>+1 if you control the battlefield (more units than your opponent)</li>
            </ul>
          </li>
          <li><strong>Main Phase:</strong> Summon figures, cast spells, activate abilities, or use Timecharge.</li>
          <li><strong>Combat Phase:</strong> Declare attacks, assign blockers, and resolve damage.</li>
          <li><strong>End Phase:</strong> Resolve any end-of-turn effects and pass the turn.</li>
        </ol>
      </section>

      {/* Card Types */}
      <section className="rules-section">
        <h2>Card Types</h2>
        <ul>
          <li><strong>Figures:</strong> Units that occupy the battlefield. Figures have ATK/HP stats, can attack, block, or activate abilities.</li>
          <li><strong>Spells:</strong> Cards that trigger powerful effects. Types include:
            <ul>
              <li><strong>Sorcery:</strong> Only playable during your main phase.</li>
              <li><strong>Instant:</strong> Can be played at any time, including your opponent’s turn.</li>
              <li><strong>Counter:</strong> Can only be played in response to a spell or figure.</li>
            </ul>
          </li>
          <li><strong>Conduits:</strong> Resource cards placed into your Resource Pile. Each turn, you may play one Conduit. Some are <strong>Conduit Shift</strong> cards, which flip during your faction’s favored Time Phase to grant bonus effects.</li>
          <li><strong>Tokens:</strong> Summoned units created by card effects. Tokens are not part of your deck or hand and are drawn from a separate Token Pile.</li>
        </ul>
      </section>

      {/* Mechanics */}
      <section className="rules-section">
        <h2>Key Mechanics</h2>
        <ul>
          <li><strong>Phasebind:</strong> Figures enter the battlefield tapped unless summoned during their clan’s favored Time Phase. This rule represents temporal restriction. Abilities like Ambush can bypass this.</li>
          <li><strong>Timecharge:</strong> A mechanic allowing strategic Time Phase manipulation by spending 2 resources and rolling a die.</li>
          <li><strong>Conduit Shift:</strong> Some Conduits may be flipped during your faction’s Time Phase to activate a Shifted Effect. Shifted effects persist until the Conduit is removed or exiled.</li>
          <li><strong>Tapping:</strong> Figures tap when they attack or use abilities. Tapped units cannot attack or block again until untapped on your next Start Phase.</li>
          <li><strong>Reveal (Flip):</strong> Figures with Shadowstep remain hidden until they attack or are targeted, triggering “On Reveal” effects.</li>
          <li><strong>LIFO (Last In, First Out):</strong> When multiple effects are triggered, they resolve in reverse order — the most recent one resolves first. Spells and abilities form a stack. Only Instants and Counters may be played in response to other effects.</li>
        </ul>
      </section>

      {/* Game Zones */}
      <section className="rules-section">
        <h2>Game Zones</h2>
        <ul>
          <li><strong>Draw Pile:</strong> Your main deck of 60+ cards.</li>
          <li><strong>Hand:</strong> Hidden cards in your possession, drawn each turn.</li>
          <li><strong>Resource Pile:</strong> A separate face-up pile of Conduits. You may play 1 Conduit per turn from here.</li>
          <li><strong>Battlefield:</strong> The main combat zone where Figures and Tokens are summoned.</li>
          <li><strong>Graveyard:</strong> Discarded or destroyed cards. Some effects interact with this zone.</li>
          <li><strong>Exile Zone:</strong> Cards removed from the game permanently.</li>
          <li><strong>Token Pile:</strong> A separate zone for your available tokens (e.g., Bloodshade, Fangshade). Tokens are not drawn into your hand or included in your deck list.</li>
        </ul>
      </section>

      {/* Deck Construction */}
      <section className="rules-section">
        <h2>Deck Construction</h2>
        <ul>
          <li><strong>Starter Decks:</strong> Pre-built 60-card decks for each faction, with 1 Legendary, 3 Elite, 46 Commons/Spells/Conduits, plus a small number of tokens.</li>
          <li><strong>Constructed Format:</strong> Build your own deck with 60 or more cards. All cards must belong to a single faction.</li>
          <li><strong>Card Limits:</strong> 
            <ul>
              <li>Maximum 1 copy of any Legendary card</li>
              <li>Maximum 2 copies of any Elite card</li>
              <li>Maximum 3 copies of any other non-resource card</li>
              <li>Up to 3 Conduit Shift cards allowed per deck</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Advanced Play */}
      <section className="rules-section">
        <h2>Advanced Play</h2>
        <ul>
          <li><strong>Keyword Glossary:</strong> Visit the <a href="/keywords">Keyword Glossary</a> for full definitions of combat abilities and status effects.</li>
          <li><strong>Stack Resolution:</strong> Effects resolve using LIFO — the most recent effect resolves first.</li>
          <li><strong>Multiplayer Support:</strong> Future expansions will support multiplayer formats and new win conditions.</li>
        </ul>
      </section>
    </div>
  );
}
