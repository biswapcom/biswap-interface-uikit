import React, { FC } from "react";
import { Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";

// components
import Badge from "./Badge";
import Text from "../Text/Text";
import { GobletOpacityIcon } from "../Svg";
import { Box, Flex } from "../Box";

// types
import { BadgeTypes, BadgeScales } from "./types";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {},
} as Meta;

const Wrapper = styled(Box)`
  padding: 32px;
`;

const BadgeWrapper = styled(Flex)`
  gap: 20px;
  flex-wrap: wrap;
`;

export const Default: FC = () => {
  return (
    <>
      <Wrapper>
        <Text fontSize="32px" mb={20}>
          Badges size SM =&gt; 20px (DEFAULT)
        </Text>
        <BadgeWrapper>
          <Badge badgeType={BadgeTypes.LIGHT}>light</Badge>
          <Badge badgeType={BadgeTypes.ACTIVE}>active</Badge>
          <Badge badgeType={BadgeTypes.SUCCESS}>success</Badge>
          <Badge badgeType={BadgeTypes.ERROR}>error</Badge>
          <Badge badgeType={BadgeTypes.NOT_ACTIVE}>error</Badge>
          <Badge badgeType={BadgeTypes.WARNING}>warning</Badge>
          <Badge badgeType={BadgeTypes.PRIMARY}>primary</Badge>
          <Badge badgeType={BadgeTypes.BOOST}>boost</Badge>
          <Badge badgeType={BadgeTypes.CORE}>core</Badge>
          <Badge badgeType={BadgeTypes.WARNING_OPACITY}>warningOpacity</Badge>
          <Badge badgeType={BadgeTypes.CORE} isIcon="left">
            <GobletOpacityIcon width="14px" mr="4px" />
            icon left
          </Badge>
          <Badge badgeType={BadgeTypes.CORE} isIcon="right">
            icon right
            <GobletOpacityIcon width="14px" ml="4px" />
          </Badge>
          <Badge badgeType={BadgeTypes.LIGHT_OPACITY}>coreOpacity</Badge>
        </BadgeWrapper>
      </Wrapper>
      <Wrapper>
        <Text fontSize="32px" mb={20}>
          Badges size MD =&gt; 28px
        </Text>
        <BadgeWrapper>
          <Badge badgeType={BadgeTypes.LIGHT} scale={BadgeScales.MD}>
            light
          </Badge>
          <Badge badgeType={BadgeTypes.ACTIVE} scale={BadgeScales.MD}>
            active
          </Badge>
          <Badge badgeType={BadgeTypes.SUCCESS} scale={BadgeScales.MD}>
            success
          </Badge>
          <Badge badgeType={BadgeTypes.ERROR} scale={BadgeScales.MD}>
            error
          </Badge>
          <Badge badgeType={BadgeTypes.NOT_ACTIVE} scale={BadgeScales.MD}>
            error
          </Badge>
          <Badge badgeType={BadgeTypes.WARNING} scale={BadgeScales.MD}>
            warning
          </Badge>
          <Badge badgeType={BadgeTypes.PRIMARY} scale={BadgeScales.MD}>
            primary
          </Badge>
          <Badge badgeType={BadgeTypes.BOOST} scale={BadgeScales.MD}>
            boost
          </Badge>
          <Badge badgeType={BadgeTypes.CORE} scale={BadgeScales.MD}>
            core
          </Badge>
          <Badge badgeType={BadgeTypes.WARNING_OPACITY} scale={BadgeScales.MD}>
            warningOpacity
          </Badge>
          <Badge badgeType={BadgeTypes.CORE} isIcon="left" scale={BadgeScales.MD}>
            <GobletOpacityIcon width="14px" mr="4px" />
            icon left
          </Badge>
          <Badge badgeType={BadgeTypes.CORE} isIcon="right" scale={BadgeScales.MD}>
            icon right
            <GobletOpacityIcon width="14px" ml="4px" />
          </Badge>
          <Badge badgeType={BadgeTypes.LIGHT_OPACITY} scale={BadgeScales.MD}>
            coreOpacity
          </Badge>
        </BadgeWrapper>
      </Wrapper>
      <Wrapper>
        <Text fontSize="32px" mb={20}>
          Badges size LG =&gt; 36px
        </Text>
        <BadgeWrapper>
          <Badge badgeType={BadgeTypes.LIGHT} scale={BadgeScales.LG}>
            light
          </Badge>
          <Badge badgeType={BadgeTypes.ACTIVE} scale={BadgeScales.LG}>
            active
          </Badge>
          <Badge badgeType={BadgeTypes.SUCCESS} scale={BadgeScales.LG}>
            success
          </Badge>
          <Badge badgeType={BadgeTypes.ERROR} scale={BadgeScales.LG}>
            error
          </Badge>
          <Badge badgeType={BadgeTypes.NOT_ACTIVE} scale={BadgeScales.LG}>
            error
          </Badge>
          <Badge badgeType={BadgeTypes.WARNING} scale={BadgeScales.LG}>
            warning
          </Badge>
          <Badge badgeType={BadgeTypes.PRIMARY} scale={BadgeScales.LG}>
            primary
          </Badge>
          <Badge badgeType={BadgeTypes.BOOST} scale={BadgeScales.LG}>
            boost
          </Badge>
          <Badge badgeType={BadgeTypes.CORE} scale={BadgeScales.LG}>
            core
          </Badge>
          <Badge badgeType={BadgeTypes.WARNING_OPACITY} scale={BadgeScales.LG}>
            warningOpacity
          </Badge>
          <Badge badgeType={BadgeTypes.CORE} isIcon="left" scale={BadgeScales.LG}>
            <GobletOpacityIcon width="14px" mr="4px" />
            icon left
          </Badge>
          <Badge badgeType={BadgeTypes.CORE} isIcon="right" scale={BadgeScales.LG}>
            icon right
            <GobletOpacityIcon width="14px" ml="4px" />
          </Badge>
          <Badge badgeType={BadgeTypes.LIGHT_OPACITY} scale={BadgeScales.LG}>
            coreOpacity
          </Badge>
        </BadgeWrapper>
      </Wrapper>
    </>
  );
};
