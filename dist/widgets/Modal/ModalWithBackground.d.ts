import { FC, ReactNode } from "react";
import { BoxProps } from "../../components/Box";
import { InjectedProps } from "./types";
interface Props extends InjectedProps, BoxProps {
    hideCloseButton?: boolean;
    backBtnColor?: string;
    background?: string;
    backgroundTransparent?: boolean;
    p?: string;
    children: ReactNode;
}
declare const ModalWithBackground: FC<Props>;
export default ModalWithBackground;
