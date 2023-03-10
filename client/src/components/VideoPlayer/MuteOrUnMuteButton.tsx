import { Dispatch, memo, RefObject, SetStateAction } from "react";
import { VolumeIcon, VolumeMuteIcon } from "../icons";

type MuteOrUnMuteButtonProps = {
  videoRef: RefObject<HTMLVideoElement>;
  isMuted: boolean;
  setIsMuted: Dispatch<SetStateAction<boolean>>;
};

const MuteOrUnMuteButton = ({ videoRef, isMuted, setIsMuted }: MuteOrUnMuteButtonProps) => {
  const handleMuteOrUnMuteVideo = () => {
    if (videoRef.current?.muted) {
      setIsMuted(false);
      videoRef.current!.muted = false;
    } else {
      setIsMuted(true);
      videoRef.current!.muted = true;
    }
  };

  return (
    <button onClick={handleMuteOrUnMuteVideo} className="p-2 rounded-full hover:bg-neutral-700 transition-all">
      {isMuted ? <VolumeMuteIcon className="fill-white w-4 h-4 md:w-5 md:h-5 cursor-pointer" /> : <VolumeIcon className="fill-white w-4 h-4 md:w-5 md:h-5 cursor-pointer" />}
    </button>
  );
};

export default memo(MuteOrUnMuteButton);
