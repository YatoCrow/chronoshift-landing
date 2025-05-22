import chronologEntries from "../data/newsData";
import Chronolog from "../components/Chronolog"; // ✅ Correct path

export default function ChronologNews() {
  return <Chronolog title="News & Updates" entries={chronologEntries} />;
}
