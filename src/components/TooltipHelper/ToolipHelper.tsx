import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import { Placement } from "@popperjs/core";

// types
import { TriggerType } from "../../hooks";

// components
import { Box, BoxProps, Flex } from "../Box";
import { HelpIcon } from "../Svg";

// hooks
import { useTooltip } from "../../hooks";

interface IconProps {
  color?: string;
  size?: string;
}
interface Props extends BoxProps {
  text: string | ReactNode;
  placement?: Placement;
  trigger?: TriggerType;
  size?: string;
  Icon?: FC<IconProps>;
  children?: ReactNode;
  showTooltip?: boolean;
  isLight?: boolean;
}

const QuestionWrapper = styled(Flex)<{ showTooltip: boolean }>`
  align-items: center;

  ${({ showTooltip }) =>
    showTooltip &&
    css`
      cursor: pointer;
      transition: opacity 0.3s ease-in-out;

      :hover,
      :focus {
        opacity: 0.7;
      }
    `}
`;

const TooltipHelper: FC<Props> = ({
  text,
  placement = "auto",
  size = "16px",
  color = "pastelBlue",
  trigger,
  Icon = HelpIcon,
  ml = "4px",
  children,
  showTooltip = true,
  isLight = false,
  ...props
}) => {
  const { targetRef, tooltip, tooltipVisible } = useTooltip(text, {
    placement,
    trigger,
    isLight,
  });

  return (
    <Box ml={ml} {...props}>
      {showTooltip && tooltipVisible && tooltip}
      <QuestionWrapper ref={targetRef} showTooltip={showTooltip}>
        {children ?? <Icon color={color} width={size} />}
      </QuestionWrapper>
    </Box>
  );
};
export default TooltipHelper;
