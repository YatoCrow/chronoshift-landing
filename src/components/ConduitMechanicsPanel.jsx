import { useState } from "react";
import "./ConduitMechanicsPanel.css";

export default function ConduitMechanicsPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="conduit-panel">
      <button className="panel-toggle" onClick={() => setIsOpen(!isOpen)}>
        🔷 Conduit Mechanics (Advanced)
      </button>

      {isOpen && (
        <div className="panel-content">
          <p>
            <strong>Conduits</strong> are the lifeblood of your strategy — the
            resources you rely on to play Figures and Spells. While each faction
            uses unique Conduits, some are capable of <em>shifting</em> with time itself.
          </p>

          <h3>Conduit Types</h3>
          <ul>
            <li>
              <strong>Basic Conduits:</strong> Played face-up from your Resource Pile,
              generating <strong>1 resource</strong> of your faction’s type.
            </li>
            <li>
              <strong>Conduit Shift Cards:</strong> Flip during your faction’s favored
              Time Phase. When shifted, they activate conditional <strong>Shifted Effects</strong>.
            </li>
          </ul>

          <h3>Conduit Shift Rules</h3>
          <ul>
            <li>
              You may include <strong>up to 3 Conduit Shift cards</strong> in your deck.
            </li>
            <li>Played like any other Conduit from your Resource Pile.</li>
            <li>
              <strong>Start Phase:</strong> If the current Time Phase matches your clan,
              you may flip any number of Conduit Shift cards.
            </li>
            <li>
              Flipped cards retain their Shifted Effect until exiled or removed.
            </li>
          </ul>

          <h3>Tactical Depth</h3>
          <p>
            Conduit Shift rewards <strong>timing</strong> and <strong>synergy</strong>.
            Use <em>Timecharge</em> to align phases and unlock maximum potential.
          </p>

          <h3>Example</h3>
          <p className="example">
            <strong>Moonfang Grove – Conduit Shift (Moondrath)</strong><br />
            <span className="text-gray-400">Shifted Effect:</span> When a Fangshade token is summoned, it gains +1/+0 and Stealth this turn.<br />
            → Activates only after flipping during Full Moon, and only if you summon a Fangshade token.
          </p>
        </div>
      )}
    </div>
  );
}
