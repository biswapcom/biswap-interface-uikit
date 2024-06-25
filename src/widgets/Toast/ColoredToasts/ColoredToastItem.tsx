import React, { FC } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

//components
import { BodyText } from "../../../components/Typography";
import { IconComponent } from "../../../components/IconComponent";
import { Box, Flex } from "../../../components/Box";

//types
import { ColoredToastProps, ToastProps } from "../types";
import { ColoredVariants } from "../../../components/Alert";

const StyledToast = styled(Box)<{ type?: ColoredVariants }>`
  position: fixed;
  right: auto;
  left: 16px;
  padding: 16px 20px;
  box-shadow:
    0 -4px 11px rgba(0, 0, 0, 0.1),
    0 20px 36px -8px rgba(14, 14, 44, 0.32),
    0 1px 1px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  background: ${({ theme, type }) => (type === ColoredVariants.DANGER ? theme.colors.secondary : theme.colors.success)};
  z-index: 1000;

  ${({ theme }) => theme.mediaQueries.sm} {
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

interface ColoredToastItemProps extends Pick<ToastProps, "onRemove" | "ttl" | "style"> {
  toast: ColoredToastProps;
}

const ColoredToastItem: FC<ColoredToastItemProps> = ({ toast, style, ...props }) => {
  const { title, type } = toast;

  return (
    <CSSTransition timeout={250} style={style} {...props}>
      <StyledToast left="50%" type={type}>
        <Flex alignItems="center">
          <IconComponent iconName={type === ColoredVariants.DANGER ? "Warning" : "Check"} color="white" width="26px" />
          <BodyText bold color="white" ml="12px">
            {title}
          </BodyText>
        </Flex>
      </StyledToast>
    </CSSTransition>
  );
};

export default ColoredToastItem;
