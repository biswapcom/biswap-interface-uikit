import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

// types
import {
  type ToggleProps,
  type HandleProps,
  type InputProps,
  type StyleToggleProps,
  ScaleKeys,
  Scales,
  Variants,
} from "./types";

// components
import { BodyText } from "../Typography";

const scaleKeyValues = {
  md: {
    handleHeight: "16px",
    handleWidth: "16px",
    handleLeft: "2px",
    handleTop: "2px",
    checkedLeft: "calc(100% - 18px)",
    toggleHeight: "20px",
    toggleWidth: "40px",
  },
};

const getScale =
  (property: ScaleKeys) =>
  ({ scale = Scales.MD }: ToggleProps): string =>
    scaleKeyValues[scale][property];

interface IToggleProps extends SpaceProps {
  labelOrientation?: string;
  disabled?: boolean;
  gridArea?: string;
  spaceBetween?: boolean;
  labelSize?: string;
}

export const ToggleWrap = styled.label<IToggleProps>`
  display: inline-flex;
  align-items: center;
  flex-direction: ${({ labelOrientation }) =>
    labelOrientation === "left" ? "row-reverse" : labelOrientation === "right" ? "row" : "row"};
  justify-content: ${({ spaceBetween }) => (spaceBetween ? "space-between" : "start")};
  grid-area: ${({ gridArea }) => gridArea || "initial"};
  width: ${({ spaceBetween }) => (spaceBetween ? "100%" : "auto")};
  opacity: ${({ disabled }) => (disabled ? "0.32" : "1")};

  ${space}
`;

export const Handle = styled.div<HandleProps>`
  position: absolute;
  top: ${getScale(ScaleKeys.HANDLE_TOP)};
  left: ${getScale(ScaleKeys.HANDLE_LEFT)};
  width: ${getScale(ScaleKeys.HANDLE_WIDTH)};
  height: ${getScale(ScaleKeys.HANDLE_HEIGHT)};
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(7, 22, 45, 0.16);
  background-color: ${({ theme }) => theme.colors.white};
  transition: left 200ms ease-in;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  z-index: 1;
`;

export const Label = styled(BodyText)<{
  labelOrientation?: string;
  isChecked: boolean;
  disabled?: boolean;
  variant?: Variants;
}>`
  margin: ${({ labelOrientation }) => (labelOrientation === "left" ? "0 8px 0 0" : "0 0 0 8px")};
  color: ${({ theme, variant, isChecked }) =>
    !isChecked ? theme.colors.gray900 : variant === Variants.LIGHT ? theme.colors.dark800 : theme.colors.white};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: color 0.2s ease-in-out;
`;

export const Input = styled.input<InputProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: 0;
  z-index: 3;

  &:checked + ${Handle} {
    left: ${getScale(ScaleKeys.CHECKED_LEFT)};
  }
`;

const StyledToggle = styled.div<StyleToggleProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: ${getScale(ScaleKeys.TOGGLE_WIDTH)};
  height: ${getScale(ScaleKeys.TOGGLE_HEIGHT)};
  border-radius: 26px;
  background-color: ${({ theme, $checked, $checkedColor, $defaultColor }) =>
    theme.colors[$checked ? $checkedColor : $defaultColor]};
  transition: background-color 0.2s ease-in-out;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export default StyledToggle;
