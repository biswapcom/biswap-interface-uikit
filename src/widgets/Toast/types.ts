import { AlertColoredVariants } from "../../components/Alert";

export enum Types {
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
  INFO = "info",
  EXTENSIONS_CONFLICT = "extensionsConflict",
}

export interface Toast {
  id: string;
  type: Types;
  title: string;
  description?: any;
  tweeterDescription?: string;
  url?: string;
  withGift?: boolean;
  scanLink?: string;
}

export interface ColoredToastProps {
  id: string;
  type?: AlertColoredVariants;
  title: string;
}

export interface ToastContainerProps {
  toasts: Toast[];
  stackSpacing?: number;
  ttl?: number;
  onRemove: (id: string) => void;
  clearAll?: () => void | undefined;
  clearAllLabel?: string;
  viewBscScanLabel?: string;
}

export type ColoredToastContainerProps = Pick<ToastContainerProps, "ttl" | "onRemove">;

export interface ToastProps {
  toast: Toast;
  onRemove?: ToastContainerProps["onRemove"];
  ttl?: number;
  style: Partial<CSSStyleDeclaration>;
  handleMouseEnter?: any;
  handleMouseLeave?: any;
  handleRemove?: any;
  progress?: number;
  clearAll?: () => void | undefined;
  zIndex?: string;
  removeButtonPosition?: number;
  clearAllLabel: string;
  viewBscScanLabel: string;
}
