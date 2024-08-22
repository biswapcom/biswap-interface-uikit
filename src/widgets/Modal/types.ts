import React, { Dispatch, ReactNode, SetStateAction } from "react";

// types
import { BoxProps, FlexProps } from "../../components/Box";
import { HeadingScales } from "../../components/Heading";

// utils
import { ResponsiveValueType } from "../../util";

export interface ModalTheme {
  background: string;
}

export type Handler = () => void;

export interface InjectedProps {
  onDismiss?: Handler;
}

export interface ModalProps extends InjectedProps, BoxProps {
  title?: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  hideOnBack?: boolean;
  bodyPadding?: string;
  headerPadding?: ResponsiveValueType;
  minWidth?: string;
  maxWidth?: string;
  modalBackground?: string;
  closeBtnColor?: string;
  titleSize?: HeadingScales;
  walletModal?: boolean;
  modalBodyProps?: FlexProps;
  titleColor?: string;
  hideHeader?: boolean;
}

export interface ModalV2Props extends InjectedProps, BoxProps {
  isOpen?: boolean;
  closeOnOverlayClick?: boolean;
  children?: ReactNode;
  disableOutsidePointerEvents?: boolean;
}

export interface IUseModalV2 extends InjectedProps {
  onOpen: () => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
