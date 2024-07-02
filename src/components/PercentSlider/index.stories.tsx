import React, { FC, useState } from "react";
import styled from "styled-components";

// components
import { Box, Flex } from "../Box";
import { Text } from "../Text";
import PercentSlider from "./PercentSlider";

// types
import { ButtonVariants } from "../Button";

export default {
  title: "Components/PercentSlider",
  component: PercentSlider,
  argTypes: {},
};

const Col = styled(Flex)`
  flex-direction: column;
  width: 420px;
`;

export const Default: FC = () => {
  const [value, setValue] = useState<number>(40);

  return (
    <Col ml="20px" pt="40px">
      <PercentSlider withTooltip darkMode name="slider" value={value} onValueChanged={setValue} />
      <PercentSlider
        name="slider"
        value={value}
        onValueChanged={setValue}
        enableShortcuts
        shortcutVariant={ButtonVariants.TERTIARY_OUT}
        shortcutCheckpoints={[25, 50, 75, 100]}
      />
    </Col>
  );
};

export const Variants: FC = () => {
  const [value, setValue] = useState<number>(10);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Col>
      <PercentSlider name="sliderdisabled" value={value} onValueChanged={handleChange} min={1} max={20} disabled />
    </Col>
  );
};

const percentShortcuts = [10, 25, 50, 75];
const initialBalance = 1.795394;
const maxBalance = initialBalance - 0.01;

export const Balance: FC = () => {
  const [balance, setBalance] = useState<number>(maxBalance);

  const handleChange = (newValue: number) => {
    setBalance(newValue);
  };

  return (
    <Box width="420px">
      <PercentSlider
        shortcutCheckpoints={percentShortcuts}
        name="slider"
        min={0}
        max={100}
        value={balance}
        onValueChanged={handleChange}
      />
      <Text>{`Current Balance: ${balance}`}</Text>
      <Text fontSize="12px" color="pastelBlue">{`Initial Balance: ${initialBalance}`}</Text>
      <Text fontSize="12px" color="pastelBlue">{`Max Balance: ${maxBalance}`}</Text>
    </Box>
  );
};
