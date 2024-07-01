import { Variants, Scales } from "./types";

export const scaleVariants = {
  [Scales.XL]: {
    height: "48px",
    padding: "0 24px",
    borderRadius: "10px",
    fontSize: "16px",
  },
  [Scales.LG]: {
    height: "40px",
    padding: "0 16px",
    fontSize: "14px",
    borderRadius: "8px",
  },
  [Scales.MD]: {
    height: "32px",
    padding: "0 12px",
    fontSize: "12px",
    borderRadius: "8px",
  },
  [Scales.SM]: {
    height: "24px",
    padding: "0 8px",
    fontSize: "12px",
    borderRadius: "6px",
  },
  [Scales.XS]: {
    height: "20px",
    padding: "0 8px",
    fontSize: "12px",
    borderRadius: "6px",
  },
};

export const styleVariants = {
  [Variants.DARK]: {
    color: "white",
    backgroundColor: "transparent",

    ":active:not(:disabled)": {
      backgroundColor: "transparent",
    },
  },
  [Variants.LIGHT]: {
    backgroundColor: "transparent",
    color: "dark800",

    ":hover(:disabled)": {
      color: "dark800",
    },
    ":active:not(:disabled)": {
      color: "text",
    },
  },
  [Variants.WARNING_DARK]: {
    backgroundColor: "transparent",
    color: "dark800",

    ":hover(:disabled)": {
      color: "dark800",
    },
    ":active:not(:disabled)": {
      color: "dark800",
    },
    ":active": {
      backgroundColor: "transparent",
    },
  },
  [Variants.WARNING_LIGHT]: {
    backgroundColor: "transparent",
    color: "dark800",

    ":hover(:disabled)": {
      color: "dark800",
    },
    ":active:not(:disabled)": {
      color: "dark800",
    },
  },
};

export const markerScales = {
  [Scales.XL]: {
    top: "2px",
    right: "8px",
  },
  [Scales.LG]: {
    top: "2px",
    right: "8px",
  },
  [Scales.MD]: {
    top: "2px",
    right: "8px",
  },
  [Scales.SM]: {
    top: "2px",
    right: "8px",
  },
  [Scales.XS]: {
    top: "2px",
    right: "8px",
  },
};
