import React, { ReactElement } from "react";
import { IUseModalV2, ModalV2Props } from "./types";
export declare const ModalV2Context: React.Context<{
    onDismiss?: () => void;
}>;
export declare function useModalV2(): IUseModalV2;
export declare function ModalV2({ isOpen, onDismiss, closeOnOverlayClick, children, }: ModalV2Props): ReactElement;
