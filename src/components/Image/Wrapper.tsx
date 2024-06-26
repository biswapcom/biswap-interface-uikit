import React, { forwardRef } from "react";
import styled from "styled-components";
import { space } from "styled-system";

// types
import { WrapperProps } from "./types";

// components
import { Box } from "../Box";

const StyledWrapper = styled(Box)<{ $width: number; $height: number }>`
  position: relative;
  width: 100%;
  max-width: ${({ $width }) => $width}px;
  max-height: ${({ $height }) => $height}px;

  &:after {
    content: "";
    display: block;
    padding-top: ${({ $width, $height }) => ($height / $width) * 100}%;
  }

  ${space}
`;

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(({ width, height, ...props }, ref) => {
  return <StyledWrapper ref={ref} $width={width} $height={height} {...props} />;
});

export default Wrapper;
