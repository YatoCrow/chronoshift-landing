import chronologEntries from "../data/loreData";
import Chronolog from "../components/Chronolog"; // ✅ Correct path

export default function ChronologLore() {
  return <Chronolog title="Lore" entries={chronologEntries} />;
}
