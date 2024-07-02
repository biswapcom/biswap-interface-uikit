import { Variants } from "./types";

export const PaginationVariants = {
  [Variants.LIGHT]: {
    color: "primary",
  },
  [Variants.DARK]: {
    color: "white",
  },
};

export const VariantsArrows = {
  [Variants.LIGHT]: {
    border: "1px solid rgba(18, 99, 241, 0.16)",
    color: "primary",

    ":hover": {
      backgroundColor: "rgba(18, 99, 241, 0.16)",
      borderColor: "transparent",
    },
  },
  [Variants.DARK]: {
    border: "1px solid rgba(255, 255, 255, 0.24)",
    color: "white",

    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.24)",
      borderColor: "transparent",
    },
  },
};
