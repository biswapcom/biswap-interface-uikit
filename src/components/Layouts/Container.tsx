import React, { FC } from "react";

// components
import { Box, BoxProps } from "../Box";

// utils
import { getResponsiveAttrs } from "../../util";

const Container: FC<BoxProps> = ({ children, ...props }) => (
  <Box width="100%" maxWidth="1120px" mx="auto" px={getResponsiveAttrs({ xs: "16px", lg: "24px", xxl: 0 })} {...props}>
    {children}
  </Box>
);

export default Container;
