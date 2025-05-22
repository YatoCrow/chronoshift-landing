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
      entry.series?.toLowerCase().includes(search.toLowerCase()) ||
      `chapter ${entry.chapter}`.includes(search.toLowerCase())
  );

  return (
    <div className="chronolog-page">
      <h1 className="chronolog-title">{selected.series}</h1>

      {/* Search input visible only on desktop */}
      <input
        type="text"
        placeholder="Search chapters..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="chronolog-search"
      />

      {/* Horizontal Chapter Selector */}
      <div className="chapter-scrollbar">
        {filtered.map((entry) => (
          <button
            key={entry.chapter}
            className={`chapter-tab ${
              entry.chapter === selected.chapter ? "active" : ""
            }`}
            onClick={() => setSelected(entry)}
          >
            Ch. {entry.chapter}
          </button>
        ))}
      </div>

      {/* Chapter Content */}
      <div className="chronolog-entry">
        <h2 className="entry-title">
          Chapter {selected.chapter}: {selected.title.replace(/^Chapter \d+:\s*/, "")}
        </h2>
        <p className="entry-date">{selected.date}</p>
        <div className="entry-content">{selected.content}</div>
      </div>
    </div>
  );
}

export default ChronologLore;
