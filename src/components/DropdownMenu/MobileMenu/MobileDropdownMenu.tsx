import React, { FC, useEffect, useState } from "react";

// hooks
import { useMatchBreakpoints } from "../../../contexts";

// components
import MobileMenu from "./MobileMenu";
import { MenuItem } from "../../MenuItem";
import Burger from "./ButtonBurger";

// types
import type { MenuItemsProps, MenuItemsType } from "../../MenuItems/types";

const MobileDropdownMenu: FC<MenuItemsProps> = ({
  items,
  activeItem,
  isMobileMenuOpened = false,
  mobileMenuCallback,
  baseAwsUrl,
  mobileLangSelector,
}) => {
  const [configItems, setConfigItems] = useState<MenuItemsType[]>(items);

  const { isMobile } = useMatchBreakpoints();

  useEffect(() => {
    if (isMobile) {
      setConfigItems(
        items.map((item) => {
          if (item.isExtended) {
            item.items = item?.items
              ?.filter((_, index) => index % 2 === 0)
              .concat(item.items.filter((_, index) => index % 2 === 1));
          }

          return item;
        })
      );
    } else {
      setConfigItems(items);
    }
  }, [isMobile, items]);

  return (
    <MobileMenu
      items={configItems}
      mobileMenuCallback={mobileMenuCallback}
      isMobileNav
      activeItem={activeItem}
      baseAwsUrl={baseAwsUrl}
      mobileLangSelector={mobileLangSelector}
    >
      <MenuItem>
        <Burger open={isMobileMenuOpened} />
      </MenuItem>
    </MobileMenu>
  );
};

export default MobileDropdownMenu;
