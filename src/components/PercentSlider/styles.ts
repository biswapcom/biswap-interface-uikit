import { InputHTMLAttributes } from "react";
import styled from "styled-components";

// image
import circle from "./circle.svg";

// components
import { Box, Flex } from "../Box";

const getBaseThumbStyles = () => `
  -webkit-appearance: none;
  background-image: url(${circle});
  background-color: transparent;
  box-shadow: none;
  border: 0;
  width: 20px;
  height: 20px;
  transition: 200ms transform;
  transform: translateY(2px);

  &:hover {
    transform: scale(1.1) translateY(2px);
  }
`;

export const StyledInput = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  z-index: 1;

  ::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }

  ::-moz-range-thumb {
    ${getBaseThumbStyles}
  }

  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled(Box)<{
  darkMode?: boolean;
  disabled: boolean;
}>`
  position: absolute;
  height: 4px;
  top: 10px;
  width: calc(100% - 8px);
  border-radius: 20px;
  background-color: ${({ theme, disabled, darkMode }) =>
    theme.colors[disabled ? "gray900" : darkMode ? "dark400" : "gray300"]};
`;

export const BarProgress = styled(Box)`
  position: absolute;
  top: 10px;
  height: 4px;
  margin-left: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const PointsContainer = styled(Flex)`
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
`;

export const PercentSliderLabel = styled(Flex)<{
  left: number;
  bannerPosition: "top" | "bottom";
}>`
  position: absolute;
  align-items: center;
  left: ${({ left }) => `${left}%`};
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.tooltip};
  transform: translateX(-50%) translateY(calc(${({ bannerPosition }) =>
    bannerPosition === "top" ? "-100% - 10px" : "100%"}));
  z-index: ${({ theme }) => theme.zIndices.dropdown};
    
  ${({ bannerPosition }) => (bannerPosition === "top" ? "top: 0" : "bottom: 0")};

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    display: block;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    z-index: ${({ theme }) => theme.zIndices.dropdown};
    transform: translate(-50%, ${({ bannerPosition }) => (bannerPosition === "top" ? "100%" : "-100%")});
      
    ${({ bannerPosition }) => (bannerPosition === "top" ? "bottom: 0" : "top: 0")};
      
    ${({ bannerPosition, theme }) =>
      `border-${bannerPosition === "top" ? "top" : "bottom"}: 6px solid ${theme.colors.tooltip}`};
`;
