import { Scales, Variants } from "./types";

export const barItemScaleVariant = {
  [Scales.LG]: {
    height: "40px",
    padding: "0 16px",
    fontSize: "16px",
    lineHeight: "24px",
  },
  [Scales.MD]: {
    height: "32px",
    padding: "0 12px",
    fontSize: "14px",
    lineHeight: "20px",
  },
  [Scales.SM]: {
    height: "24px",
    padding: "0 8px",
    fontSize: "12px",
    lineHeight: "16px",
  },
};

export const barVariants = {
  [Variants.DARK]: {
    color: "pastelBlue",

    ":hover:not(:disabled)": {
      color: "white",
    },
  },
  [Variants.LIGHT]: {
    color: "gray900",

    ":hover:not(:disabled)": {
      color: "dark800",
    },
  },
};

export const menuIconScaleVariants = {
  [Scales.LG]: {
    width: "24px",
    marginRight: "10px",
  },
  [Scales.MD]: {
    width: "20px",
    marginRight: "8px",
  },
  [Scales.SM]: {
    width: "16px",
    marginRight: "6px",
  },
};

export const sectionScaleVariants = {
  [Scales.LG]: {
    padding: "0 16px",
  },
  [Scales.MD]: {
    padding: "0 12px",
  },
  [Scales.SM]: {
    padding: "0 8px",
  },
};
