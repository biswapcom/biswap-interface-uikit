import styled from "styled-components";

// components
import { Box, Flex } from "../Box";
import { Text } from "../Text";
import SliderIcon from "./Slider.svg";

// type
import type { Colors } from "../../theme";

export const Wrapper = styled(Flex)`
  flex-direction: column;
`;

export const SliderContainer = styled(Box)`
  position: relative;
  top: 0;
  left: 0;
  margin-bottom: 24px;
`;

export const BarBackground = styled(Box)`
  width: 100%;
  height: 4px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.pastelBlue};
  opacity: 0.16;
`;

export const BarProgress = styled(Box)<{ progress: number }>`
  width: ${({ progress }) => `${progress}%`};
  height: 4px;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.primary};
  transform: translateY(-100%);
`;

export const StyledInput = styled.input`
  position: relative;
  height: 20px;
  margin: 2px 0;
  transform: translateY(-18px);
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;

  ::-webkit-slider-thumb {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: url(${SliderIcon});
    cursor: pointer;
    transition: 0.1s all;
    -webkit-appearance: none;

    :hover {
      transform: scale(1.1);
    }
  }
  ::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    transition: 0.1s all;
    -webkit-appearance: none;

    :hover {
      transform: scale(1.1);
    }
  }
  ::-ms-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: url(${SliderIcon});
    cursor: pointer;
    transition: 0.1s all;
    -webkit-appearance: none;

    :hover {
      transform: scale(1.1);
    }
  }
`;

export const BunnySlider = styled(Box)`
  position: absolute;
  width: 100%;
`;

export const BreakPointsWrap = styled(Flex)`
  position: absolute;
  top: -3px;
  left: 0;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
`;

export const Point = styled.span<{ pointColor: keyof Colors }>`
  display: block;
  width: 10px;
  height: 10px;
  border: ${({ theme, pointColor }) => `3px solid ${theme.colors[pointColor]}`};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
`;

export const InfoBlock = styled(Flex)`
  justify-content: space-between;
`;

export const TitleText = styled(Text)`
  line-height: 20px;
  color: ${({ theme }) => theme.colors.dark800};
  font-size: 14px;
  font-weight: 600;
`;

export const PercentageAmount = styled(Text)`
  margin: 0 4px;
  font-size: 16px;
  font-weight: 600;
`;

export const InfoNode = styled(Flex)`
  justify-content: flex-start;
  align-items: center;
`;

export const RBPrice = styled(Text)`
  text-align: right;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 12px;
`;

export const PercentWrap = styled(Box)`
  position: relative;
  width: calc(100% - 20px);
  margin: 0 10px;
  background: transparent;
`;

export const PercentBanner = styled(Flex)<{
  left: number;
  bannerPosition: "top" | "bottom";
}>`
  position: absolute;
  left: ${({ left }) => `${left}%`};
  align-items: center;
  padding: 8px 4px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.tooltip};
  transform: translateX(-50%) translateY(calc(${({ bannerPosition }) =>
    bannerPosition === "top" ? "-100% - 20px" : "100% + 20px"}));
    
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
    transform: translate(-50%, ${({ bannerPosition }) => (bannerPosition === "top" ? "100%" : "-100%")});
      
    ${({ bannerPosition }) => (bannerPosition === "top" ? "bottom: 0" : "top: 0")};
      
    ${({ bannerPosition, theme }) =>
      `border-${bannerPosition === "top" ? "top" : "bottom"}: 6px solid ${theme.colors.tooltip}`};
`;

export const Divider = styled.span`
  width: 2px;
  height: 10px;
  margin: 0 4px 0 4px;
  background-color: ${({ theme }) => theme.colors.gray900};
`;

export const PercentText = styled(Text)`
  min-width: 24px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 600;

  &:first-child {
    text-align: right;
  }
`;
