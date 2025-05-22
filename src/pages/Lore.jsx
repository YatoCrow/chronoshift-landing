import loreData from "../data/loreData";
import ChronologSection from "../components/ChronologSection";

export default function Lore() {
  return (
    <ChronologSection entries={loreData} title="Lore Archive" />
  );
}
