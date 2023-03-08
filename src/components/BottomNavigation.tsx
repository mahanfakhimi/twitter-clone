import { HomeIcon, MessagesIcon, NotificationsIcon, SearchIcon } from "./icons";

const BottomNavigation = () => {
  return (
    <div className="fixed flex items-center justify-between bottom-0 left-0 w-full py-2 px-8 bg-white dark:bg-black border-t border-t-neutral-200 dark:border-t-neutral-800">
      <button className="hover:bg-neutral-200 transition-all dark:hover:bg-neutral-800 p-2 rounded-full">
        <HomeIcon className="w-6 h-6 dark:fill-white" />
      </button>
      <button className="hover:bg-neutral-200 transition-all dark:hover:bg-neutral-800 p-2 rounded-full">
        <SearchIcon className="w-6 h-6 dark:fill-white" />
      </button>
      <button className="hover:bg-neutral-200 transition-all dark:hover:bg-neutral-800 p-2 rounded-full">
        <NotificationsIcon className="w-6 h-6 dark:fill-white" />
      </button>
      <button className="hover:bg-neutral-200 transition-all dark:hover:bg-neutral-800 p-2 rounded-full">
        <MessagesIcon className="w-6 h-6 dark:fill-white" />
      </button>
    </div>
  );
};

export default BottomNavigation;
