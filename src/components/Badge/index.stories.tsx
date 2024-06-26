import React, { FC } from "react";
import { Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";

// components
import Badge from "./Badge";
import Text from "../Text/Text";
import { GobletOpacityIcon } from "../Svg";
import { Box, Flex } from "../Box";

// types
import { BadgeTypes } from "./types";

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
`;

export const Default: FC = () => {
  return (
    <Wrapper>
      <Text fontSize="32px" mb={20}>
        Badges
      </Text>
      <BadgeWrapper>
        <Badge badgeType={BadgeTypes.LIGHT}>light</Badge>
        <Badge badgeType={BadgeTypes.ACTIVE}>active</Badge>
        <Badge badgeType={BadgeTypes.SUCCESS}>success</Badge>
        <Badge badgeType={BadgeTypes.ERROR}>error</Badge>
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
      </BadgeWrapper>
    </Wrapper>
  );
};
