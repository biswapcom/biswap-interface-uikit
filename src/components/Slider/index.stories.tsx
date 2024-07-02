import React, { FC, useState } from "react";
import styled from "styled-components";

// components
import Slider from "./Slider";
import { Flex } from "../Box";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {},
};

const Col = styled(Flex)`
  flex-direction: column;
  width: 360px;
  padding: 64px 32px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SliderVariant: FC<{ initialValue: number }> = ({ initialValue }) => {
  const [value, setValue] = useState<number>(initialValue);

  return <Slider value={value} onValueChanged={setValue} />;
};

export const Default: FC = () => {
  return (
    <Col>
      <SliderVariant initialValue={5} />
    </Col>
  );
};

export const Variants: FC = () => {
  return (
    <Col>
      <SliderVariant initialValue={0} />
    </Col>
  );
};
