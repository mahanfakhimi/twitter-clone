import { useMediaQuery } from "react-responsive";
import { TwitterIcon } from "../icons";
import CreateTweetButton from "../Tweet/CreateTweetButton";
import Navigation from "./Navigation";

const Sidebar: React.FC = () => {
  const isExpanded = useMediaQuery({ minWidth: 1280 });

  return (
    <aside className="max-w-[300px] xl:flex-1 sticky top-0 border-r border-r-neutral-200 dark:border-r-neutral-800 p-4 h-screen">
      <button className="p-3 rounded-full hover:bg-sky-500 hover:bg-opacity-10 transition-all">
        <TwitterIcon className="fill-sky-500" />
      </button>
      <Navigation isExpanded={isExpanded} />
      <CreateTweetButton />
    </aside>
  );
};

export default Sidebar;
