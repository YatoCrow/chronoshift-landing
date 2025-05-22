import "../pages/Chronolog.css";

export default function Chronolog({ title, entries }) {
  return (
    <div className="chronolog-page">
      <h1 className="chronolog-title">{title}</h1>
      <div className="chronolog-list">
        {entries.map((entry, index) => (
          <div key={index} className="chronolog-entry">
            <h2 className="entry-title">{entry.title}</h2>
            <p className="entry-date">{new Date(entry.date).toDateString()}</p>
            <div className="entry-content">{entry.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
