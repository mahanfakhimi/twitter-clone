import { CreateTweetIcon } from "../icons";
import { useMediaQuery } from "react-responsive";

const CreateTweetButton = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  if (isDesktop) return <button className="py-3 w-full transition-all font-semibold text-white bg-sky-500 hover:bg-sky-600 rounded-full">Tweet</button>;

  return (
    <button className="p-3 transition-all bg-sky-500 hover:bg-sky-600 rounded-full">
      <CreateTweetIcon className="fill-white" />
    </button>
  );
};

export default CreateTweetButton;
