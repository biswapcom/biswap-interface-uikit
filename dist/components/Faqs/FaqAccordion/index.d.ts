import { FC, ReactNode } from "react";
import { Variants } from "../types";
interface IProps {
    name: string;
    isOpened: boolean;
    handleToggle: (value: string) => void;
    children: ReactNode;
    variant: Variants;
}
declare const FaqAccordion: FC<IProps>;
export default FaqAccordion;
