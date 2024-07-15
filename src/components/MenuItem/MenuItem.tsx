import React, { FC, useContext } from "react";

// context
import { MenuContext } from "../../widgets/Menu/context";

// styles
import StyledMenuItem, { StyledMenuItemContainer } from "./styles";

// types
import type { MenuItemProps } from "./types";

const MenuItem: FC<MenuItemProps> = ({
  children,
  href,
  isActive = false,
  variant = "default",
  statusColor,
  highlightTitle,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const itemLinkProps: Object = href
    ? {
        as: linkComponent,
        href,
      }
    : {
        as: "div",
      };

  return (
    <StyledMenuItemContainer $isActive={isActive} $variant={variant}>
      <StyledMenuItem
        {...itemLinkProps}
        $isActive={isActive}
        $variant={variant}
        $statusColor={statusColor}
        $highlightTitle={highlightTitle}
        {...props}
      >
        {children}
      </StyledMenuItem>
    </StyledMenuItemContainer>
  );
};

export default MenuItem;
