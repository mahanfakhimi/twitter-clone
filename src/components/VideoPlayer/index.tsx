import { ChangeEvent, Fragment, useMemo, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import videoSrc from "../../video.mp4";
import PlayOrPauseButton from "./PlayOrPauseButton";
import MuteOrUnMuteButton from "./MuteOrUnMuteButton";
import FullScreenOrFullScreenExitButton from "./FullScreenOrFullScreenExitButton";
import A from "./A";

const VideoPlayer = () => {
  const videoPlayerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isShowControls, setIsShowControls] = useState(false);

  const time = useMemo(() => {
    const formattedCurrentTime = new Date(currentTime * 1000).toISOString().substr(11, 8);
    const formattedDuration = new Date(duration * 1000).toISOString().substr(11, 8);
    return `${formattedCurrentTime} / ${formattedDuration}`;
  }, [currentTime, duration]);

  const handleTimeUpdate = () => setCurrentTime(videoRef.current!.currentTime);

  const handleTimeSeek = (e: ChangeEvent<HTMLInputElement>) => {
    videoRef.current!.currentTime = +e.target.value;
    setCurrentTime(+e.target.value);
  };

  return (
    <div ref={videoPlayerRef} onMouseOver={() => setIsShowControls(true)} onMouseOut={() => setIsShowControls(false)} className="relative w-full overflow-hidden rounded-2xl mt-4">
      <video ref={videoRef} muted={isMuted} onLoadedMetadata={() => setDuration(videoRef.current!.duration)} onTimeUpdate={handleTimeUpdate} src={videoSrc} className="cursor-pointer w-full h-full"></video>
      <Transition as={Fragment} show={isShowControls} enter="transition ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="transition ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
        <div className="absolute bottom-0 w-full p-2">
          <input type="range" ref={inputRef} value={currentTime} max={duration} onChange={handleTimeSeek} className="rounded-full overflow-hidden bg-neutral-700 appearance-none bg-opacity-50 h-1 transition-all cursor-pointer w-full" />
          <div className="flex items-center justify-between">
            <PlayOrPauseButton videoRef={videoRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            <div className="flex items-center gap-x-2">
              <span className="text-white text-sm">{time}</span>
              <MuteOrUnMuteButton videoRef={videoRef} isMuted={isMuted} setIsMuted={setIsMuted} />
              <FullScreenOrFullScreenExitButton videoPlayerRef={videoPlayerRef} isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} />
            </div>
            <A />
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default VideoPlayer;
