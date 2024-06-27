import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../Box/Flex";
import Box from "../Box/Box";
import Text from "../Text/Text";
import PercentSlider from "./PercentSlider";
import { Variants as ButtonVariants } from "../Button/types";

export default {
  title: "Components/PercentSlider",
  component: PercentSlider,
  argTypes: {},
};

const Col = styled(Flex)`
  flex-direction: column;
  width: 420px;
`;

const SliderVariant = () => {
  const [value, setValue] = useState(40);
  //console.log(value, "value");
  return (
    <Box paddingTop="40px">
      <PercentSlider withTooltip darkMode name="slider" value={value} onValueChanged={setValue} />
      <PercentSlider
        name="slider"
        value={value}
        onValueChanged={setValue}
        enableShortcuts
        shortcutVariant={ButtonVariants.TERTIARY_OUT}
        shortcutCheckpoints={[25, 50, 75, 100]}
      />
    </Box>
  );
};

export const Default: React.FC = () => {
  return (
    <Col ml="20px">
      <SliderVariant />
    </Col>
  );
};

export const Variants: React.FC = () => {
  const [value, setValue] = useState(10);

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

export const Balance: React.FC = () => {
  const [balance, setBalance] = useState(maxBalance);

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
