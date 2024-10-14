import React, { FC } from "react";
import styled from "styled-components";

// components
import { Box, Flex } from "../../components/Box";
import { ArrowLeftIcon, CloseIcon } from "../../components/Svg";
import { IconButton, ButtonScales, ButtonVariants } from "../../components/Button";

// types
import { ModalProps } from "./types";

export const ModalWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.modal - 1};
`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  overflow-y: auto;
`;

export const ModalCloseButton: FC<{
  onDismiss: ModalProps["onDismiss"];
  closeBtnColor?: string;
}> = ({ onDismiss, closeBtnColor }) => {
  return (
    <IconButton variant={ButtonVariants.TEXT} onClick={onDismiss} scale={ButtonScales.SM} aria-label="Close the dialog">
      <CloseIcon color={closeBtnColor || "dark600"} width="24px" />
    </IconButton>
  );
};

export const ModalBackButton: FC<{
  onBack: ModalProps["onBack"];
  closeBtnColor?: string;
}> = ({ onBack, closeBtnColor }) => {
  return (
    <IconButton variant={ButtonVariants.TEXT} onClick={onBack} area-label="go back" mr="8px">
      <ArrowLeftIcon color={closeBtnColor || "primary"} />
    </IconButton>
  );
};

export const ModalContainer = styled(Box)<{
  minWidth: string;
  maxWidth?: string;
  background?: string;
  walletModal?: boolean;
}>`
  overflow: hidden;
  background: ${({ background }) => background || "white"};
  width: ${({ width }) => width ?? "100%"};
  z-index: ${({ theme }) => theme.zIndices.modal};
  border-radius: 16px 16px 0 0;
  ${({ walletModal }) =>
    !walletModal &&
    `
    max-height: 100vh;
    overflow-y: auto;
  `}

  ${({ theme }) => theme.mediaQueries.sm} {
    width: ${({ maxWidth }) => maxWidth || "100%"};
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
    border-radius: 16px;
  }
`;
