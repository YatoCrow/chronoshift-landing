import "./Factions.css";

export default function Factions() {
  return (
    <div className="factions-page">
      <div className="factions-header">
        <h1>Factions of Chronoshift</h1>
        <p>Each bound to time. Each forged in fate.</p>
      </div>

      <div className="faction-grid">
        {[
          { name: "House Noctvaris", key: "HN" },
          { name: "The Moondrath", key: "TM" },
          { name: "Solari Ascendants", key: "SA" },
          { name: "Scorchborne", key: "SB" },
          { name: "Umbra’kin", key: "UK" },
          { name: "Noctara Sanctum", key: "NS" },
        ].map((faction) => (
          <div key={faction.key} className="faction-card">
            <img
              src={`/assets/emblems/${faction.key}-Emblem.webp`}
              alt={`${faction.name} emblem`}
              className="faction-card-emblem"
            />
            <h2>{faction.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
