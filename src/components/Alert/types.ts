import { MouseEvent, ReactNode } from "react";

export type AlertTheme = {
  background: string;
};

export enum Variants {
  INFO = "info",
  DANGER = "danger",
  SUCCESS = "success",
  WARNING = "warning",
  EXTENSIONS_CONFLICT = "extensionsConflict",
}

export interface AlertProps {
  variant?: Variants;
  title: string;
  children?: ReactNode;
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
  progress: number | undefined;
}

export enum ColoredVariants {
  DANGER = "danger",
  SUCCESS = "success",
}
