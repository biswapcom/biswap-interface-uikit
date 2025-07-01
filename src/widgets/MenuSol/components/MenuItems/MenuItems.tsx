import React, { FC, Fragment } from "react";

// components
import { Flex } from "../../../../components/Box";
import MobileDropdownMenu from "../DropdownMenu/MobileMenu/MobileDropdownMenu";
import { MenuItem } from "../MenuItem";

// utils
import { isTouchDevice } from "../../../../util";

// types
import { type MenuItemsProps, ItemTypes } from "./types";

// hooks
import { useMatchBreakpoints } from "../../../../contexts";

const MenuItems: FC<MenuItemsProps> = ({
  items = [],
  activeItem,
  activeSubItem,
  isMobileMenuOpened = false,
  mobileMenuCallback,
  baseAwsUrl,
  ...props
}) => {
  const { isDesktop, isTablet } = useMatchBreakpoints();

  return (
    <Flex {...props} alignItems="center">
      {!isDesktop && (
        <MobileDropdownMenu
          items={items}
          activeItem={activeItem}
          isMobileMenuOpened={isMobileMenuOpened}
          mobileMenuCallback={mobileMenuCallback}
          baseAwsUrl={baseAwsUrl}
        />
      )}
      {items.map(({ label, items: menuItems = [], href, showItemsOnMobile, hidden, highlightTitle }, index) => {
        const statusColor = menuItems?.find((menuItem) => menuItem.status !== undefined)?.status?.color;
        const isActive = activeItem === href;
        const linkProps = isTouchDevice() && menuItems && menuItems.length > 0 ? {} : { href };
        const visualize = (isDesktop || (isTablet && showItemsOnMobile)) && !hidden;

        return (
          visualize && (
            <Fragment key={`${label}#${href}`}>
              <MenuItem {...linkProps} isActive={isActive} statusColor={statusColor} highlightTitle={highlightTitle}>
                {label}
              </MenuItem>
            </Fragment>
          )
        );
      })}
    </Flex>
  );
};

export default MenuItems;
