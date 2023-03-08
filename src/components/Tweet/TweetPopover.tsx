import clsx from "clsx";
import { Popover, Transition } from "@headlessui/react";
import { useMediaQuery } from "react-responsive";
import { AddToListIcon, MuteIcon, MoreIcon2, UnFollowIcon, BlockIcon, ReportIcon } from "../icons";
import { Fragment } from "react";

const TweetPopover = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 });

  return (
    <Popover className="relative">
      <Popover.Button className="hover:fill-sky-500 fill-neutral-500 hover:bg-opacity-10 transition-all">
        <MoreIcon2 className="w-5 h-5" />
      </Popover.Button>
      <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="transition ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
        <Popover.Overlay className={clsx("fixed inset-0 w-full h-full z-50", isMobile ? "bg-neutral-900 bg-opacity-70 " : "bg-none")} />
      </Transition>

      <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-3" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-3">
        <Popover.Panel className={clsx("bg-white dark:bg-black flex flex-col overflow-hidden z-50", isMobile ? "fixed bottom-0 left-0 w-full rounded-t-xl" : "absolute right-0 top-0 w-[314px] rounded-xl border border-neutral-200 dark:border-neutral-800")}>
          {({ close }) => (
            <>
              <div className="flex items-center gap-x-3 px-3 h-11 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all cursor-pointer">
                <UnFollowIcon className="w-[18.5px] h-[18.5px] dark:fill-white" />
                <span className="font-semibold text-sm dark:text-white">Unfollow @Mahan_fki</span>
              </div>
              <div className="flex items-center gap-x-3 px-3 h-11 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all cursor-pointer">
                <AddToListIcon className="w-[18.5px] h-[18.5px] dark:fill-white" />
                <span className="font-semibold text-sm dark:text-white">Add/Remove @Mahan_fki</span>
              </div>
              <div className="flex items-center gap-x-3 px-3 h-11 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all cursor-pointer">
                <MuteIcon className="w-[18.5px] h-[18.5px] dark:fill-white" />
                <span className="font-semibold text-sm dark:text-white">Mute @Mahan_fki</span>
              </div>
              <div className="flex items-center gap-x-3 px-3 h-11 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all cursor-pointer">
                <BlockIcon className="w-[18.5px] h-[18.5px] dark:fill-white" />
                <span className="font-semibold text-sm dark:text-white">Block @Mahan_fki</span>
              </div>
              <div className="flex items-center gap-x-3 px-3 h-11 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all cursor-pointer">
                <ReportIcon className="w-[18.5px] h-[18.5px] dark:fill-white" />
                <span className="font-semibold text-sm dark:text-white">ReportIcon @Mahan_fki</span>
              </div>
              {isMobile && (
                <button onClick={() => close()} className="py-2.5 m-3 border-2 dark:text-white dark:border-neutral-800 dark:hover:bg-neutral-800 font-semibold text-sm border-neutral-200 rounded-full transition-all hover:bg-neutral-200">
                  Cancel
                </button>
              )}
            </>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default TweetPopover;
