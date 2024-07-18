import React, {
  cloneElement,
  createContext,
  Dispatch,
  FC,
  isValidElement,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

// components
import { Overlay } from "../../components/Overlay";

// styles
import { ModalWrapper } from "./styles";

// types
import { Handler } from "./types";

interface ModalsContext {
  isOpen: boolean;
  nodeId: string;
  modalNode: ReactNode;
  setModalNode: Dispatch<SetStateAction<ReactNode>>;
  onPresent: (node: ReactNode, newNodeId: string, closeOverlayClick: boolean) => void;
  onDismiss: Handler;
}

export const Context = createContext<ModalsContext>({
  isOpen: false,
  nodeId: "",
  modalNode: null,
  setModalNode: () => null,
  onPresent: () => null,
  onDismiss: () => null,
});

const ModalProvider: FC<{ children: any }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalNode, setModalNode] = useState<ReactNode>();
  const [nodeId, setNodeId] = useState<string>("");
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState<boolean>(true);

  const handlePresent = (node: ReactNode, newNodeId: string, closeOverlayClick: boolean) => {
    setModalNode(node);
    setIsOpen(true);
    setNodeId(newNodeId);
    setCloseOnOverlayClick(closeOverlayClick);
  };

  const handleDismiss = () => {
    setModalNode(undefined);
    setIsOpen(false);
    setNodeId("");
    setCloseOnOverlayClick(true);
  };

  const handleOverlayDismiss = () => {
    if (closeOnOverlayClick) {
      handleDismiss();
    }
  };

  return (
    <Context.Provider
      value={{
        isOpen,
        nodeId,
        modalNode,
        setModalNode,
        onPresent: handlePresent,
        onDismiss: handleDismiss,
      }}
    >
      {isOpen && (
        <ModalWrapper>
          <Overlay onClick={handleOverlayDismiss} />
          {isValidElement(modalNode) &&
            cloneElement(modalNode, {
              // @ts-ignore
              onDismiss: handleDismiss,
            })}
        </ModalWrapper>
      )}
      {children}
    </Context.Provider>
  );
};

export default ModalProvider;
