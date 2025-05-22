import newsData from "../data/newsData";
import ChronologSection from "../components/ChronologSection";

export default function News() {
  return (
    <ChronologSection entries={newsData} title="News & Updates" />
  );
}
