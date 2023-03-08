import { ExploreIcon, BookmarksIcon, HomeIcon, MessagesIcon, MoreIcon, NotificationsIcon, ProfileIcon, ListsIcon } from "../icons";
import NavItem from "./NavItem";

type NavigationProps = {
  isExpanded?: boolean;
};

const Navigation = ({ isExpanded }: NavigationProps) => {
  return (
    <nav className="w-full mb-4 dark:text-white dark:fill-white">
      <NavItem label="Home" withLabel={isExpanded} Icon={HomeIcon} />
      <NavItem label="Explore" withLabel={isExpanded} Icon={ExploreIcon} />
      <NavItem label="Notifications" withLabel={isExpanded} Icon={NotificationsIcon} />
      <NavItem label="Messages" withLabel={isExpanded} Icon={MessagesIcon} />
      <NavItem label="Bookmarks" withLabel={isExpanded} Icon={BookmarksIcon} />
      <NavItem label="Lists" withLabel={isExpanded} Icon={ListsIcon} />
      <NavItem label="Profile" withLabel={isExpanded} Icon={ProfileIcon} />
      <NavItem label="More" withLabel={isExpanded} Icon={MoreIcon} />
    </nav>
  );
};

export default Navigation;
