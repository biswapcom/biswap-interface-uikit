import React, { cloneElement, Children, ReactElement, useState, useEffect, FC } from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { space, SpaceProps } from "styled-system";

// types
import { type ButtonMenuProps, Scales, Variants } from "./types";

// utils
import getRgba from "../../util/getRgba";

// helpers
import { getOffset } from "./helpers";

// hooks
import { useMatchBreakpoints } from "../../contexts";

// components
import { Box } from "../Box";

interface StyledButtonMenuProps extends ButtonMenuProps {
  theme: DefaultTheme;
}

interface IWrapper extends SpaceProps {
  variant: string;
  withoutBackground?: boolean;
  fullWidth: boolean;
  flatTop: boolean;
  flatBottom: boolean;
  scrollX: boolean;
}

interface ISelection {
  offset: number;
  width: number;
  scale: string;
  variant: string;
  flatTop: boolean;
  flatBottom: boolean;
  withoutAnimation: boolean;
}

const Wrapper = styled(Box)<IWrapper>`
  position: relative;
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  padding: 4px;
  border-radius: 10px;
  background-color: ${({ theme, withoutBackground, variant }) =>
    withoutBackground
      ? "transparent"
      : variant === Variants.DARK
        ? theme.colors.tooltip
        : getRgba(theme.colors.pastelBlue, theme, 0.08)};
  overflow: hidden;

  ${({ scrollX }) =>
    scrollX &&
    css`
      overflow-x: scroll;
    `};

  ${({ flatTop }) =>
    flatTop &&
    css`
      border-radius: 0 0 8px 8px;
      padding: 0;
    `}

  ${({ flatBottom }) =>
    flatBottom &&
    css`
      border-radius: 8px 8px 0 0;
      padding: 0;
    `}

  &::-webkit-scrollbar {
    display: none;
  }

  ${space}
`;

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
  position: relative;
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  & > button,
  & > div,
  & > a {
    flex-grow: 1;

    ${({ equalElementWidth }) =>
      equalElementWidth &&
      css`
        flex: 1;
      `}
  }

  & > button,
  & > div,
  & a {
    box-shadow: none;
  }

  ${({ disabled, theme, variant }) => {
    if (disabled) {
      return `
        opacity: 0.32;

        & > button:disabled {
          background-color: transparent;
          color: ${variant === Variants.DARK ? theme.colors.pastelBlue : theme.colors.gray900};
        }
    `;
    }

    return "";
  }}
`;

const Selection = styled(Box)<ISelection>`
  position: absolute;
  top: 50%;
  left: ${({ offset }) => `${offset}px`};
  width: ${({ width }) => `${width}px`};
  height: calc(100% - 8px);
  border-radius: ${({ scale }) => (scale === Scales.SM ? "6px" : "8px")};
  background-color: ${({ theme, variant }) =>
    theme.colors[variant === Variants.DARK ? "dark500" : variant === Variants.LIGHT ? "white" : "warning"]};
  transform: translateY(-50%);

  ${({ withoutAnimation }) =>
    !withoutAnimation &&
    css`
      transition:
        left 0.3s ease,
        width 0.3s ease;
    `}

  ${({ flatTop, scale }) =>
    flatTop &&
    css`
      border-radius: ${scale === Scales.SM ? "0 0 6px 6px" : "0 0 8px 8px"};
      height: calc(100% - 4px);
      top: calc(50% - 2px);
    `}

  ${({ flatBottom, scale }) =>
    flatBottom &&
    css`
      border-radius: ${scale === Scales.SM ? "6px 6px 0 0" : "8px 8px 0 0"};
      height: calc(100% - 4px);
      top: calc(50% + 2px);
    `}

  ${({ theme, variant }) =>
    variant === Variants.DARK && `box-shadow: 0 2px 4px ${getRgba(theme.colors.backgroundDark, theme, 0.08)}`};
`;

const ButtonMenu: FC<ButtonMenuProps> = ({
  activeIndex = 0,
  scale = Scales.MD,
  variant = Variants.DARK,
  onItemClick,
  disabled,
  children,
  fullWidth = false,
  flatBottom = false,
  flatTop = false,
  withoutBackground = false,
  scrollX = false,
  equalElementWidth,
  withoutAnimation = false,
  itemsProperties = [],
  ...props
}) => {
  const [widthsArr, setWidthsArr] = useState<number[]>([]);
  const [blockOffset, setBlockOffset] = useState<number>(0);
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(null);

  const { isDesktop, isMobile, isTablet } = useMatchBreakpoints();

  useEffect(() => {
    setActiveButtonIndex(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    if (activeButtonIndex !== null) {
      setBlockOffset(widthsArr.slice(0, activeButtonIndex).reduce((sum, elem) => sum + elem, 0));
    }
  }, [widthsArr, activeButtonIndex, isDesktop, isMobile, isTablet]);

  return (
    <Wrapper
      flatBottom={flatBottom}
      flatTop={flatTop}
      fullWidth={fullWidth}
      withoutBackground={withoutBackground}
      variant={variant}
      scrollX={scrollX}
      {...props}
    >
      <Selection
        flatTop={flatTop}
        flatBottom={flatBottom}
        scale={scale}
        width={widthsArr[activeIndex]}
        offset={getOffset(blockOffset, flatTop || flatBottom)}
        variant={variant}
        withoutAnimation={withoutAnimation}
      />
      <StyledButtonMenu
        disabled={disabled}
        variant={variant}
        fullWidth={fullWidth}
        withoutBackground={withoutBackground}
        equalElementWidth={equalElementWidth}
        {...props}
      >
        {Children.map(children, (child: ReactElement, index) => {
          return cloneElement(child, {
            isActive: activeIndex === index,
            onItemClick: () => onItemClick?.(index),
            setWidth: setWidthsArr,
            itemIndex: index,
            activeButtonIndex,
            blockOffset,
            properties: itemsProperties.find((i) => i.index === index),
            scale,
            variant,
            disabled,
            flatBottom,
            flatTop,
          });
        })}
      </StyledButtonMenu>
    </Wrapper>
  );
};

export default ButtonMenu;
