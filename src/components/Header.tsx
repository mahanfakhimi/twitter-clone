const Header = () => {
  return (
    <header className="dark:text-white z-10 bg-white dark:bg-black sticky top-0 pt-4 border-b border-b-neutral-200 dark:border-neutral-800">
      <h2 className="text-xl font-semibold px-4">Home</h2>
      <div className="flex items-center justify-center mt-4">
        <a href="#" className="flex items-center justify-center transition-all hover:bg-neutral-200 dark:hover:bg-neutral-800 w-full">
          <div className="relative">
            <p className="font-semibold py-4">For you</p>
            <span className="h-1 rounded-full w-full bg-sky-500 absolute left-0 bottom-0" />
          </div>
        </a>
        <a href="#" className="flex items-center justify-center transition-all hover:bg-neutral-200 dark:hover:bg-neutral-800 w-full">
          <div className="relative">
            <p className="py-4">Following</p>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
