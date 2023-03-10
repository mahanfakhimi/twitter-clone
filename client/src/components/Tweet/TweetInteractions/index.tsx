import LikeInteraction from "./LikeInteraction";
import ReplyInteraction from "./ReplyInteraction";
import ReTweetInteraction from "./ReTweetInteraction";
import ShareInteraction from "./ShareInteraction";

const TweetInteractions = () => {
  return (
    <div className="flex justify-between mt-4">
      <ReplyInteraction />
      <ReTweetInteraction />
      <LikeInteraction />
      <ShareInteraction />
    </div>
  );
};

export default TweetInteractions;
