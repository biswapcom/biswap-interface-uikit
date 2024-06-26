import React, { FC } from "react";
import styled from "styled-components";

// components
import { Link, LinkExternal, LinkScales, LinkVariants } from "./index";
import ArrowIcon from "../Svg/Icons/Arrows/ChevronLeftCircleSolid";
import { Box } from "../Box";

const LightWrap = styled(Box)`
  padding: 24px 32px;
  background: ${({ theme }) => theme.colors.gray100};
`;

const DarkWrap = styled(Box)`
  padding: 24px 32px;
  background: ${({ theme }) => theme.colors.dark800};
`;

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    fontSize: {
      name: "fontSize",
      table: {
        type: { summary: "string", detail: "Fontsize in px or em" },
        defaultValue: { summary: "16px" },
      },
      control: {
        type: null,
      },
    },
  },
};

export const Default: FC = () => {
  return (
    <Box>
      <LightWrap>
        <Link href="/" variant={LinkVariants.LIGHT} scale={LinkScales.LG}>
          Light LG
        </Link>
        <Link href="/" variant={LinkVariants.LIGHT} scale={LinkScales.MD}>
          Light MD
        </Link>
        <Link href="/" variant={LinkVariants.LIGHT} scale={LinkScales.SM} mb="16px">
          Light SM
        </Link>
        <Link href="/" variant={LinkVariants.LIGHT} scale={LinkScales.MD}>
          <ArrowIcon mr="4px" />
          Light MD With icon
        </Link>
        <Link href="/" variant={LinkVariants.LIGHT} scale={LinkScales.MD}>
          Light MD With icon
          <ArrowIcon ml="4px" />
        </Link>
        <Link href="/" variant={LinkVariants.LIGHT} scale={LinkScales.MD}>
          <ArrowIcon mr="4px" />
          Light MD With double icon
          <ArrowIcon ml="4px" />
        </Link>
        <Link href="/" variant={LinkVariants.LIGHT} scale={LinkScales.MD} disabled>
          <ArrowIcon mr="4px" />
          Light MD Disabled
          <ArrowIcon ml="4px" />
        </Link>
      </LightWrap>
      <DarkWrap>
        <Link href="/" variant={LinkVariants.DARK} scale={LinkScales.LG}>
          Dark LG
        </Link>
        <Link href="/" variant={LinkVariants.DARK} scale={LinkScales.MD}>
          Dark MD
        </Link>
        <Link href="/" variant={LinkVariants.DARK} scale={LinkScales.SM} mb="16px">
          Dark SM
        </Link>
        <Link href="/" variant={LinkVariants.DARK} scale={LinkScales.MD}>
          <ArrowIcon mr="4px" />
          Dark MD With icon
        </Link>
        <Link href="/" variant={LinkVariants.DARK} scale={LinkScales.MD}>
          Dark MD With icon
          <ArrowIcon ml="4px" />
        </Link>
        <Link href="/" variant={LinkVariants.DARK} scale={LinkScales.MD}>
          <ArrowIcon mr="4px" />
          Dark MD With double icon
          <ArrowIcon ml="4px" />
        </Link>
        <Link href="/" variant={LinkVariants.DARK} scale={LinkScales.MD} disabled>
          <ArrowIcon mr="4px" />
          Light MD Disabled
          <ArrowIcon ml="4px" />
        </Link>
      </DarkWrap>

      <Box>
        <LinkExternal href="/">LinkExternal</LinkExternal>
      </Box>
    </Box>
  );
};
