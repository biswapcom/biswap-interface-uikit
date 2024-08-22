import React, { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { Handler } from "./types";
interface ModalsContext {
    isOpen: boolean;
    nodeId: string;
    modalNode: ReactNode;
    setModalNode: Dispatch<SetStateAction<ReactNode>>;
    onPresent: (node: ReactNode, newNodeId: string, closeOverlayClick: boolean) => void;
    onDismiss: Handler;
}
export declare const Context: React.Context<ModalsContext>;
declare const ModalProvider: FC<{
    children: any;
}>;
export default ModalProvider;
