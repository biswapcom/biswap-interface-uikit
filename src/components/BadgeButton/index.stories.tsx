import React, { FC } from "react";
import { Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";

// components
import BadgeButton from "./BadgeButton";
import { BodyText, Scales } from "../Typography";
import { GobletOpacityIcon } from "../Svg";
import { Box, Flex } from "../Box";

// types
import { BadgeButtonTypes } from "./types";

export default {
  title: "Components/BadgeButton",
  component: BadgeButton,
  argTypes: {},
} as Meta;

const Wrapper = styled(Box)`
  padding: 32px;
`;

const BadgeWrapper = styled(Flex)`
  gap: 20px;
  margin-bottom: 16px;
`;

export const Default: FC = () => {
  return (
    <Wrapper>
      <BodyText scale={Scales.SIZE32} mb={20} bold>
        Badges Buttons
      </BodyText>
      <BadgeWrapper>
        <BadgeButton badgeType={BadgeButtonTypes.LIGHT}>light</BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.ACTIVE}>active</BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.SUCCESS}>success</BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.ERROR}>error</BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.WARNING}>warning</BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.PRIMARY}>primary</BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.BOOST}>boost</BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.NOT_ACTIVE}>not active</BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.CORE}>core</BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.WARNING_OPACITY}>warningOpacity</BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.CORE} isIcon="left">
          <GobletOpacityIcon width="14px" mr="4px" />
          icon left
        </BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.CORE} isIcon="right">
          icon right
          <GobletOpacityIcon width="14px" ml="4px" />
        </BadgeButton>
      </BadgeWrapper>
      <BodyText mb={20} color="secondary" bold>
        prop isActive
      </BodyText>
      <BadgeWrapper>
        <BadgeButton badgeType={BadgeButtonTypes.LIGHT} isActive>
          light
        </BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.ACTIVE} isActive>
          active
        </BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.SUCCESS} isActive>
          success
        </BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.ERROR} isActive>
          error
        </BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.WARNING} isActive>
          warning
        </BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.PRIMARY} isActive>
          primary
        </BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.BOOST} isActive>
          boost
        </BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.NOT_ACTIVE} isActive>
          not active
        </BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.CORE} isActive>
          core
        </BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.WARNING_OPACITY} isActive>
          warningOpacity
        </BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.CORE} isIcon="left" isActive>
          <GobletOpacityIcon width="14px" mr="4px" />
          icon left
        </BadgeButton>
        <BadgeButton badgeType={BadgeButtonTypes.CORE} isIcon="right" isActive>
          icon right
          <GobletOpacityIcon width="14px" ml="4px" />
        </BadgeButton>
      </BadgeWrapper>
    </Wrapper>
  );
};
