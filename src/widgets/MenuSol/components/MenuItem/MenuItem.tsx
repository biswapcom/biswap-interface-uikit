import React, { FC, useContext } from "react";

// context
import { MenuSolContext } from "../../context";

// styles
import StyledMenuItem from "./styles";

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
  const { linkComponent } = useContext(MenuSolContext);
  const itemLinkProps: Object = href
    ? {
        as: linkComponent,
        href,
      }
    : {
        as: "div",
      };

  return (
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
  );
};

export default MenuItem;
