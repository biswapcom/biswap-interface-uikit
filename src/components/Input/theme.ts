import { Scales, Variants } from "./types";

export const scaleVariants = {
  [Scales.LG]: {
    borderRadius: "10px",
    height: "48px",
    fontSize: "16px",
    padding: "0 24px",

    svg: {
      width: "24px",
    },
  },
  [Scales.MD]: {
    borderRadius: "8px",
    height: "40px",
    fontSize: "14px",
    padding: "0 16px",

    svg: {
      width: "20px",
    },
  },
  [Scales.SM]: {
    borderRadius: "8px",
    height: "32px",
    fontSize: "12px",
    padding: "0 12px",

    svg: {
      width: "16px",
    },
  },
};

export const styleVariants = {
  [Variants.LIGHT]: {
    backgroundColor: "gray300",
    color: "dark800",

    "::placeholder": {
      color: "gray900",
    },
    ":hover:not(:disabled)": {
      borderColor: "gray500",
      backgroundColor: "transparent",
      color: "dark800",
    },
    ":focus:not(:disabled)": {
      borderColor: "primary",
      backgroundColor: "transparent",
      color: "dark800",
    },
  },
  [Variants.LIGHT_WARNING]: {
    borderColor: "warning",
    backgroundColor: "transparent",
    color: "dark800",

    "::placeholder": {
      color: "dark800",
    },
  },
  [Variants.LIGHT_ERROR]: {
    borderColor: "secondary",
    backgroundColor: "transparent",
    color: "dark800",

    "::placeholder": {
      color: "dark800",
    },
  },
  [Variants.DARK]: {
    backgroundColor: "dark500",
    color: "white",

    "::placeholder": {
      color: "pastelBlue",
    },
    ":hover:not(:disabled)": {
      borderColor: "dark300",
      backgroundColor: "transparent",
      color: "white",
    },
    ":focus:not(:disabled)": {
      borderColor: "primary",
      backgroundColor: "transparent",
      color: "white",
    },
  },
  [Variants.DARK_WARNING]: {
    borderColor: "warning",
    backgroundColor: "transparent",
    color: "white",

    "::placeholder": {
      color: "white",
    },
  },
  [Variants.DARK_ERROR]: {
    borderColor: "secondary",
    backgroundColor: "transparent",
    color: "white",

    "::placeholder": {
      color: "white",
    },
  },
  [Variants.TRANSPARENT]: {
    backgroundColor: "transparent",
    color: "dark800",

    "::placeholder": {
      color: "gray900",
    },
    ":hover:not(:disabled)": {
      borderColor: "transparent",
      backgroundColor: "transparent",
      color: "dark800",
    },
    ":focus:not(:disabled)": {
      borderColor: "transparent",
      backgroundColor: "transparent",
      color: "dark800",
    },
  },
};

export const styleTextVariants = {
  [Variants.LIGHT]: {
    color: "gray700",
  },
  [Variants.LIGHT_WARNING]: {
    color: "warning",
  },
  [Variants.LIGHT_ERROR]: {
    color: "secondary",
  },
  [Variants.DARK]: {
    color: "white",
  },
  [Variants.DARK_WARNING]: {
    color: "warning",
  },
  [Variants.DARK_ERROR]: {
    color: "secondary",
  },
  [Variants.TRANSPARENT]: {
    color: "dark800",
  },
};
