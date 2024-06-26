import React, { FC } from "react";

// components
import Img from "./Image";
import { Box } from "../Box";

export default {
  title: "Components/Image",
  argTypes: {},
};

export const Image: FC = () => {
  return (
    <Box>
      <Img src="https://via.placeholder.com/800x400" width={800} height={400} alt="test" />
      <Box>Image</Box>
    </Box>
  );
};
