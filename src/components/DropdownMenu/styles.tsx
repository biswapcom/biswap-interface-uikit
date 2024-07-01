import { ReactNode } from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { Link } from "react-router-dom";

// theme
import { Colors } from "../../theme";

// components
import { Text } from "../Text";
import { Box, Grid } from "../Box";

// types
import type { StyledDropdownMenuInnerLinkItemProps, StyledDropdownMenuItemProps } from "./types";

// hooks
import { useMatchBreakpoints } from "../../contexts";

const getTextColor = ({
  $isActive,
  disabled,
  theme,
}: StyledDropdownMenuItemProps & {
  theme: DefaultTheme;
  $isActive: boolean;
}) => {
  if (disabled) return theme.colors.gray700;
  if ($isActive) return theme.colors.primary;

  return theme.colors.backgroundDark;
};

export const InnerLinksBlockContainer = styled(Box)<{ padded: boolean }>`
  padding-top: 16px;
  padding-left: ${({ padded }) => padded && "58px"};
`;

const CommonDropdownMenuInnerLinkItem = () => css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  &:hover {
    .inner-chevron {
      margin-right: 4px;
      transition: margin-right 150ms linear;
    }
  }
`;

export const DropdownMenuInnerLinkItem = styled(Box)<StyledDropdownMenuInnerLinkItemProps>`
  ${CommonDropdownMenuInnerLinkItem}
`;

export const DropdownMenuInnerOuterLinkItem = styled.a<StyledDropdownMenuInnerLinkItemProps>`
  ${CommonDropdownMenuInnerLinkItem}
`;

export const CommonLinkStyle = ({
  disabled,
  $isActive,
  $hasIcon,
  label,
}: StyledDropdownMenuItemProps & {
  $isActive: boolean;
  $hasIcon?: boolean;
  label?: string | ReactNode;
}) => {
  const { isMobile } = useMatchBreakpoints();

  return css`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 40px;
    border: 0;
    outline: 0;
    line-height: 20px;
    color: ${({ theme }) => getTextColor({ theme, disabled, $isActive })};
    font-size: 14px;
    font-weight: 600;
    cursor: ${disabled ? "not-allowed" : "pointer"};

    .arrow-icon {
      ${!(isMobile && (label === "Marketplace" || label === "GameFi")) &&
      `
        visibility: hidden;
        opacity: 0;
      `}
    }

    &:hover:not(:disabled) {
      color: ${({ theme }) => !$hasIcon && theme.colors.primary};

      svg {
        opacity: 0.85;
      }

      .arrow-icon {
        visibility: visible;
        transition:
          visibility 250ms linear,
          opacity 150ms linear;
        opacity: 1;
      }
    }

    &:active:not(:disabled) {
      opacity: 0.85;
      transform: translateY(1px);
    }
  `;
};

export const DropdownMenuItem = styled.button<
  StyledDropdownMenuItemProps & {
    $isActive: boolean;
    $hasIcon?: boolean;
  }
>`
  ${CommonLinkStyle}
`;

export const DropdownInternalMenuItem = styled(Link)<
  StyledDropdownMenuItemProps & {
    $isActive: boolean;
    $hasIcon?: boolean;
    label?: string | ReactNode;
  }
>`
  ${CommonLinkStyle}
`;

export const StyledDropdownMenuItemContainer = styled(Box)<{
  isOpenMenuItem?: boolean;
  disabled?: boolean;
}>`
  position: relative;
  margin-bottom: 24px;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "initial")};

  &:last-child {
    margin-bottom: ${({ isOpenMenuItem }) => (isOpenMenuItem ? "16px" : "32px")};

    ${({ theme }) => theme.mediaQueries.sm} {
      margin-bottom: 24px;
    }
  }

  &:first-child > ${DropdownMenuItem} {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child > ${DropdownMenuItem} {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const DropdownMenuDivider = styled.hr`
  margin: 0;
  border-color: ${({ theme }) => theme.colors.gray200};
  border-style: solid;
  border-width: 1px 0 0;
  ${({ color }) => `
    color: ${color};
    background-color: ${color};
    border-color: ${color};
`}
`;

export const StyledDropdownMenu = styled(Grid)<{
  $isOpen: boolean;
  $isExtended?: boolean;
}>`
  grid-template-columns: 1fr;
  width: 352px;
  padding: 24px 24px 0;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow:
    0 20px 36px -8px rgba(0, 26, 67, 0.24),
    0 1px 1px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.colors.white};
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
  transition:
    opacity 250ms linear,
    visibility 350ms linear;

  ${({ $isOpen }) =>
    !$isOpen &&
    `
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
  `}

  ${({ $isExtended }) =>
    $isExtended &&
    `
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    width: 680px;
  `}
`;

export const LinkStatus = styled(Text)<{ color: keyof Colors }>`
  margin-left: 8px;
  padding: 0 8px;
  border: 2px solid ${({ theme, color }) => theme.colors[color]};
  border-radius: ${({ theme }) => theme.radii.default};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
`;

export const BannerPlacementItem = styled(Box)`
  margin: 0 -14px -18px -14px;
`;

export const BorderMobileMenuItem = styled(Box)<{ isHighlighted?: boolean }>`
  padding: 0 12px;
  border-left: ${({ theme, isHighlighted }) =>
    `4px solid ${isHighlighted ? theme.colors.warningPress : "transparent"}`};

  ${({ theme }) => theme.mediaQueries.sm} {
    border-left: none;
  }
`;
