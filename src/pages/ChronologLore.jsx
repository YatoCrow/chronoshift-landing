// src/pages/ChronologLore.jsx
import { useState } from "react";
import loreEntries from "../data/loreData";
import "./Chronolog.css";

function ChronologLore() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(loreEntries[0]);

  const filtered = loreEntries.filter(
    (entry) =>
      entry.title.toLowerCase().includes(search.toLowerCase()) ||
      `chapter ${entry.chapter}`.includes(search.toLowerCase())
  );

  return (
    <div className="chronolog-page">
      <h1 className="chronolog-title">Chronoshift: Tales of the Shifting Hours</h1>

      <input
        type="text"
        placeholder="Search chapters..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="chronolog-search"
      />

      <div className="chapter-selector">
        {filtered.map((entry) => (
          <button
            key={entry.chapter}
            className={`chapter-btn ${entry.chapter === selected.chapter ? "active" : ""}`}
            onClick={() => setSelected(entry)}
          >
            {entry.title}
          </button>
        ))}
      </div>

      <div className="chronolog-entry">
        <h2 className="entry-title">{selected.title}</h2>
        <div className="entry-content">{selected.content}</div>
      </div>
    </div>
  );
}

export default ChronologLore;
