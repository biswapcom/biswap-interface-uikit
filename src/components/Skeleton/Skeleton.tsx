import React, { FC, ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import { space, layout, variant as systemVariant } from "styled-system";

// utils
import { getRgba } from "../../util";

// types
import { SkeletonProps, Animations, Variants } from "./types";
import { variantsSkeleton } from "./theme";

// components
import { Box } from "../Box";

const waves = keyframes`
   from {
        left: -150px;
    }
    to   {
        left: 100%;
    }
`;

const pulse = keyframes`
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.1;
  }
`;

const Root = styled(Box)<SkeletonProps>`
  min-height: 20px;
  border-radius: ${({ variant, theme }) => (variant === Variants.CIRCLE ? theme.radii.circle : theme.radii.small)};
  background-color: ${({ theme }) => getRgba(theme.colors.pastelBlue, theme, 0.16)};

  ${layout}
  ${space}
  ${systemVariant({
    variants: variantsSkeleton,
  })}
`;

const Pulse = styled(Root)`
  animation: ${pulse} 2s infinite ease-out;
  transform: translate3d(0, 0, 0);
  background-color: ${({ theme }) => theme.colors.pastelBlue};
`;

const Waves = styled(Root)`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -150px;
    width: 150px;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(116, 155, 216, 0) 0%,
      rgba(116, 155, 216, 0.16) 50%,
      rgba(116, 155, 216, 0) 100%
    );
    animation: ${waves} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

const Skeleton: FC<SkeletonProps> = ({
  variant = Variants.RECT,
  animation = Animations.PULSE,
  ...props
}): ReactElement => {
  if (animation === Animations.WAVES) {
    return <Waves variant={variant} {...props} />;
  }

  return <Pulse variant={variant} {...props} />;
};

export default Skeleton;
