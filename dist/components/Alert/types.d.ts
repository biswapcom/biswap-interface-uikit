import { MouseEvent, ReactNode } from "react";
export type AlertTheme = {
    background: string;
};
export declare enum Variants {
    INFO = "info",
    DANGER = "danger",
    SUCCESS = "success",
    WARNING = "warning"
}
export interface AlertProps {
    variant?: Variants;
    title: string;
    children?: ReactNode;
    onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
    progress: number | undefined;
}
export declare enum ColoredVariants {
    DANGER = "danger",
    SUCCESS = "success"
}
