import React, { FC } from "react";
import styled from "styled-components";
import { Meta } from "@storybook/react/types-6-0";

// components
import { Heading } from "../Heading";
import Input from "./Input";
import InputGroup from "./InputGroup";
import { Box, Flex } from "../Box";

// types
import { Scales, Variants } from "./types";

const Row = styled(Flex)`
  margin-bottom: 32px;

  & > input + input {
    margin-left: 16px;
  }
`;
const DarkBg = styled.div`
  background: ${({ theme }) => theme.colors.backgroundDark};
  padding: 32px 16px;
`;
const LightBg = styled.div`
  padding: 32px 16px;
  background: ${({ theme }) => theme.colors.white};
`;

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {},
} as Meta;

export const Default: FC = () => {
  return (
    <Box>
      <LightBg>
        <Heading mb="16px" color="backgroundDark">
          Transparent input
        </Heading>
        <Row>
          <Input type="text" scale={Scales.LG} variant={Variants.TRANSPARENT} placeholder="Transparent input" />
        </Row>
        {Object.values(Scales).map((scale) => (
          <>
            <Heading mb="16px" color="backgroundDark">
              {scale} light
            </Heading>
            <Row>
              <Input type="text" scale={scale} variant={Variants.LIGHT} value="Value" />
              <Input type="text" scale={scale} variant={Variants.LIGHT} placeholder="Placeholder..." />
              <Input type="text" scale={scale} variant={Variants.LIGHT} placeholder="Disabled" disabled />
              <Input type="text" scale={scale} variant={Variants.LIGHT_ERROR} value="Error" />
              <Input type="text" scale={scale} variant={Variants.LIGHT_WARNING} value="Warning" />
            </Row>
          </>
        ))}
      </LightBg>

      <DarkBg>
        {Object.values(Scales).map((scale) => (
          <>
            <Heading mb="16px" color="white">
              {scale} dark
            </Heading>
            <Row>
              <Input type="text" scale={scale} variant={Variants.DARK} value="Value" />
              <Input type="text" scale={scale} variant={Variants.DARK} placeholder="Placeholder..." />
              <Input type="text" scale={scale} variant={Variants.DARK} placeholder="Disabled" disabled />
              <Input type="text" scale={scale} variant={Variants.DARK_ERROR} value="Error" />
              <Input type="text" scale={scale} variant={Variants.DARK_WARNING} value="Warning" />
            </Row>
          </>
        ))}
      </DarkBg>
    </Box>
  );
};

export const Icons: FC = () => {
  return (
    <>
      <LightBg>
        <Heading mb="16px">Input group LG</Heading>
        <Row>
          <InputGroup mb="24px" variant={Variants.LIGHT} scale={Scales.LG} mr="16px" maxWidth="300px">
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.LIGHT} scale={Scales.LG} mr="16px" maxWidth="300px">
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.LIGHT} scale={Scales.LG} mr="16px" maxWidth="300px" disabled>
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.LIGHT_WARNING} scale={Scales.LG} mr="16px" maxWidth="300px" isWarning>
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.LIGHT_ERROR} scale={Scales.LG} mr="16px" maxWidth="300px" isError>
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px">Input group MD</Heading>
        <Row>
          <InputGroup mb="24px" variant={Variants.LIGHT} scale={Scales.MD} mr="16px" maxWidth="300px">
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.LIGHT} scale={Scales.MD} mr="16px" maxWidth="300px">
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.LIGHT} scale={Scales.MD} mr="16px" maxWidth="300px" disabled>
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.LIGHT_WARNING} scale={Scales.MD} mr="16px" maxWidth="300px" isWarning>
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.LIGHT_ERROR} scale={Scales.MD} mr="16px" maxWidth="300px" isError>
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px">Input group SM</Heading>
        <Row>
          <InputGroup mb="24px" variant={Variants.LIGHT} scale={Scales.SM} mr="16px" maxWidth="300px">
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.LIGHT} scale={Scales.SM} mr="16px" maxWidth="300px">
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.LIGHT} scale={Scales.SM} mr="16px" maxWidth="300px" disabled>
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.LIGHT_WARNING} scale={Scales.SM} mr="16px" maxWidth="300px" isWarning>
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.LIGHT_ERROR} scale={Scales.SM} mr="16px" maxWidth="300px" isError>
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px">Input group with left(start) icon</Heading>
        <Row>
          <InputGroup
            startImage={{
              imageSrc: "/coins/bsw.svg",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT_WARNING}
            scale={Scales.LG}
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT_ERROR}
            scale={Scales.LG}
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px">Input group with right(end) icon</Heading>
        <Row>
          <InputGroup
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT_WARNING}
            scale={Scales.LG}
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT_ERROR}
            scale={Scales.LG}
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px">Input group with double(start, end) icon</Heading>
        <Row>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT_WARNING}
            scale={Scales.LG}
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT_ERROR}
            scale={Scales.LG}
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>
      </LightBg>

      <DarkBg>
        <Heading mb="16px" color="white">
          Input group LG
        </Heading>
        <Row>
          <InputGroup mb="24px" variant={Variants.DARK} scale={Scales.LG} mr="16px" maxWidth="300px">
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.DARK} scale={Scales.LG} mr="16px" maxWidth="300px">
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.DARK} scale={Scales.LG} mr="16px" maxWidth="300px" disabled>
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.DARK_WARNING} scale={Scales.LG} mr="16px" maxWidth="300px" isWarning>
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.DARK_ERROR} scale={Scales.LG} mr="16px" maxWidth="300px" isError>
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px" color="white">
          Input group MD
        </Heading>
        <Row>
          <InputGroup mb="24px" variant={Variants.DARK} scale={Scales.MD} mr="16px" maxWidth="300px">
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.DARK} scale={Scales.MD} mr="16px" maxWidth="300px">
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.DARK} scale={Scales.MD} mr="16px" maxWidth="300px" disabled>
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.DARK_WARNING} scale={Scales.MD} mr="16px" maxWidth="300px" isWarning>
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.DARK_ERROR} scale={Scales.MD} mr="16px" maxWidth="300px" isError>
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px" color="white">
          Input group SM
        </Heading>
        <Row>
          <InputGroup mb="24px" variant={Variants.DARK} scale={Scales.SM} mr="16px" maxWidth="300px">
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.DARK} scale={Scales.SM} mr="16px" maxWidth="300px">
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.DARK} scale={Scales.SM} mr="16px" maxWidth="300px" disabled>
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.DARK_WARNING} scale={Scales.SM} mr="16px" maxWidth="300px" isWarning>
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup mb="24px" variant={Variants.DARK_ERROR} scale={Scales.SM} mr="16px" maxWidth="300px" isError>
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px" color="white">
          Input group with left(start) icon
        </Heading>
        <Row>
          <InputGroup
            startIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK_WARNING}
            scale={Scales.LG}
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK_ERROR}
            scale={Scales.LG}
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px" color="white">
          Input group with right(end) icon
        </Heading>
        <Row>
          <InputGroup
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK_WARNING}
            scale={Scales.LG}
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK_ERROR}
            scale={Scales.LG}
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px" color="white">
          Input group with double(start, end) icon
        </Heading>
        <Row>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
            disabled
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK_WARNING}
            scale={Scales.LG}
            maxWidth="300px"
            isWarning
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            endIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK_ERROR}
            scale={Scales.LG}
            maxWidth="300px"
            isError
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>
      </DarkBg>
    </>
  );
};

export const Info: FC = () => {
  return (
    <>
      <LightBg>
        <Heading mb="16px">Input group LG</Heading>
        <Row>
          <InputGroup
            mb="24px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            mr="16px"
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            mr="16px"
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            mr="16px"
            maxWidth="300px"
            disabled
            description="Helper text"
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.LIGHT_WARNING}
            scale={Scales.LG}
            mr="16px"
            maxWidth="300px"
            isWarning
            description="Helper text"
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.LIGHT_ERROR}
            scale={Scales.LG}
            mr="16px"
            maxWidth="300px"
            isError
            description="Helper text"
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px">Input group MD</Heading>
        <Row>
          <InputGroup
            mb="24px"
            variant={Variants.LIGHT}
            scale={Scales.MD}
            mr="16px"
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.LIGHT}
            scale={Scales.MD}
            mr="16px"
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.LIGHT}
            scale={Scales.MD}
            mr="16px"
            maxWidth="300px"
            disabled
            description="Helper text"
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.LIGHT_WARNING}
            scale={Scales.MD}
            mr="16px"
            maxWidth="300px"
            isWarning
            description="Helper text"
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.LIGHT_ERROR}
            scale={Scales.MD}
            mr="16px"
            maxWidth="300px"
            isError
            description="Helper text"
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px">Input group SM</Heading>
        <Row>
          <InputGroup
            mb="24px"
            variant={Variants.LIGHT}
            scale={Scales.SM}
            mr="16px"
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.LIGHT}
            scale={Scales.SM}
            mr="16px"
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.LIGHT}
            scale={Scales.SM}
            mr="16px"
            maxWidth="300px"
            disabled
            description="Helper text"
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.LIGHT_WARNING}
            scale={Scales.SM}
            mr="16px"
            maxWidth="300px"
            isWarning
            description="Helper text"
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.LIGHT_ERROR}
            scale={Scales.SM}
            mr="16px"
            maxWidth="300px"
            isError
            description="Helper text"
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px">Input group with left(start) icon</Heading>
        <Row>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
            disabled
            description="Helper text"
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT_WARNING}
            scale={Scales.LG}
            maxWidth="300px"
            isWarning
            description="Helper text"
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT_ERROR}
            scale={Scales.LG}
            maxWidth="300px"
            isError
            description="Helper text"
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px">Input group with right(end) icon</Heading>
        <Row>
          <InputGroup
            endIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
            disabled
            description="Helper text"
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT_WARNING}
            scale={Scales.LG}
            maxWidth="300px"
            isWarning
            description="Helper text"
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT_ERROR}
            scale={Scales.LG}
            maxWidth="300px"
            isError
            description="Helper text"
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px">Input group with double(start, end) icon</Heading>
        <Row>
          <InputGroup
            startIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            endIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            endIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            endIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
            disabled
            description="Helper text"
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            endIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT_WARNING}
            scale={Scales.LG}
            maxWidth="300px"
            isWarning
            description="Helper text"
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EyeOpen",
              color: "gray",
            }}
            endIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT_ERROR}
            scale={Scales.LG}
            maxWidth="300px"
            isError
            description="Helper text"
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px">Input group with labels</Heading>
        <Row>
          <InputGroup
            endIcon={{
              iconName: "EditSolid",
              color: "gray",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.LIGHT}
            scale={Scales.LG}
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
        </Row>
      </LightBg>

      <DarkBg>
        <Heading mb="16px" color="white">
          Input group LG
        </Heading>
        <Row>
          <InputGroup
            mb="24px"
            variant={Variants.DARK}
            scale={Scales.LG}
            mr="16px"
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.DARK}
            scale={Scales.LG}
            mr="16px"
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.DARK}
            scale={Scales.LG}
            mr="16px"
            maxWidth="300px"
            disabled
            description="Helper text"
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.DARK_WARNING}
            scale={Scales.LG}
            mr="16px"
            maxWidth="300px"
            isWarning
            description="Helper text"
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.DARK_ERROR}
            scale={Scales.LG}
            mr="16px"
            maxWidth="300px"
            isError
            description="Helper text"
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px" color="white">
          Input group MD
        </Heading>
        <Row>
          <InputGroup
            mb="24px"
            variant={Variants.DARK}
            scale={Scales.MD}
            mr="16px"
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.DARK}
            scale={Scales.MD}
            mr="16px"
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.DARK}
            scale={Scales.MD}
            mr="16px"
            maxWidth="300px"
            disabled
            description="Helper text"
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.DARK_WARNING}
            scale={Scales.MD}
            mr="16px"
            maxWidth="300px"
            isWarning
            description="Helper text"
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.DARK_ERROR}
            scale={Scales.MD}
            mr="16px"
            maxWidth="300px"
            isError
            description="Helper text"
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px" color="white">
          Input group SM
        </Heading>
        <Row>
          <InputGroup
            mb="24px"
            variant={Variants.DARK}
            scale={Scales.SM}
            mr="16px"
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.DARK}
            scale={Scales.SM}
            mr="16px"
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.DARK}
            scale={Scales.SM}
            mr="16px"
            maxWidth="300px"
            disabled
            description="Helper text"
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.DARK_WARNING}
            scale={Scales.SM}
            mr="16px"
            maxWidth="300px"
            isWarning
            description="Helper text"
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            mb="24px"
            variant={Variants.DARK_ERROR}
            scale={Scales.SM}
            mr="16px"
            maxWidth="300px"
            isError
            description="Helper text"
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px" color="white">
          Input group with left(start) icon
        </Heading>
        <Row>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "white",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "white",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "white",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
            disabled
            description="Helper text"
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "white",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK_WARNING}
            scale={Scales.LG}
            maxWidth="300px"
            isWarning
            description="Helper text"
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EditSolid",
              color: "white",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK_ERROR}
            scale={Scales.LG}
            maxWidth="300px"
            isError
            description="Helper text"
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px" color="white">
          Input group with right(end) icon
        </Heading>
        <Row>
          <InputGroup
            endIcon={{
              iconName: "EditSolid",
              color: "white",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "EditSolid",
              color: "white",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "EditSolid",
              color: "white",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
            disabled
            description="Helper text"
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "EditSolid",
              color: "white",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK_WARNING}
            scale={Scales.LG}
            maxWidth="300px"
            isWarning
            description="Helper text"
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            endIcon={{
              iconName: "EditSolid",
              color: "white",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK_ERROR}
            scale={Scales.LG}
            maxWidth="300px"
            isError
            description="Helper text"
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>

        <Heading mb="16px" color="white">
          Input group with double(start, end) icon
        </Heading>
        <Row>
          <InputGroup
            startIcon={{
              iconName: "EyeOpen",
              color: "white",
            }}
            endIcon={{
              iconName: "EditSolid",
              color: "white",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" placeholder="placeholder" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EyeOpen",
              color: "white",
            }}
            endIcon={{
              iconName: "EditSolid",
              color: "white",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
            description="Helper text"
          >
            <Input type="text" value="value" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EyeOpen",
              color: "white",
            }}
            endIcon={{
              iconName: "EditSolid",
              color: "white",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK}
            scale={Scales.LG}
            maxWidth="300px"
            disabled
            description="Helper text"
          >
            <Input type="text" placeholder="disabled" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EyeOpen",
              color: "white",
            }}
            endIcon={{
              iconName: "EditSolid",
              color: "white",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK_WARNING}
            scale={Scales.LG}
            maxWidth="300px"
            isWarning
            description="Helper text"
          >
            <Input type="text" value="isWarning" />
          </InputGroup>
          <InputGroup
            startIcon={{
              iconName: "EyeOpen",
              color: "white",
            }}
            endIcon={{
              iconName: "EditSolid",
              color: "white",
            }}
            mb="24px"
            mr="16px"
            variant={Variants.DARK_ERROR}
            scale={Scales.LG}
            maxWidth="300px"
            isError
            description="Helper text"
          >
            <Input type="text" value="isError" />
          </InputGroup>
        </Row>
      </DarkBg>
    </>
  );
};
