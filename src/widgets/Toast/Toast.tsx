import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

// components
import { Alert, AlertVariants } from "../../components/Alert";
import { Text } from "../../components/Text";
import { Button, ButtonScales, ButtonVariants } from "../../components/Button";
import { ArrowUpForwardIcon } from "../../components/Svg";
import { Box, Flex } from "../../components/Box";

// widgets
import ToastAction from "./ToastAction";

// types
import { ToastProps, Types } from "./types";

const alertTypeMap = {
  [Types.INFO]: AlertVariants.INFO,
  [Types.SUCCESS]: AlertVariants.SUCCESS,
  [Types.DANGER]: AlertVariants.DANGER,
  [Types.WARNING]: AlertVariants.WARNING,
  [Types.EXTENSIONS_CONFLICT]: AlertVariants.EXTENSIONS_CONFLICT,
};

const ClearAllButton = styled(Button)<{ top: number }>`
  position: absolute;
  top: ${({ top }) => `${-top}px`};
  right: 0;
  margin: 0;
  padding: 0;
  border: ${({ theme }) => `1px solid ${theme.colors.dark800}`};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  transform: translateY(50%);
`;

const StyledToast = styled(Box)`
  position: fixed;
  left: 50%;
  width: 100%;
  max-width: calc(100% - 12px);
  border-radius: 16px;
  transform: translate(-50%, 0);
  transition: all 250ms ease-in;
  box-shadow:
    0 -4px 11px rgba(0, 0, 0, 0.1),
    0 20px 36px -8px rgba(14, 14, 44, 0.32),
    0 1px 1px rgba(0, 0, 0, 0.16);

  ${({ theme }) => theme.mediaQueries.sm} {
    left: auto;
    right: 35px;
    max-width: 352px;
    transform: none;
  }
`;

const LinkWrapper = styled(Flex).attrs({ alignItems: "center", my: "6px" })``;

const LinkStyles = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;

const ActionContainer = styled(Box).attrs({ width: "100%" })``;

const Toast: FC<ToastProps> = ({
  removeButtonPosition = 60,
  clearAll,
  toast,
  style,
  handleMouseEnter,
  handleMouseLeave,
  handleRemove,
  progress,
  clearAllLabel,
  viewBscScanLabel,
  ...props
}) => {
  const { description, type, title, tweeterDescription, scanLink, url, withGift } = toast;
  const isExtensionConflict = type === Types.EXTENSIONS_CONFLICT;

  return (
    <CSSTransition timeout={250} style={style} {...props}>
      <StyledToast onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {clearAll && (
          <ClearAllButton
            scale={ButtonScales.SM}
            variant={ButtonVariants.TEXT}
            top={removeButtonPosition}
            onClick={clearAll}
          >
            <Text p="0 8px" fontSize="12px" color="dark">
              {clearAllLabel}
            </Text>
          </ClearAllButton>
        )}
        <Alert progress={progress} title={title} variant={alertTypeMap[type]} onClick={handleRemove}>
          <Box>
            {scanLink && (
              <LinkWrapper>
                <LinkStyles target="_blank" href={`${scanLink}`}>
                  {viewBscScanLabel}
                </LinkStyles>
                <ArrowUpForwardIcon width="18px" height="18px" ml="6px" color="primary" />
              </LinkWrapper>
            )}
            {description && (
              <Text
                color={isExtensionConflict ? "gray900" : "#6B7D98"}
                fontSize="12px"
                as="p"
                mb={isExtensionConflict ? "0" : "8px"}
              >
                {description}
              </Text>
            )}
            {tweeterDescription && (
              <ActionContainer>
                <ToastAction withGift={withGift} tweeterDescription={tweeterDescription} url={url} />
              </ActionContainer>
            )}
          </Box>
        </Alert>
      </StyledToast>
    </CSSTransition>
  );
};

export default Toast;
