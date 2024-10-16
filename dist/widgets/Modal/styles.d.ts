import { FC } from "react";
import { ModalProps } from "./types";
export declare const ModalWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../components/Box").BoxProps & import("../../components/Box").FlexProps, never>;
export declare const ModalBody: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../components/Box").BoxProps & import("../../components/Box").FlexProps, never>;
export declare const ModalCloseButton: FC<{
    onDismiss: ModalProps["onDismiss"];
    closeBtnColor?: string;
}>;
export declare const ModalBackButton: FC<{
    onBack: ModalProps["onBack"];
    closeBtnColor?: string;
}>;
export declare const ModalContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../components/Box").BoxProps & {
    minWidth: string;
    maxWidth?: string;
    background?: string;
    walletModal?: boolean;
}, never>;
