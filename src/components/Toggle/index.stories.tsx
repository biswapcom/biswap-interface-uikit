import React, { FC, useState } from "react";
import styled from "styled-components";

// components
import Toggle from "./Toggle";
import { Text } from "../Text";
import { Box, Flex } from "../Box";

//types
import { ToggleScales, ToggleVariants } from "./index";

export default {
  title: "Components/Toggle",
  component: Toggle,
};

const WrapperLight = styled(Box)`
  padding: 24px;
  background: ${({ theme }) => theme.colors.gray100};
`;

const WrapperDark = styled(Box)`
  padding: 24px;
  background: ${({ theme }) => theme.colors.dark800};
`;

const Row = styled(Flex)`
  gap: 0 24px;
  margin-bottom: 32px;
`;

export const Default: FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <WrapperLight>
        <Text mb="12px" bold>
          Default toggle
        </Text>
        <Row>
          <Toggle checked={isChecked} onChange={toggle} scale={ToggleScales.MD} variant={ToggleVariants.LIGHT} />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            scale={ToggleScales.MD}
            label="Label LEFT"
            labelOrientation="left"
            variant={ToggleVariants.LIGHT}
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            scale={ToggleScales.MD}
            label="Label RIGHT"
            labelOrientation="right"
            variant={ToggleVariants.LIGHT}
          />
        </Row>
        <Text mb="12px" bold>
          Toggle with custom colors
        </Text>
        <Row>
          <Toggle
            checked={isChecked}
            defaultColor="secondary"
            checkedColor="dark800"
            onChange={toggle}
            scale={ToggleScales.MD}
            variant={ToggleVariants.LIGHT}
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            defaultColor="secondary"
            checkedColor="dark800"
            scale={ToggleScales.MD}
            label="Label LEFT"
            labelOrientation="left"
            variant={ToggleVariants.LIGHT}
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            defaultColor="secondary"
            checkedColor="dark800"
            scale={ToggleScales.MD}
            label="Label RIGHT"
            labelOrientation="right"
            variant={ToggleVariants.LIGHT}
          />
        </Row>
        <Text mb="12px" bold>
          Toggle disabled
        </Text>
        <Row>
          <Toggle checked={isChecked} onChange={toggle} scale={ToggleScales.MD} disabled />
          <Toggle checked={isChecked} onChange={toggle} label="Label LEFT" variant={ToggleVariants.LIGHT} disabled />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            label="Label RIGHT"
            labelOrientation="right"
            variant={ToggleVariants.LIGHT}
            disabled
          />
        </Row>

        <Text mb="12px" bold>
          Toggle spaceBetween
        </Text>
        <Row>
          <Toggle
            checked={isChecked}
            onChange={toggle}
            label="Label RIGHT"
            labelOrientation="right"
            variant={ToggleVariants.LIGHT}
            spaceBetween
          />
        </Row>
      </WrapperLight>
      <WrapperDark>
        <Text mb="12px" color="white" bold>
          Default toggle
        </Text>
        <Row>
          <Toggle checked={isChecked} onChange={toggle} scale={ToggleScales.MD} variant={ToggleVariants.DARK} />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            scale={ToggleScales.MD}
            label="Label LEFT"
            labelOrientation="left"
            variant={ToggleVariants.DARK}
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            scale={ToggleScales.MD}
            label="Label RIGHT"
            labelOrientation="right"
            variant={ToggleVariants.DARK}
          />
        </Row>
        <Text mb="12px" color="white" bold>
          Toggle with custom colors
        </Text>
        <Row>
          <Toggle
            checked={isChecked}
            defaultColor="secondary"
            checkedColor="dark800"
            onChange={toggle}
            scale={ToggleScales.MD}
            variant={ToggleVariants.DARK}
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            defaultColor="secondary"
            checkedColor="dark800"
            scale={ToggleScales.MD}
            label="Label LEFT"
            labelOrientation="left"
            variant={ToggleVariants.DARK}
          />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            defaultColor="secondary"
            checkedColor="dark800"
            scale={ToggleScales.MD}
            label="Label RIGHT"
            labelOrientation="right"
            variant={ToggleVariants.DARK}
          />
        </Row>
        <Text mb="12px" color="white" bold>
          Toggle disabled
        </Text>
        <Row>
          <Toggle
            checked={isChecked}
            onChange={toggle}
            scale={ToggleScales.MD}
            disabled
            variant={ToggleVariants.DARK}
          />
          <Toggle checked={isChecked} onChange={toggle} label="Label LEFT" disabled variant={ToggleVariants.DARK} />
          <Toggle
            checked={isChecked}
            onChange={toggle}
            label="Label RIGHT"
            labelOrientation="right"
            disabled
            variant={ToggleVariants.DARK}
          />
        </Row>

        <Text mb="12px" color="white" bold>
          Toggle spaceBetween
        </Text>
        <Row>
          <Toggle
            checked={isChecked}
            onChange={toggle}
            label="Label RIGHT"
            labelOrientation="right"
            variant={ToggleVariants.LIGHT}
            spaceBetween
          />
        </Row>
      </WrapperDark>
    </>
  );
};
