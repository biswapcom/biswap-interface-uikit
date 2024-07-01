import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { variant as systemVariant } from "styled-system";

// theme
import { styleVariants, scaleVariants, markerScales } from "./theme";

// components
import { Box } from "../Box";
import Marker from "../MenuItem/Marker";

// hooks
import { useTooltip } from "../../hooks";
import { useMatchBreakpoints } from "../../contexts";

// utils
import { isTouchDevice, PolymorphicComponent } from "../../util";
import { getColorKey, getHoverKey } from "./helpers";

// types
import {
  type BaseButtonMenuItemProps,
  type ButtonMenuItemProps,
  type ColorKey,
  type HoverKey,
  Scales,
  Variants,
} from "./types";

interface ItemButtonProps extends BaseButtonMenuItemProps {
  colorKey: ColorKey;
  hoverKey: HoverKey;
}

const MenuItemButton: PolymorphicComponent<ItemButtonProps, "button"> = styled.button<ItemButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  border: 0;
  outline: 0;
  font-family: inherit;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  background-color: transparent;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition:
    background-color 0.2s,
    opacity 0.3s,
    color 0.3s;
  -webkit-tap-highlight-color: transparent;

  ${systemVariant({
    variants: styleVariants,
  })}

  ${systemVariant({
    prop: "scale",
    variants: scaleVariants,
  })}

  ${({ isActive, colorKey, hoverKey }) =>
    !isActive &&
    css`
      color: ${({ theme }) => theme.colors[colorKey]};

      &:hover {
        color: ${({ theme }) => theme.colors[hoverKey]};
      }

      &:hover:not(:disabled):not(:active) {
        background-color: transparent;
      }
    `}
`;

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = Variants.DARK,
  properties,
  scale = Scales.MD,
  as,
  setWidth,
  itemIndex = 0,
  activeButtonIndex,
  blockOffset,
  onItemClick,
  onClick,
  ...props
}: ButtonMenuItemProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  const { isMobile, isTablet, isXs, isSm, isMs, isLg, isXl, isXll, isXxl } = useMatchBreakpoints();
  const disableStopPropagation = isMobile || isTablet || isTouchDevice();
  const itemWidth = ref?.current?.clientWidth ?? 0;

  const { targetRef, tooltip, tooltipVisible } = useTooltip(properties?.tooltipText, {
    placement: "top",
    disableStopPropagation,
  });

  useEffect(() => {
    if (itemWidth && setWidth) {
      setWidth((prev: number[]) => {
        return prev.length > itemIndex
          ? prev.map((i, index) => (index === itemIndex ? itemWidth : i))
          : [...prev, itemWidth, itemIndex];
      });
    }
    //eslint-disable-next-line
  }, [blockOffset, activeButtonIndex, itemWidth, isXs, isSm, isMs, isLg, isXl, isXll, isXxl]);

  const omItemClickHandler = (e: Event) => {
    onItemClick && onItemClick(itemIndex);
    onClick && onClick();
    disableStopPropagation && e.stopPropagation();
  };

  return (
    <Box ref={targetRef} position="relative" width="100%">
      {properties?.tooltipText && !properties.dontShowTooltip && tooltipVisible && tooltip}
      <MenuItemButton
        onClick={omItemClickHandler}
        isActive={isActive}
        ref={ref}
        as={as}
        variant={variant}
        hoverKey={getHoverKey(variant)}
        colorKey={getColorKey(variant)}
        scale={scale}
        {...props}
      />
      {properties?.markerColor && <Marker color={properties?.markerColor || "success"} {...markerScales[scale]} />}
    </Box>
  );
};

export default ButtonMenuItem;
