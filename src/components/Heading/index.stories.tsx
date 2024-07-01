import React, { FC } from "react";

// components
import Heading from "./Heading";
import { Box } from "../Box";

// types
import { Scales } from "./types";

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {},
};

export const Sizes: FC = () => {
  return (
    <Box>
      <Heading>Default</Heading>
      <Heading scale={Scales.MD}>Size md</Heading>
      <Heading scale={Scales.LG}>Size lg</Heading>
      <Heading scale={Scales.XL}>Size xl</Heading>
      <Heading scale={Scales.XXL}>Size xxl</Heading>
    </Box>
  );
};

export const Tags: FC = () => {
  return (
    <Box>
      <Heading>Default</Heading>
      <Heading as="h1">Tag h1</Heading>
      <Heading as="h2">Tag h2</Heading>
      <Heading as="h3">Tag h3</Heading>
      <Heading as="h4">Tag h4</Heading>
      <Heading as="h5">Tag h5</Heading>
      <Heading as="h6">Tag h6</Heading>
    </Box>
  );
};
