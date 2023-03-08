import { Dispatch, memo, RefObject, SetStateAction } from "react";
import { FullScreenExitIcon, FullScreenIcon } from "../icons";

type FullScreenOrFullScreenExitButtonProps = {
  videoPlayerRef: RefObject<HTMLDivElement>;
  isFullScreen: boolean;
  setIsFullScreen: Dispatch<SetStateAction<boolean>>;
};

const FullScreenOrFullScreenExitButton = ({ videoPlayerRef, isFullScreen, setIsFullScreen }: FullScreenOrFullScreenExitButtonProps) => {
  const handleFullScreenOrFullScreenExit = () => {
    if (isFullScreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    } else {
      videoPlayerRef.current?.requestFullscreen();
      setIsFullScreen(true);
    }
  };

  return (
    <button onClick={handleFullScreenOrFullScreenExit} className="p-2 rounded-full hover:bg-neutral-700 transition-all">
      {isFullScreen ? <FullScreenExitIcon className="fill-white w-4 h-4 md:w-5 md:h-5 cursor-pointer" /> : <FullScreenIcon className="fill-white w-4 h-4 md:w-5 md:h-5 cursor-pointer" />}
    </button>
  );
};

export default memo(FullScreenOrFullScreenExitButton);
