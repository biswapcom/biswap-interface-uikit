import React, { FC, useState } from "react";
import styled from "styled-components";

// components
import Radio from "./Radio";
import { Box, Flex } from "../Box";

// types
import { Scales, Variants } from "./types";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {},
};

const WrapperLight = styled(Box)`
  padding: 24px;
  background: ${({ theme }) => theme.colors.gray100};
`;
const WrapperDark = styled(Box)`
  padding: 24px;
  background: ${({ theme }) => theme.colors.dark800};
`;

const RadioWrap = styled(Flex)`
  gap: 24px;
`;

export const Default: FC = () => {
  const [radio, setRadio] = useState<string>("one");

  const handleChange = ({ target: { value } }: { target: { value: string } }) => {
    console.info("fired");
    setRadio(value);
  };

  return (
    <>
      <WrapperLight>
        <RadioWrap style={{ marginBottom: "24px" }}>
          <Radio
            scale={Scales.MD}
            radioName="one"
            label="Radio 1 MD"
            colorVariant={Variants.LIGHT}
            onChange={handleChange}
            checked={radio === "one"}
          />
          <Radio
            scale={Scales.MD}
            radioName="one"
            label="Radio 2 MD"
            colorVariant={Variants.LIGHT}
            onChange={handleChange}
            checked={radio === "two"}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "32px" }}>
          <Radio
            scale={Scales.SM}
            radioName="one"
            label="Radio 1 SM"
            colorVariant={Variants.LIGHT}
            onChange={handleChange}
            checked={radio === "one"}
          />
          <Radio
            scale={Scales.SM}
            radioName="one"
            label="Radio 2 SM"
            colorVariant={Variants.LIGHT}
            onChange={handleChange}
            checked={radio === "two"}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "24px" }}>
          <Radio
            scale={Scales.MD}
            radioName="one"
            labelOrientation="right"
            label="Radio 1 MD"
            colorVariant={Variants.LIGHT}
            onChange={handleChange}
            checked={radio === "one"}
          />
          <Radio
            scale={Scales.MD}
            radioName="one"
            labelOrientation="right"
            label="Radio 2 MD"
            colorVariant={Variants.LIGHT}
            onChange={handleChange}
            checked={radio === "two"}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "32px" }}>
          <Radio
            scale={Scales.SM}
            radioName="one"
            label="Radio 1 SM"
            labelOrientation="right"
            onChange={handleChange}
            checked={radio === "one"}
          />
          <Radio
            scale={Scales.SM}
            radioName="one"
            label="Radio 2 SM"
            labelOrientation="right"
            onChange={handleChange}
            checked={radio === "two"}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "24px" }}>
          <Radio scale={Scales.MD} radioName="one" onChange={handleChange} checked={radio === "one"} />
          <Radio scale={Scales.MD} radioName="one" onChange={handleChange} checked={radio === "two"} />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "24px" }}>
          <Radio scale={Scales.SM} radioName="one" onChange={handleChange} checked={radio === "one"} />
          <Radio scale={Scales.SM} radioName="one" onChange={handleChange} checked={radio === "two"} />
        </RadioWrap>
      </WrapperLight>
      <WrapperDark>
        <RadioWrap style={{ marginBottom: "24px" }}>
          <Radio
            scale={Scales.MD}
            radioName="one"
            label="Radio 1 MD"
            colorVariant={Variants.DARK}
            onChange={handleChange}
          />
          <Radio
            scale={Scales.MD}
            radioName="one"
            label="Radio 2 MD"
            colorVariant={Variants.DARK}
            onChange={handleChange}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "32px" }}>
          <Radio
            scale={Scales.SM}
            radioName="two"
            label="Radio 1 SM"
            colorVariant={Variants.DARK}
            onChange={handleChange}
          />
          <Radio
            scale={Scales.SM}
            radioName="two"
            label="Radio 2 SM"
            colorVariant={Variants.DARK}
            onChange={handleChange}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "24px" }}>
          <Radio
            scale={Scales.MD}
            radioName="three"
            labelOrientation="right"
            label="Radio 1 MD"
            colorVariant={Variants.DARK}
            onChange={handleChange}
          />
          <Radio
            scale={Scales.MD}
            radioName="three"
            labelOrientation="right"
            label="Radio 2 MD"
            colorVariant={Variants.DARK}
            onChange={handleChange}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "32px" }}>
          <Radio
            scale={Scales.SM}
            radioName="one"
            label="Radio 1 SM"
            labelOrientation="right"
            colorVariant={Variants.DARK}
            onChange={handleChange}
          />
          <Radio
            scale={Scales.SM}
            radioName="one"
            label="Radio 2 SM"
            labelOrientation="right"
            colorVariant={Variants.DARK}
            onChange={handleChange}
          />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "24px" }}>
          <Radio scale={Scales.MD} radioName="one" onChange={handleChange} />
          <Radio scale={Scales.MD} radioName="one" onChange={handleChange} />
        </RadioWrap>
        <RadioWrap style={{ marginBottom: "24px" }}>
          <Radio scale={Scales.SM} radioName="one" onChange={handleChange} />
          <Radio scale={Scales.SM} radioName="one" onChange={handleChange} />
        </RadioWrap>
      </WrapperDark>
    </>
  );
};
