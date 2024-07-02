import React, { FC, useEffect } from "react";
import styled from "styled-components";

// components
import { Box, BoxProps } from "../Box";

const StyledOverlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(10, 22, 43);
  opacity: 0.55;
  z-index: 20;
`;

const BodyLock = () => {
  useEffect(() => {
    document.body.style.cssText = `
      overflow: hidden;
    `;

    return () => {
      document.body.style.cssText = `
        overflow: auto;
      `;
    };
  }, []);

  return null;
};

export const Overlay: FC<BoxProps> = (props) => {
  return (
    <>
      <BodyLock />
      <StyledOverlay role="presentation" {...props} />
    </>
  );
};

export default Overlay;
