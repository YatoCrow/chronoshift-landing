import { useState } from "react";
import "./Factions.css";

const factions = [
  {
    name: "House Noctvaris",
    key: "HN",
    code: "CHR-N",
    time: "Night",
    description: "Vampiric nobles who thrive at night, draining life and summoning bloodbound allies.",
    focus: "Sustain, Lifesteal, Token Swarm",
    curve: "Mid to Late",
    tempo: "Control / Snowball"
  },
  {
    name: "The Moondrath",
    key: "TM",
    code: "CHR-M",
    time: "Full Moon",
    description: "A lunar pack of beasts that strike fast and vanish. Masters of Stealth and Full Moon dominance.",
    focus: "Aggro, Strike First, Stealth",
    curve: "Low to Mid",
    tempo: "Aggressive / Tactical"
  },
  {
    name: "Solari Ascendants",
    key: "SA",
    code: "CHR-S",
    time: "Day",
    description: "Unified human order empowered by the sun. Rely on team buffs and coordination.",
    focus: "Synergy, Day Buffs, Balanced Tactics",
    curve: "Midrange",
    tempo: "Stable / Reactive"
  },
  {
    name: "Scorchborne",
    key: "SB",
    code: "CHR-R",
    time: "Scorch",
    description: "Fire-worshipping zealots who embrace pain and unleash volatile power.",
    focus: "Burn, Fury, Unstable Power",
    curve: "Low to Mid",
    tempo: "Explosive / Risk-Reward"
  },
  {
    name: "Umbra’kin",
    key: "UK",
    code: "CHR-U",
    time: "Night",
    description: "Abyssal demons born of the void. Thrive in recursion and overwhelming presence.",
    focus: "Deadcall, Graveyard Loops, Big Threats",
    curve: "Mid to Late",
    tempo: "Resilient / Inevitable"
  },
  {
    name: "Noctara Sanctum",
    key: "NS",
    code: "CHR-T",
    time: "Dusk",
    description: "Exiles from all clans seeking peace in dusk. Masters of restraint, speed, and cunning plays.",
    focus: "Control, Counterplay, Precision",
    curve: "Flat",
    tempo: "Cunning / Defensive"
  }
];

export default function Factions() {
  const [openStates, setOpenStates] = useState({});

  const toggleFaction = (key) => {
    setOpenStates((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="factions-page">
      <div className="factions-header">
        <h1>Factions of Chronoshift</h1>
        <p>Each bound to time. Each forged in fate.</p>
      </div>

      <div className="faction-grid">
        {factions.map((f) => (
          <div
            key={f.key}
            className={`faction-card expandable ${openStates[f.key] ? "open" : ""}`}
          >
            <img
              src={`/assets/emblems/${f.key}-Emblem.webp`}
              alt={`${f.name} emblem`}
              className="faction-card-emblem"
            />
            <h2>{f.name}</h2>
            <small className="faction-code">{f.code}</small>

            <button
              className="toggle-button"
              onClick={() => toggleFaction(f.key)}
            >
              {openStates[f.key] ? "Hide Info" : "Show Info"}
            </button>

            {openStates[f.key] && (
              <div className="faction-details">
                <p><strong>Time Phase:</strong> {f.time}</p>
                <p><strong>Description:</strong> {f.description}</p>
                <p><strong>Gameplay Focus:</strong> {f.focus}</p>
                <p><strong>Curve:</strong> {f.curve}</p>
                <p><strong>Tempo:</strong> {f.tempo}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
