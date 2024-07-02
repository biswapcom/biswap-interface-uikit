import React, { FC } from "react";

// components
import { Box, BoxProps } from "../Box";

// utils
import { getResponsiveAttrs } from "../../util";

const HeroWrapper: FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box width="100%" p={getResponsiveAttrs({ xs: "96px 0 0", md: "104px 0 0" })} {...props}>
      {children}
    </Box>
  );
};

export default HeroWrapper;
