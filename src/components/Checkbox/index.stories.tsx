import React, { FC } from "react";
import styled from "styled-components";

// components
import Checkbox from "./Checkbox";
import { Box } from "../Box";

// types
import { CheckboxScales } from "./types";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {},
};

const WrapperLight = styled(Box)`
  height: 200px;
  padding: 24px 32px;
  background: ${({ theme }) => theme.colors.gray100};
`;

const WrapperDark = styled(WrapperLight)`
  background: ${({ theme }) => theme.colors.dark800};
`;

export const Default: FC = () => {
  return (
    <>
      <WrapperLight>
        <div>
          <Checkbox labelOrientation="left" colorVariant="light" label="On left label" />
          <Checkbox labelOrientation="right" colorVariant="light" label="On right label" />
        </div>
        <div style={{ marginBottom: "24px" }}>
          <Checkbox scale={CheckboxScales.SM} labelOrientation="left" colorVariant="light" label="On left label" />
          <Checkbox scale={CheckboxScales.SM} labelOrientation="right" colorVariant="light" label="On right label" />
        </div>
        <div>
          <Checkbox />
        </div>
        <div>
          <Checkbox scale={CheckboxScales.SM} />
        </div>
      </WrapperLight>

      <WrapperDark>
        <div>
          <Checkbox labelOrientation="left" colorVariant="dark" label="On left label" />
          <Checkbox labelOrientation="right" colorVariant="dark" label="On right label" />
        </div>
        <div style={{ marginBottom: "24px" }}>
          <Checkbox scale={CheckboxScales.SM} labelOrientation="left" colorVariant="dark" label="On left label" />
          <Checkbox scale={CheckboxScales.SM} labelOrientation="right" colorVariant="dark" label="On right label" />
        </div>
        <div>
          <Checkbox />
        </div>
        <div>
          <Checkbox scale={CheckboxScales.SM} />
        </div>
      </WrapperDark>
    </>
  );
};
