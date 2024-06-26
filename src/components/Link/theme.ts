import { Variants, Scales } from "./types";

export const scaleVariants = {
  [Scales.LG]: {
    fontSize: "16px",

    svg: {
      width: "16px",
    },
  },
  [Scales.MD]: {
    fontSize: "14px",

    svg: {
      width: "14px",
    },
  },
  [Scales.SM]: {
    fontSize: "12px",

    svg: {
      width: "12px",
    },
  },
};

export const styleVariants = {
  [Variants.LIGHT]: {
    color: "primary",

    svg: {
      fill: "primary",
    },

    ":hover:not(:disabled)": {
      color: "primaryHover",

      svg: {
        fill: "primaryHover",
      },
    },
    ":active:not(:disabled)": {
      color: "primaryPress",

      svg: {
        fill: "primaryPress",
      },
    },
  },
  [Variants.DARK]: {
    color: "primaryHover",

    svg: {
      fill: "primaryHover",
    },

    ":hover:not(:disabled)": {
      color: "primary",

      svg: {
        fill: "primary",
      },
    },
    ":active:not(:disabled)": {
      color: "primaryPress",

      svg: {
        fill: "primaryPress",
      },
    },
  },
};
