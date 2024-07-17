import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { variant as systemVariant } from "styled-system";

// types
import { type TabBarItemProps, Scales, Variants } from "./types";
import { type PolymorphicComponent } from "../../util";

// hooks
import { useMatchBreakpoints } from "../../contexts";

// theme
import { barItemScaleVariant, barVariants, menuIconScaleVariants } from "./theme";

// components
import IconComponent from "../Svg/IconComponent";
import { Flex } from "../Box";

const TabItem = styled.button<TabBarItemProps>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  border: 0;
  outline: 0;
  font-family: inherit;
  font-weight: 600;
  line-height: 1;
  background-color: transparent;
  transition:
    background-color 0.3s,
    opacity 0.3s,
    color 0.3s;
  cursor: pointer;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  ${systemVariant({
    variants: barVariants,
  })}

  ${systemVariant({
    prop: "scale",
    variants: barItemScaleVariant,
  })}
  
  ${({ isActive, variant, theme }) =>
    isActive &&
    css`
      color: ${theme.colors[variant === Variants.DARK ? "white" : "dark800"]};
    `}
`;

const TabBarItem: PolymorphicComponent<TabBarItemProps, "button"> = ({
  isActive = false,
  variant,
  setWidth,
  itemIndex = 0,
  activeButtonIndex,
  blockOffset,
  iconName = "",
  iconColor = "",
  scale = Scales.MD,
  as,
  onItemClick,
  onClick,
  children,
  ...props
}: TabBarItemProps): JSX.Element => {
  const { isMobile, isTablet, isDesktop } = useMatchBreakpoints();

  const ref = useRef<HTMLButtonElement>(null);

  const itemWidth = ref?.current?.clientWidth ?? 0;

  useEffect(() => {
    if (itemWidth && setWidth) {
      setWidth((prev: Array<number>) => {
        return prev.length > itemIndex
          ? prev.map((i, index) => (index === itemIndex ? itemWidth : i))
          : [...prev, itemWidth];
      });
    }
    // eslint-disable-next-line
  }, [blockOffset, itemWidth, activeButtonIndex, isMobile, isTablet, isDesktop]);

  const omItemClickHandler = () => {
    onItemClick?.(itemIndex);
    onClick?.();
  };

  const iconSizes = menuIconScaleVariants[scale];

  const getTabMenuIcons = () => {
    return (
      <IconComponent
        width={iconSizes.width}
        iconName={iconName}
        color={iconColor ?? "currentColor"}
        mr={iconSizes.marginRight}
      />
    );
  };

  return (
    <TabItem
      onClick={omItemClickHandler}
      isActive={isActive}
      ref={ref}
      as={as}
      variant={variant}
      scale={scale}
      {...props}
    >
      <Flex height={iconSizes.width} alignItems="center">
        {getTabMenuIcons()}
        {children}
      </Flex>
    </TabItem>
  );
};

export default TabBarItem;
