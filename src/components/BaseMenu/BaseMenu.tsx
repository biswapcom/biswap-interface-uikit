import React, { useState, useEffect, FC } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";

// styles
import { ClickableElementContainer } from "./styles";

// types
import { BaseMenuProps } from "./types";

// utils
import { getPortalRoot } from "../../util";

const BaseMenu: FC<BaseMenuProps> = ({ component, options, children, isOpen = false }) => {
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [menuElement, setMenuElement] = useState<HTMLElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(isOpen);

  const placement = options?.placement ?? "bottom";
  const offset = options?.offset ?? [0, 10];
  const padding = options?.padding ?? { left: 16, right: 16 };

  // Allow for component to be controlled
  useEffect(() => {
    setIsMenuOpen(isOpen);
  }, [isOpen, setIsMenuOpen]);

  useEffect(() => {
    const handleClickOutside = ({ target }: Event) => {
      if (target instanceof Node) {
        if (
          menuElement !== null &&
          targetElement !== null &&
          !menuElement.contains(target) &&
          !targetElement.contains(target)
        ) {
          setIsMenuOpen(false);
        }
      }
    };
    if (menuElement !== null) {
      document.addEventListener("click", handleClickOutside, { passive: true });
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuElement, targetElement]);

  const toggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const open = () => {
    setIsMenuOpen(true);
  };

  const close = () => {
    setIsMenuOpen(false);
  };

  const { styles, attributes } = usePopper(targetElement, menuElement, {
    placement,
    modifiers: [
      { name: "offset", options: { offset } },
      { name: "preventOverflow", options: { padding } },
    ],
  });

  const menu = (
    <div ref={setMenuElement} style={styles.popper} {...attributes.popper}>
      {typeof children === "function"
        ? // @ts-ignore
          children({ toggle, open, close })
        : children}
    </div>
  );

  const portal = getPortalRoot();
  const renderMenu = portal ? createPortal(menu, portal) : menu;

  return (
    <>
      <ClickableElementContainer ref={setTargetElement} onClick={toggle}>
        {component}
      </ClickableElementContainer>
      {isMenuOpen && renderMenu}
    </>
  );
};

export default BaseMenu;
