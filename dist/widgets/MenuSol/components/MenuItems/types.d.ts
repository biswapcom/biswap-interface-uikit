import type { BoxProps } from "../../../../components/Box";
import type { DropdownMenuItems } from "../DropdownMenu/types";
import type { Colors } from "../../../../theme";
export declare enum ItemTypes {
  DIVIDER = "DIVIDER",
}
export type MenuItemsType = {
  label?: string;
  href?: string;
  icon?: string;
  items?: DropdownMenuItems[];
  showOnMobile?: boolean;
  showItemsOnMobile?: boolean;
  isExtended?: boolean;
  isMobileNav?: boolean;
  type?: ItemTypes;
  target?: string;
  mobileTarget?: string;
  isMobileMenuOpened?: boolean;
  mobileMenuCallback?: (s: boolean) => void;
  hidden?: boolean;
  showNavBadge?: boolean;
  colorNavBadge?: keyof Colors;
  highlightTitle?: boolean;
};
export interface MenuItemsProps extends BoxProps {
  items: MenuItemsType[];
  activeItem?: string;
  activeSubItem?: string;
  isMobileMenuOpened?: boolean;
  mobileMenuCallback?: (s: boolean) => void;
  baseAwsUrl: string;
}
