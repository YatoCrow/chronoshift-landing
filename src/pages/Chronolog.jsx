// src/pages/Chronolog.jsx
import "./Chronolog.css";
import chronologEntries from "../data/chronologData";

export default function Chronolog() {
  return (
    <div className="chronolog-page">
      <h1 className="chronolog-title">Chronolog</h1>
      <p className="chronolog-subtitle">The evolving story and milestones of Chronoshift</p>

      {chronologEntries.map((entry, index) => (
        <div key={index} className="chronolog-entry">
          <div className="chronolog-meta">
            <span className="chronolog-type">{entry.type}</span>
            <span className="chronolog-date">{entry.date}</span>
          </div>
          <h2 className="chronolog-heading">{entry.title}</h2>
          <div className="chronolog-body">{entry.content}</div>
        </div>
      ))}
    </div>
  );
}
