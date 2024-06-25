import { Scales, Variants } from "./types";

export const scaleVariants = {
  [Scales.XL]: {
    height: "48px",
    fontSize: "16px",
    padding: "0 24px",
    borderRadius: "10px",
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
  [Variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "white",

    ":hover:not(:disabled)": {
      backgroundColor: "primaryHover",
    },
    ":active:not(:disabled)": {
      backgroundColor: "primaryPress",
    },
  },
  [Variants.DANGER]: {
    backgroundColor: "secondary",
    color: "white",

    ":hover:not(:disabled)": {
      backgroundColor: "secondaryHover",
    },
    ":active:not(:disabled)": {
      backgroundColor: "secondaryPress",
    },
  },
  [Variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",

    ":hover:not(:disabled)": {
      backgroundColor: "successHover",
    },
    ":active:not(:disabled)": {
      backgroundColor: "successPress",
    },
  },
  [Variants.WARNING]: {
    backgroundColor: "warning",
    color: "dark800",

    ":hover:not(:disabled)": {
      backgroundColor: "warningHover",
    },
    ":active:not(:disabled)": {
      backgroundColor: "warningPress",
    },
  },
  [Variants.BOOST]: {
    backgroundColor: "boost",
    color: "white",

    ":hover:not(:disabled)": {
      backgroundColor: "boostHover",
    },
    ":active:not(:disabled)": {
      backgroundColor: "boostPress",
    },
  },

  [Variants.TERTIARY]: {
    backgroundColor: "btnTertiary",
    color: "primary",
    border: "1px solid transparent",

    ":hover:not(:disabled)": {
      backgroundColor: "transparent",
      borderColor: "btnTertiary",
    },
    ":active:not(:disabled)": {
      backgroundColor: "transparent",
      borderColor: "primary",
    },
  },
  [Variants.TERTIARY_OUT]: {
    color: "primary",
    backgroundColor: "transparent",
    border: "1px solid",
    borderColor: "btnTertiaryOut",

    ":hover:not(:disabled)": {
      backgroundColor: "btnTertiaryOut",
      borderColor: "transparent",
    },
    ":active:not(:disabled)": {
      backgroundColor: "btnTertiaryOutPress",
      borderColor: "transparent",
    },
  },
  [Variants.LIGHT_OUT]: {
    color: "white",
    border: "1px solid",
    borderColor: "btnLightOutBorder",
    backgroundColor: "transparent",

    ":hover:not(:disabled)": {
      backgroundColor: "btnLightOutBgHover",
      borderColor: "transparent",
    },
    ":active:not(:disabled)": {
      backgroundColor: "btnLightOutBgPress",
      borderColor: "transparent",
    },
  },
  [Variants.LIGHT]: {
    backgroundColor: "btnLight",
    color: "white",
    border: "1px solid transparent",

    ":hover:not(:disabled)": {
      backgroundColor: "transparent",
      borderColor: "btnLight",
    },
    ":active:not(:disabled)": {
      backgroundColor: "transparent",
      borderColor: "white",
    },
  },
  [Variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",

    ":hover:not(:disabled)": {
      color: "primaryHover",
    },
    ":active:not(:disabled)": {
      color: "primaryPress",
    },
  },
  [Variants.TEXT_DARK]: {
    backgroundColor: "transparent",
    color: "primaryHover",
    boxShadow: "none",

    ":hover:not(:disabled)": {
      color: "primary",
    },
    ":active:not(:disabled)": {
      color: "primaryPress",
    },
  },
};
