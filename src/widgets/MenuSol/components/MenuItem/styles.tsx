import styled, { css } from "styled-components";

// types
import type { StyledMenuItemProps } from "./types";

const CommonLinkStyles = ({ $isActive, $statusColor, $variant, $highlightTitle }: StyledMenuItemProps) => css`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => ($isActive ? theme.colors.secondary : theme.colors.white)};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.4s ease;

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
    color: ${({ theme }) => theme.colors.pastelBlue};

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
