import { Dispatch, memo, RefObject, SetStateAction } from "react";
import { PauseIcon, PlayIcon } from "../icons";

type PlayOrPauseButtonProps = {
  videoRef: RefObject<HTMLVideoElement>;
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
};

const PlayOrPauseButton = ({ videoRef, isPlaying, setIsPlaying }: PlayOrPauseButtonProps) => {
  const handlePlayOrPauseVideo = () => {
    if (videoRef.current?.paused) {
      videoRef.current!.play();
      setIsPlaying(true);
    } else {
      videoRef.current!.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <button onClick={handlePlayOrPauseVideo} className="p-2 rounded-full hover:bg-neutral-700 transition-all">
        {isPlaying ? <PauseIcon className="fill-white w-4 h-4 md:w-5 md:h-5 cursor-pointer" /> : <PlayIcon className="fill-white w-4 h-4 md:w-5 md:h-5 cursor-pointer" />}
      </button>
      <span className="text-white text-sm hidden md:block">6.4M Views</span>
    </div>
  );
};

export default memo(PlayOrPauseButton);
