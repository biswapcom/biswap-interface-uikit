import { Dispatch, ReactNode, SetStateAction } from "react";
import { Placement, Padding } from "@popperjs/core";

export interface TooltipRefs {
  targetRef: Dispatch<SetStateAction<HTMLElement | null>>;
  tooltip: ReactNode;
  tooltipVisible: boolean;
}

export interface TooltipOptions {
  placement?: Placement;
  trigger?: TriggerType;
  arrowPadding?: Padding;
  tooltipPadding?: Padding;
  tooltipOffset?: [number, number];
  disableStopPropagation?: boolean;
  openedByDefault?: boolean;
  isLight?: boolean;
}

export type TriggerType = "click" | "hover" | "focus";
