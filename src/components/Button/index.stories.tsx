import React, { FC, useState } from "react";
import {camelCase} from "lodash";
import {BrowserRouter, Link} from "react-router-dom";
import styled from "styled-components";

// components
import { Box, Flex } from "../Box";
import {BodyText} from "../Typography";
import {AutoRenewIcon, ChevronRightCircleSolidIcon, PlusIcon} from "../Svg";
import IconButton from "./IconButton";
import Button from "./Button";
import {ExpandableButton, ExpandableLabel} from "./ExpandableButton";

// types
import {Scales, Variants as ButtonVariants} from "./types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
};

const Wrapper = styled(Box)`
  padding: 32px 24px;
  background: ${({ theme }) => theme.colors.dark800};
`;

const Row = styled(Flex)`
  margin-bottom: 32px;

  & > button + button,
  & > a + a {
    margin-left: 16px;
  }
`;

const BswIcon = styled.img.attrs({
  src: "https://static.biswap.org/bs/coins/bsw.svg",
})`
  width: 24px;
`;

export const ButtonDefault: FC = () => {
  const baseBtn = {
    PRIMARY: ButtonVariants.PRIMARY,
    DANGER: ButtonVariants.DANGER,
    SUCCESS: ButtonVariants.SUCCESS,
    WARNING: ButtonVariants.WARNING,
    BOOST: ButtonVariants.BOOST,
  } as const;

  const darkBgBtn = {
    LIGHT_OUT: ButtonVariants.LIGHT_OUT,
    LIGHT: ButtonVariants.LIGHT,
  } as const;

  const lightBgBtn = {
    TERTIARY: ButtonVariants.TERTIARY,
    TERTIARY_OUT: ButtonVariants.TERTIARY_OUT,
  } as const;

  return (
    <Wrapper>
      <Box mb="48px">
        <BodyText color="white" mb="24px" bold>
          Scales
        </BodyText>
        {Object.values(Scales).map((scale) => {
          return (
            <Button
              addBubble
              bubbleColor="primary"
              key="md"
              variant={ButtonVariants.PRIMARY}
              scale={scale}
              mr="8px"
              mb="8px"
            >
              {`Primary ${scale}`}
            </Button>
          );
        })}
      </Box>

      <Box mb="48px">
        <BodyText color="white" mb="24px" bold>
          BASE variants
        </BodyText>
        {Object.values(baseBtn).map((variant) => {
          return (
            <Button key={variant} variant={variant} scale={Scales.LG} mr="8px">
              {`${camelCase(variant)}`}
            </Button>
          );
        })}
      </Box>

      <Box mb="48px">
        <BodyText color="white" mb="24px" bold>
          Loading variants
        </BodyText>
        {Object.values(baseBtn).map((variant) => {
          return (
            <Button
              isLoading
              key={variant}
              variant={variant}
              scale={Scales.LG}
              mr="8px"
            >
              {`${camelCase(variant)}`}
            </Button>
          );
        })}
      </Box>

      <Box mb="48px">
        <BodyText color="white" mb="24px" bold>
          DISABLED
        </BodyText>
        {Object.values(baseBtn).map((variant) => {
          return (
            <Button
              key={variant}
              variant={variant}
              scale={Scales.LG}
              mr="8px"
              disabled
            >
              {`${camelCase(variant)}`}
            </Button>
          );
        })}
      </Box>

      <Flex justifyContent="space-between">
        <Box mb="48px">
          <BodyText color="white" mb="16px" bold>
            Dark background
          </BodyText>
          {Object.values(darkBgBtn).map((variant) => {
            return (
              <Button key="md" variant={variant} scale={Scales.LG} mr="8px" mb="8px">
                {`${camelCase(variant)}`}
              </Button>
            );
          })}
        </Box>
        <Box mb="48px">
          <BodyText color="white" mb="16px" bold>
            Dark background DISABLED
          </BodyText>
          {Object.values(darkBgBtn).map((variant) => {
            return (
              <Button
                key="md"
                variant={variant}
                scale={Scales.LG}
                mr="8px"
                mb="8px"
                disabled
              >
                {`${camelCase(variant)}`}
              </Button>
            );
          })}
        </Box>
      </Flex>

      <Flex
        justifyContent="space-between"
        mx="-24px"
        py="24px"
        px="24px"
        background="gray100"
      >
        <Box mb="48px">
          <BodyText color="backgroundDark" mb="16px" bold>
            Light background
          </BodyText>
          {Object.values(lightBgBtn).map((variant) => {
            return (
              <Button key="md" variant={variant} scale={Scales.LG} mr="8px" mb="8px">
                {`${camelCase(variant)}`}
              </Button>
            );
          })}
        </Box>
        <Box mb="48px">
          <BodyText color="backgroundDark" mb="16px" bold>
            Light background DISABLED
          </BodyText>
          {Object.values(lightBgBtn).map((variant) => {
            return (
              <Button
                key="md"
                variant={variant}
                scale={Scales.LG}
                mr="8px"
                mb="8px"
                disabled
              >
                {`${camelCase(variant)}`}
              </Button>
            );
          })}
        </Box>
      </Flex>

      <Box>
        <BodyText mb="16px">Text buttons dark</BodyText>
        <Button key="md" variant={ButtonVariants.TEXT_DARK} scale={Scales.LG} mr="8px" mb="8px">
          text
          <ChevronRightCircleSolidIcon width="24px" ml="8px" />
        </Button>
      </Box>
      <Box background="gray100">
        <BodyText color="backgroundDark" mb="16px">
          Text buttons light
        </BodyText>
        <Button key="md" variant={ButtonVariants.TEXT} scale={Scales.LG} mr="8px" mb="8px">
          text
          <ChevronRightCircleSolidIcon width="24px" ml="8px" />
        </Button>
      </Box>
    </Wrapper>
  );
};

//-----------------------
export const Anchors: FC = () => {
  return (
    <>
      <Box mb="32px">
        {Object.values(Variants).map((variant) => {
          return (
            <Box key={variant} mb="32px">
              {Object.values(Scales).map((scale) => {
                return (
                  <Button
                    as="a"
                    href="https://pancakeswap.finance"
                    key={scale}
                    variant={variant}
                    scale={scale}
                    external
                    mr="8px"
                  >
                    {`${camelCase(variant)} anchor ${scale.toUpperCase()}`}
                  </Button>
                );
              })}
            </Box>
          );
        })}
      </Box>
      <Box>
        <Button
          as="a"
          href="https://pancakeswap.finance"
          mr="8px"
          external
          disabled
        >
          Disabled
        </Button>
        <Button
          as="a"
          href="https://pancakeswap.finance"
          variant={ButtonVariants.PRIMARY}
          external
          disabled
        >
          Disabled
        </Button>
      </Box>
    </>
  );
};

export const Variants: FC = () => {
  return (
    <Box width="640px">
      <BrowserRouter>
        <Row>
          <Button as={Link} to="/router-link" variant={ButtonVariants.PRIMARY}>
            As an React Router link
          </Button>
        </Row>
        <Row>
          <Button width="100%">Full size</Button>
        </Row>
        <Row>
          <Button
            isLoading
            endIcon={<AutoRenewIcon spin color="currentColor" />}
          >
            Approving
          </Button>
          <Button isLoading variant={ButtonVariants.SUCCESS}>
            Approving
          </Button>
        </Row>
        <Row>
          <Button startIcon={<BswIcon />}>Start Icon</Button>
          <Button endIcon={<BswIcon />}>End Icon</Button>
          <Button startIcon={<BswIcon />} endIcon={<BswIcon />}>
            Start & End Icon
          </Button>
        </Row>
        <Row>
          <IconButton>
            <BswIcon />
          </IconButton>
          <IconButton variant={ButtonVariants.PRIMARY}>
            <PlusIcon />
          </IconButton>
        </Row>
        <Row>
          <IconButton scale={Scales.SM} variant={ButtonVariants.DANGER}>
            <BswIcon />
          </IconButton>
          <IconButton scale={Scales.SM} variant={ButtonVariants.SUCCESS}>
            <PlusIcon color="currentColor" />
          </IconButton>
        </Row>
      </BrowserRouter>
    </Box>
  );
};

export const Expandable: FC = () => {
  const [expanded, setExpanded] = useState<Boolean>(false);

  return (
    <Box width="640px">
      <BrowserRouter>
        <Row>
          <ExpandableButton
            expanded={expanded}
            onClick={() => setExpanded((prev) => !prev)}
          />
          <ExpandableLabel
            expanded={expanded}
            onClick={() => setExpanded((prev) => !prev)}
          >
            ExpandableLabel
          </ExpandableLabel>
        </Row>
      </BrowserRouter>
    </Box>
  );
};
