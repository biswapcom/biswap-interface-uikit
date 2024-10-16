import React, { FC } from "react";

// components
import { Box } from "../Box";
import { MenuItem } from "../MenuItem";
import IconComponent from "../Svg/IconComponent";

// styles
import StyledSubMenuItems from "./styles";

// types
import { SubMenuItemsProps } from "./types";

const SubMenuItems: FC<SubMenuItemsProps> = ({ items = [], activeItem, isMobileOnly = false, ...props }) => {
  return (
    <StyledSubMenuItems
      justifyContent={[isMobileOnly ? "flex-end" : "start", null, "center"]}
      {...props}
      pl={["12px", null, "0px"]}
      $isMobileOnly={isMobileOnly}
    >
      {items.map(
        ({ label, href, iconName, itemProps }) =>
          label && (
            <Box key={label} mr="20px">
              <MenuItem href={href} isActive={href === activeItem} variant="subMenu" {...itemProps}>
                {iconName && (
                  <IconComponent
                    color={href === activeItem ? "secondary" : "pastelBlue"}
                    iconName={iconName}
                    mr="4px"
                  />
                )}
                {label}
              </MenuItem>
            </Box>
          )
      )}
    </StyledSubMenuItems>
  );
};

export default SubMenuItems;
