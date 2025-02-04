import { ReactNode } from "react";
import { Handler } from "./types";
declare const useModal: (modal: ReactNode, closeOnOverlayClick?: boolean, updateOnPropsChange?: boolean, modalId?: string) => [Handler, Handler];
export default useModal;
