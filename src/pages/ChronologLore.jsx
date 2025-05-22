import loreData from "../data/loreData";
import "./Chronolog.css";

function ChronologLore() {
  return (
    <div className="chronolog-page">
      <h1 className="chronolog-title">Lore</h1>
      {loreData.map((entry, index) => (
        <div key={index} className="chronolog-entry">
          <h2>{entry.title}</h2>
          <p className="chronolog-date">{entry.date}</p>
          <div className="chronolog-content">{entry.content}</div>
        </div>
      ))}
    </div>
  );
}

export default ChronologLore;
