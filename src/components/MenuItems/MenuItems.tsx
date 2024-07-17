import React, { FC, Fragment } from "react";

// components
import { Box, Flex } from "../Box";
import { DropdownMenu } from "../DropdownMenu";
import MobileDropdownMenu from "../DropdownMenu/MobileMenu/MobileDropdownMenu";
import { MenuItem, MenuItemDivider, MenuItemMarker } from "../MenuItem";
import IconComponent from "../Svg/IconComponent";
import { BodyText, Scales } from "../Typography";

// utils
import { isTouchDevice } from "../../util";

// types
import { type MenuItemsProps, ItemTypes } from "./types";

// hooks
import { useMatchBreakpoints } from "../../contexts";

const MenuItems: FC<MenuItemsProps> = ({
  items = [],
  activeItem,
  activeSubItem,
  isMobileMenuOpened = false,
  mobileMenuCallback,
  baseAwsUrl,
  mobileLangSelector,
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
          mobileLangSelector={mobileLangSelector}
        />
      )}
      {items.map(
        (
          {
            label,
            items: menuItems = [],
            href,
            icon = "",
            isExtended,
            showItemsOnMobile,
            type,
            hidden,
            highlightTitle,
          },
          index
        ) => {
          const isMarker = items[index]?.showNavBadge;
          const isMarkerColor = items[index]?.colorNavBadge;
          const isHighlighted = items[index].highlightTitle;
          const statusColor = menuItems?.find((menuItem) => menuItem.status !== undefined)?.status?.color;
          const isActive = activeItem === href;
          const linkProps = isTouchDevice() && menuItems && menuItems.length > 0 ? {} : { href };
          const visualize = (isDesktop || (isTablet && showItemsOnMobile)) && !hidden;

          return (
            visualize && (
              <Fragment key={`${label}#${href}`}>
                <DropdownMenu
                  key={`${label}#${href}#${icon}`}
                  items={menuItems}
                  py={1}
                  activeItem={activeSubItem}
                  isExtended={isExtended}
                >
                  <MenuItem
                    {...linkProps}
                    isActive={isActive}
                    statusColor={statusColor}
                    highlightTitle={highlightTitle}
                  >
                    {type === ItemTypes.DIVIDER && <MenuItemDivider />}
                    {icon && <IconComponent mr="8px" iconName={icon} color="white" />}
                    {label && (
                      <Box ml={!href ? "8px" : 0} position="relative">
                        {/*@ts-ignore*/}
                        {isMarker && <MenuItemMarker color={isMarkerColor} />}
                        <BodyText color={isHighlighted ? "warningPress" : "white"} scale={Scales.SIZE14} bold>
                          {label}
                        </BodyText>
                      </Box>
                    )}
                  </MenuItem>
                </DropdownMenu>
              </Fragment>
            )
          );
        }
      )}
    </Flex>
  );
};

export default MenuItems;
