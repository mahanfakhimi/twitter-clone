import SearchBar from "./SearchBar";
import FollowSuggestions from "./FollowSuggestions";
import TrendSuggestions from "./TrendSuggestions";

const Widgets = () => {
  return (
    <aside className="max-w-[360px] p-4 flex-1 border-l border-l-neutral-200 dark:border-l-neutral-800">
      <SearchBar />
      <TrendSuggestions />
      <FollowSuggestions />
    </aside>
  );
};

export default Widgets;
