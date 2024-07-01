import { ColorKey, HoverKey, Variants } from "./types";

export const getColorKey = (variant: Variants): ColorKey => {
  switch (variant) {
    case Variants.DARK:
      return "pastelBlue";
    case Variants.LIGHT:
      return "gray900";
    case Variants.WARNING_LIGHT:
      return "gray900";
    case Variants.WARNING_DARK:
      return "pastelBlue";
  }
};
export const getHoverKey = (variant: Variants): HoverKey => {
  switch (variant) {
    case Variants.DARK:
      return "white";
    case Variants.LIGHT:
      return "dark800";
    case Variants.WARNING_LIGHT:
      return "dark800";
    case Variants.WARNING_DARK:
      return "white";
  }
};

export const getOffset = (offset: number, isFlat: boolean): number => (isFlat ? offset : offset + 4);
