import { FC, ReactNode } from "react";
interface Props {
    onClick?: () => void;
    expanded?: boolean;
    children?: ReactNode;
}
export declare const ExpandableButton: FC<Props>;
export declare const ExpandableLabel: FC<Props>;
export {};
