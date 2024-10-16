import React, { createContext, useCallback, useState } from "react";
import { createPortal } from "react-dom";

// components
import { Overlay } from "../../components/Overlay";

// utils
import { getPortalRoot } from "../../util";

// styles
import { ModalWrapper } from "./styles";

// types
import { IUseModalV2, ModalV2Props } from "./types";

export const ModalV2Context = createContext<{
  onDismiss?: () => void;
}>({});

export function useModalV2(): IUseModalV2 {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onDismiss = useCallback(() => setIsOpen(false), []);
  const onOpen = useCallback(() => setIsOpen(true), []);

  return {
    onDismiss,
    onOpen,
    isOpen,
    setIsOpen,
  };
}

export function ModalV2({
  isOpen,
  onDismiss,
  closeOnOverlayClick,
  children,
  disableOutsidePointerEvents = false,
  ...props
}: ModalV2Props) {
  const handleOverlayDismiss = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (closeOnOverlayClick) {
      onDismiss?.();
    }
  };
  const portal = getPortalRoot();

  if (portal) {
    return createPortal(
      <ModalV2Context.Provider value={{ onDismiss }}>
        {isOpen && (
          <ModalWrapper>
            <Overlay onClick={handleOverlayDismiss} />
            {children}
          </ModalWrapper>
        )}
      </ModalV2Context.Provider>,
      portal
    );
  }

  return null;
}
