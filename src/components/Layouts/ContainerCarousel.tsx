import React, { FC, ReactElement } from "react";

// components
import { Box, BoxProps } from "../Box";

// utils
import { getResponsiveAttrs } from "../../util";

const ContainerCarousel: FC<BoxProps> = ({ children, ...props }): ReactElement => (
  <Box maxWidth="1120px" mx="auto" px={getResponsiveAttrs({ xs: 0, sm: 0, md: "16px", lg: "24px", xxl: 0 })} {...props}>
    {children}
  </Box>
);

export default ContainerCarousel;
