import React, { FC } from "react";
import { Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";

// components
import Faqs from "./Faqs";
import { BodyText, Scales } from "../Typography";
import { Box, Grid } from "../Box";

// config
import { Config } from "./config";

// types
import { Variants } from "./types";

export default {
  title: "Components/Faqs",
  component: Faqs,
  argTypes: {},
} as Meta;

const GridWrapper = styled(Grid)`
  grid-template-columns: 1fr;
  grid-gap: 16px;
  height: 100%;
  min-height: calc(100vh - 288px);

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: 1fr 256px;
    grid-gap: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-gap: 32px;
  }
`;

const Stub = styled(Box)`
  width: 100%;
  height: 300px;
  background: ${({ theme }) => theme.colors.binance};
`;

export const Default: FC = () => {
  const { title, leftData, rightData } = Config;

  return (
    <Box p="20px">
      <BodyText scale={Scales.SIZE32} mb="20px" bold>
        Faqs
      </BodyText>
      <Faqs titlePosition="center" title={title} leftData={leftData} rightData={rightData} variant={Variants.LIGHT} />
      <Faqs title={title} leftData={leftData} rightData={rightData} variant={Variants.DARK_BACKGROUND} />
    </Box>
  );
};

export const DefaultBlog: FC = () => {
  const { title, leftData, rightData } = Config;

  return (
    <Box p="20px">
      <BodyText scale={Scales.SIZE32} mb="20px" bold>
        Faqs
      </BodyText>
      <GridWrapper>
        <Box>
          <Faqs title={title} leftData={leftData} rightData={rightData} variant={Variants.LIGHT} blogFAQ />
        </Box>
        <Box>
          <Stub />
        </Box>
      </GridWrapper>
    </Box>
  );
};
