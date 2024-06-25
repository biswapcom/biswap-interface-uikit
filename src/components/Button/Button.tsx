import React, { cloneElement, ElementType, isValidElement, ReactElement } from "react";
import styled, { keyframes } from "styled-components";

// utils
import getExternalLinkProps from "../../util/getExternalLinkProps";

// components
import StyledButton from "./StyledButton";
import { AutoRenewAnimateIcon } from "../Svg";

// types
import { ButtonProps, Scales, Variants } from "./types";

// theme
import { MarkerType } from "../../theme";

const PULSE_SUCCESS = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(29, 200, 124, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 4px rgba(29, 200, 124, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(29, 200, 124, 0);
  }
`;

const PULSE_WARNING = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 219, 28, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 4px rgba(255, 219, 28, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 219, 28, 0);
  }
`;

const PULSE_PRIMARY = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(18, 99, 241, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 4px rgba(18, 99, 241, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(18, 99, 241, 0);
  }
`;

const PULSE_SECONDARY = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(249, 59, 93, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 4px rgba(249, 59, 93, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(249, 59, 93, 0);
  }
`;

const PULSES = {
  PRIMARY: PULSE_PRIMARY,
  SECONDARY: PULSE_SECONDARY,
  WARNING: PULSE_WARNING,
  SUCCESS: PULSE_SUCCESS,
} as const;

const Bubble = styled.span<{ bubbleColor?: keyof MarkerType }>`
  position: absolute;
  top: 14%;
  right: 11%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ theme, bubbleColor }) => (!bubbleColor ? theme.colors.success : theme.colors[bubbleColor])};
  transform: translateX(100%);

  &:before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    z-index: 1;
    animation: ${({ color }) => (color ? PULSES[color.toUpperCase()] : PULSE_SUCCESS)} 2s infinite;
  }
`;

const Button = <E extends ElementType = "button">(props: ButtonProps<E>): ReactElement => {
  const {
    addBubble,
    bubbleColor,
    startIcon,
    endIcon,
    external = false,
    className,
    isLoading = false,
    disabled = false,
    children,
    loadingTitle,
    variant = Variants.PRIMARY,
    scale = Scales.MD,
    ...rest
  } = props;

  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isLoading || disabled;
  const classNames = className ? [className] : [];
  const loadingText = loadingTitle ?? "Loading...";
  const endIconElement = isLoading ? <AutoRenewAnimateIcon color="contrast" /> : endIcon;

  if (isLoading) {
    classNames.push("button--loading");
  }

  if (isDisabled && !isLoading) {
    classNames.push("button--disabled");
  }

  return (
    <StyledButton
      $isLoading={isLoading}
      className={classNames.join(" ")}
      disabled={isDisabled}
      variant={variant}
      scale={scale}
      {...internalProps}
      {...rest}
    >
      <>
        {addBubble && <Bubble />}
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            // @ts-ignore
            mr: "0.5rem",
          })}
        {isLoading ? loadingText : children}
        {isValidElement(endIconElement) &&
          cloneElement(endIconElement, {
            // @ts-ignore
            ml: "0.5rem",
          })}
      </>
    </StyledButton>
  );
};

export default Button;
