import { useRef } from "react";
import { SearchIcon } from "./icons";

const SearchBar = () => {
  const inpRef = useRef<HTMLInputElement>(null);

  return (
    <form className="h-11 relative group">
      <input type="text" placeholder="Search Twitter" ref={inpRef} className="border pl-12 transition-all pr-4 w-full rounded-full h-full dark:text-white placeholder-neutral-500 bg-transparent border-neutral-200 dark:border-neutral-800 focus:border-sky-500" />
      <button className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <SearchIcon className="w-5 h-5 transition-all fill-neutral-500 group-focus-within:fill-sky-500" />
      </button>
    </form>
  );
};

export default SearchBar;
