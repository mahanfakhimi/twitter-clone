import { MoreIcon2 } from "./icons";

const TrendSuggestions = () => {
  return (
    <div className="mt-4 border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl">
      <h2 className="text-xl font-semibold mb-3 dark:text-white">Trends for you</h2>

      <div className="flex flex-col gap-y-4">
        {[...Array(15)].map((_, index) => (
          <div key={index} className="cursor-pointer">
            <div className="flex items-center justify-between mb-0.5">
              <p className="text-xs text-neutral-500">News · Trending</p>
              <button className="hover:fill-sky-500 fill-neutral-500 hover:bg-opacity-10 transition-all">
                <MoreIcon2 className="w-5 h-5" />
              </button>
            </div>
            <h3 className="font-semibold mb-0.5 dark:text-white">Backend</h3>
            <p className="text-xs text-neutral-500">11.4K Tweets</p>
          </div>
        ))}
      </div>

      <button className="text-sky-500 text-sm mt-5">Show more</button>
    </div>
  );
};

export default TrendSuggestions;
