import newsData from "../data/newsData";
import "./Chronolog.css";

function ChronologNews() {
  return (
    <div className="chronolog-page">
      <h1 className="chronolog-title">News & Updates</h1>
      {newsData.map((entry, index) => (
        <div key={index} className="chronolog-entry">
          <h2>{entry.title}</h2>
          <p className="chronolog-date">{entry.date}</p>
          <div className="chronolog-content">{entry.content}</div>
        </div>
      ))}
    </div>
  );
}

export default ChronologNews;
