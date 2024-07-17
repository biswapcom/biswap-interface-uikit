import React, { FC } from "react";
import { Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";

// components
import { Heading } from "../Heading";
import { Box } from "../Box";
import Terms from "./Terms";

// config
import { Config } from "./config";

export default {
  title: "Components/Terms",
  component: Terms,
  argTypes: {},
} as Meta;

const Wrapper = styled(Box)`
  background-color: ${({ theme }) => theme.colors.dark700};
`;

export const Default: FC = () => {
  const { revised, description, termsList } = Config;

  return (
    <Wrapper p="20px" minHeight="100vh">
      <Heading mb="20px">Terms</Heading>
      <Terms revised={revised} description={description} termsList={termsList} />
    </Wrapper>
  );
};
