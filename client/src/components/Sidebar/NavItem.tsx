import { ComponentType } from "react";

interface NavItemProps {
  label: string;
  withLabel?: boolean;
  Icon: ComponentType<JSX.IntrinsicElements["svg"]>;
}

const NavItem: React.FC<NavItemProps> = ({ label, withLabel = true, Icon }) => (
  <div className="flex items-center w-fit gap-x-3 mb-2 transition-all cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 p-3 rounded-full">
    <Icon />
    {withLabel && <span className="text-lg">{label}</span>}
  </div>
);

export default NavItem;
