import React from "react";
import { ModalProps } from "./types";
export declare const ModalWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const ModalTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../../components/Box").BoxProps> & import("../../components/Box").BoxProps, "ref"> & {
    ref?: React.Ref<HTMLDivElement>;
}, keyof import("../../components/Box").FlexProps> & import("../../components/Box").FlexProps, never>> & string;
export declare const ModalBody: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../../components/Box").BoxProps> & import("../../components/Box").BoxProps, "ref"> & {
    ref?: React.Ref<HTMLDivElement>;
}, keyof import("../../components/Box").FlexProps> & import("../../components/Box").FlexProps, never>> & string;
export declare const ModalCloseButton: React.FC<{
    onDismiss: ModalProps["onDismiss"];
    closeBtnColor?: string;
}>;
export declare const ModalBackButton: React.FC<{
    onBack: ModalProps["onBack"];
    closeBtnColor?: string;
}>;
export declare const ModalContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../../components/Box").BoxProps> & import("../../components/Box").BoxProps, "ref"> & {
    ref?: React.Ref<HTMLDivElement>;
}, {
    minWidth: string;
    maxWidth?: string;
    background?: string;
    walletModal?: boolean;
}>> & string;
