import chronologEntries from "../data/newsData";
import Chronolog from "./Chronolog";

export default function ChronologNews() {
  return <Chronolog title="News & Updates" entries={chronologEntries} />;
}
