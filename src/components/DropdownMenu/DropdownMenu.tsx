import React, { FC, useContext, useEffect, useState } from "react";
import { usePopper } from "react-popper";

// context
import { MenuContext } from "../../widgets/Menu/context";

// components
import { Box } from "../Box";
import { MenuItemContent, DropdownMenuItemContainer } from "./components";

// styles
import { StyledDropdownMenu } from "./styles";

// types
import { type DropdownMenuProps, DropdownMenuItemType } from "./types";

const DropdownMenu: FC<DropdownMenuProps> = ({
  children,
  activeItem = "",
  items = [],
  isExtended = false,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null);

  const { linkComponent } = useContext(MenuContext);
  const hasItems = items.length > 0;
  const hasMoreThanItems = items.length > 1;
  const { styles, attributes, update } = usePopper(targetRef, tooltipRef, {
    strategy: "fixed",
    placement: "bottom-start",
    modifiers: [{ name: "offset", options: { offset: [0, -14] } }],
  });

  useEffect(() => {
    const showDropdownMenu = async () => {
      update && (await update());
      setIsOpen(true);
    };

    const hideDropdownMenu = (evt: MouseEvent | TouchEvent) => {
      const target = evt.target as Node;
      return target && !tooltipRef?.contains(target) && setIsOpen(false);
    };

    targetRef?.addEventListener("mouseenter", showDropdownMenu, {
      passive: true,
    });
    targetRef?.addEventListener("mouseleave", hideDropdownMenu, {
      passive: true,
    });

    return () => {
      targetRef?.removeEventListener("mouseenter", showDropdownMenu);
      targetRef?.removeEventListener("mouseleave", hideDropdownMenu);
    };
  }, [targetRef, tooltipRef, setIsOpen, update]);

  return (
    <Box ref={setTargetRef} {...props}>
      <Box>{children}</Box>
      {hasItems && (
        <StyledDropdownMenu
          style={styles.popper}
          ref={setTooltipRef}
          {...attributes.popper}
          $isOpen={isOpen}
          $isExtended={isExtended && hasMoreThanItems}
        >
          {items.map(
            (
              {
                type = DropdownMenuItemType.INTERNAL_LINK,
                label,
                rightIconFill,
                description,
                href = "/",
                status,
                leftIcon = "",
                rightIcon = "",
                links = [],
                bannerRenderer,
                target,
                mobileTarget,
                badgeType,
                badgeTitle,
                ...itemProps
              },
              itemIndex
            ) => {
              const getMenuItemContent = (icon: string = rightIcon) => (
                <MenuItemContent
                  label={label}
                  fill={rightIconFill}
                  leftIcon={leftIcon}
                  rightIcon={icon}
                  description={description}
                  status={status}
                  badgeType={badgeType}
                  badgeTitle={badgeTitle}
                  {...itemProps}
                />
              );
              const isActive = href === activeItem;
              const lastItem =
                itemIndex === items?.length - 1 || items[itemIndex + 1]?.type === DropdownMenuItemType.BANNER;

              return (
                <DropdownMenuItemContainer
                  key={itemIndex}
                  isActive={isActive}
                  leftIcon={leftIcon}
                  getMenuItemContent={getMenuItemContent}
                  links={links}
                  setIsOpen={setIsOpen}
                  linkComponent={linkComponent}
                  href={href}
                  bannerRenderer={bannerRenderer}
                  type={type}
                  target={target}
                  mobileTarget={mobileTarget}
                  lastItem={lastItem}
                  {...itemProps}
                />
              );
            }
          )}
        </StyledDropdownMenu>
      )}
    </Box>
  );
};

export default DropdownMenu;
