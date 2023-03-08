import { ReTweetIcon } from "../../icons";

const ReTweetInteraction = () => {
  return (
    <div className="flex group items-center gap-x-3 cursor-pointer">
      <div className="relative">
        <ReTweetIcon className="w-[18.5px] fill-neutral-500 group-hover:fill-green-500 h-[18.5px] transition-all rounded-full" />
        <div className="absolute top-1/2 bg-none group-hover:bg-green-500 group-hover:bg-opacity-10 left-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full"></div>
      </div>
      <span className="text-xs text-neutral-500 group-hover:text-green-500 transition-all">470</span>
    </div>
  );
};

export default ReTweetInteraction;
