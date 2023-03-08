import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Widgets from "../components/Widgets";
import MediaQuery from "react-responsive";
import Tweet from "../components/Tweet";
import BottomNavigation from "../components/BottomNavigation";
import CreateTweetForm from "../components/Tweet/CreateTweetForm";

const Home = () => {
  return (
    <div className="flex">
      <MediaQuery minWidth={500}>
        <Sidebar />
      </MediaQuery>

      <main className="flex-1">
        <Header />
        <MediaQuery minWidth={500}>
          <CreateTweetForm />
        </MediaQuery>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </main>

      <MediaQuery minWidth={1024}>
        <Widgets />
      </MediaQuery>

      <MediaQuery maxWidth={500}>
        <BottomNavigation />
      </MediaQuery>
    </div>
  );
};

export default Home;
