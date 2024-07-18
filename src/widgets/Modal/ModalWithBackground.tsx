import React, { FC, ReactNode, useContext } from "react";
import styled from "styled-components";

// components
import { CloseIcon } from "../../components/Svg";
import { IconButton, ButtonVariants, ButtonScales } from "../../components/Button";
import { BoxProps, Flex } from "../../components/Box";

// types
import { InjectedProps } from "./types";

// context
import { ModalV2Context } from "./ModalV2";

interface Props extends InjectedProps, BoxProps {
  hideCloseButton?: boolean;
  backBtnColor?: string;
  background?: string;
  backgroundTransparent?: boolean;
  p?: string;
  children: ReactNode;
}

const StyledModal = styled(Flex)<{ backgroundTransparent?: boolean }>`
  flex-direction: column;
  background-color: ${({ theme, backgroundTransparent }) =>
    backgroundTransparent ? "transparent" : theme.colors.white};
  border-radius: 16px 16px 0 0;
  width: auto;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  position: absolute;
  bottom: 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    position: relative;
    width: auto;
    min-width: 416px;
    max-width: 100%;
    border-radius: 16px;
  }
`;

const StyledIconButton = styled(IconButton)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 24px;
  left: calc(100% - 40px);
  z-index: 2;

  ${({ theme }) => theme.mediaQueries.sm} {
    top: 32px;
    left: calc(100% - 56px);
  }
`;

const ModalBody = styled.div<{ padding?: string }>`
  padding: ${({ padding }) => padding || "0 16px 24px"};

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: ${({ padding }) => padding || "0 32px 32px"};
  }
`;

const Background = styled.img`
  width: 100%;
`;

const ModalWithBackground: FC<Props> = ({
  onDismiss: onDismiss_,
  children,
  hideCloseButton = false,
  backBtnColor,
  background,
  backgroundTransparent,
  p,
  ...boxProps
}) => {
  const context = useContext(ModalV2Context);
  const onDismiss = context?.onDismiss || onDismiss_;

  return (
    <StyledModal backgroundTransparent={backgroundTransparent} {...boxProps}>
      {!hideCloseButton && (
        <StyledIconButton
          variant={ButtonVariants.TEXT}
          className="closeModal"
          scale={ButtonScales.SM}
          onClick={onDismiss}
          aria-label="Close the dialog"
        >
          <CloseIcon width="24px" color={backBtnColor ?? "card"} />
        </StyledIconButton>
      )}
      {background && <Background src={background} alt="image" />}
      <ModalBody padding={p}>{children}</ModalBody>
    </StyledModal>
  );
};

export default ModalWithBackground;
