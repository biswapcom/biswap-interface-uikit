import styled, { css } from "styled-components";

// types
import type { StyledMenuItemProps } from "./types";

// components
import { Box } from "../Box";

export const StyledMenuItemContainer = styled(Box)<StyledMenuItemProps>`
  position: relative;

  ${({ $isActive, $variant }) =>
    $isActive &&
    $variant === "subMenu" &&
    `
      &:after{
        content: "";
        position: absolute;
        bottom: 0;
        height: 4px;
        width: 100%;
        border-radius: 2px 2px 0 0;
      }
    `};
`;

const CommonLinkStyles = ({ $isActive, $statusColor, $variant, $highlightTitle }: StyledMenuItemProps) => css`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => ($isActive ? theme.colors.secondary : theme.colors.white)};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.4s ease;

  ${$statusColor &&
  `
    &:after {
      content: "";
      height: 8px;
      width: 8px;
      margin-left: 12px;
      border-radius: 100%;
    }
  `}

  ${$variant === "default"
    ? css`
        height: 72px;
        padding: 0 8px;

        ${({ theme }) => theme.mediaQueries.lg} {
          padding: 0 12px;
        }
      `
    : css`
        height: 42px;
        padding: 4px 4px 0 4px;
      `}

  &:hover {
    div {
      color: ${({ theme }) => ($highlightTitle ? theme.colors.warningHover : theme.colors.pastelBlue)};
    }

    svg {
      fill: ${({ theme }) => theme.colors.pastelBlue};
    }

    ${$variant === "default" && "border-radius: 16px;"};
  }
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  ${CommonLinkStyles};
`;

export default StyledMenuItem;
