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
  // redesign
  [Scales.XLR]: {
    height: "56px",
    fontSize: "20px",
    padding: "0 32px",
    borderRadius: "14px",
  },
  [Scales.LGR]: {
    height: "48px",
    fontSize: "18px",
    padding: "0 32px",
    borderRadius: "10px",
  },
  [Scales.MDR]: {
    height: "40px",
    fontSize: "16px",
    padding: "0 34px",
    borderRadius: "8px",
  },
  [Scales.SMR]: {
    height: "36px",
    fontSize: "16px",
    padding: "0 20px",
    borderRadius: "6px",
  },
  [Scales.SSMR]: {
    height: "28px",
    fontSize: "14px",
    padding: "0 16px",
    borderRadius: "6px",
  },
  [Scales.XSR]: {
    height: "20px",
    fontSize: "14px",
    padding: "0 8px",
    borderRadius: "4px",
  },
};

export const scaleVariantsIconOnly = {
  [Scales.XLR]: {
    padding: "0 16px",

    svg: {
      width: "24px",
    },
    img: {
      width: "24px",
    },
  },
  [Scales.LGR]: {
    padding: "0 12px",

    svg: {
      width: "24px",
    },
    img: {
      width: "24px",
    },
  },
  [Scales.MDR]: {
    padding: "0 8px",

    svg: {
      width: "24px",
    },
    img: {
      width: "24px",
    },
  },
  [Scales.SMR]: {
    padding: "0 8px",

    svg: {
      width: "20px",
    },
    img: {
      width: "20px",
    },
  },
  [Scales.SSMR]: {
    padding: "0 6px",

    svg: {
      width: "16px",
    },
    img: {
      width: "16px",
    },
  },
  [Scales.XSR]: {
    padding: "0 4px",

    svg: {
      width: "12px",
    },
    img: {
      width: "12px",
    },
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
  [Variants.LIGHT_BLUE]: {
    backgroundColor: "buttonLightBlue",
    color: "blue",
    boxShadow: "none",
    border: "1px solid transparent",

    ":hover:not(:disabled)": {
      backgroundColor: "transparent",
      borderColor: "buttonLightBlue",
    },
    ":active:not(:disabled)": {
      backgroundColor: "transparent",
      borderColor: "blue",
    },
  },
  //redesign
  [Variants.BLUE]: {
    backgroundColor: "skyBlue",
    color: "text4",

    ":hover:not(:disabled)": {
      opacity: 0.8,
    },
    ":active:not(:disabled)": {
      backgroundColor: "newCar",
    },
    ":disabled": {
      backgroundColor: "fill5",
      color: "text2",
    },
  },
  [Variants.VIOLET]: {
    backgroundColor: "violet",
    color: "text4",

    ":hover:not(:disabled)": {
      opacity: 0.8,
    },
    ":active:not(:disabled)": {
      backgroundColor: "darkViolet",
    },
    ":disabled": {
      backgroundColor: "fill5",
      color: "text2",
    },
  },
  [Variants.GREEN]: {
    backgroundColor: "green",
    color: "text4",

    ":hover:not(:disabled)": {
      opacity: 0.8,
    },
    ":active:not(:disabled)": {
      backgroundColor: "darkGreen",
    },
    ":disabled": {
      backgroundColor: "fill5",
      color: "text2",
    },
  },
  [Variants.RED]: {
    backgroundColor: "red",
    color: "text4",

    ":hover:not(:disabled)": {
      opacity: 0.8,
    },
    ":active:not(:disabled)": {
      backgroundColor: "darkRed",
    },
    ":disabled": {
      backgroundColor: "fill5",
      color: "text2",
    },
  },
  [Variants.YELLOW]: {
    backgroundColor: "yellowBtn",
    color: "fill10",

    ":hover:not(:disabled)": {
      opacity: 0.8,
    },
    ":active:not(:disabled)": {
      backgroundColor: "darkYellow",
    },
    ":disabled": {
      backgroundColor: "fill5",
      color: "text2",
    },
  },
  [Variants.TRANSPARENT_BLUE]: {
    backgroundColor: "rgba(55, 126, 247, 0.16)",
    color: "skyBlue",
    border: "1px solid transparent",

    ":hover:not(:disabled)": {
      opacity: 0.8,
      backgroundColor: "transparent",
      borderColor: "darkBlue",
    },
    ":active:not(:disabled)": {
      backgroundColor: "transparent",
      borderColor: "skyBlue",
      color: "text1",
    },
    ":disabled": {
      backgroundColor: "fill5",
      color: "text2",
    },
  },
  [Variants.TEXT_OUTLINE_BLUE]: {
    backgroundColor: "transparent",
    border: "1px solid",
    borderColor: "darkBlue",
    color: "skyBlue",

    ":hover:not(:disabled)": {
      opacity: 0.8,
      backgroundColor: "rgba(55, 126, 247, 0.24)",
      borderColor: "transparent",
    },
    ":active:not(:disabled)": {
      backgroundColor: "transparent",
      borderColor: "newCar",
      color: "newCar",
    },
    ":disabled": {
      borderColor: "fill5",
      color: "text5",
    },
  },
  [Variants.TEXT_OUTLINE_WHITE]: {
    backgroundColor: "transparent",
    border: "1px solid",
    borderColor: "darkBlue",
    color: "text1",

    ":hover:not(:disabled)": {
      opacity: 0.8,
      backgroundColor: "rgba(55, 126, 247, 0.24)",
      borderColor: "transparent",
    },
    ":active:not(:disabled)": {
      backgroundColor: "transparent",
      borderColor: "newCar",
      color: "text1",
    },
    ":disabled": {
      borderColor: "fill5",
      color: "text5",
    },
  },
  [Variants.TEXT_BLUE]: {
    color: "skyBlue",
    backgroundColor: "transparent",

    ":hover:not(:disabled)": {
      opacity: 0.8,
    },
    ":active:not(:disabled)": {
      backgroundColor: "rgba(55, 126, 247, 0.16)",
      color: "text1",
    },
    ":disabled": {
      color: "text5",
    },
  },
  [Variants.TEXT_PASTEL_BLUE]: {
    color: "pastelBlue",
    backgroundColor: "transparent",

    ":hover:not(:disabled)": {
      opacity: 0.8,
    },
    ":active:not(:disabled)": {
      backgroundColor: "rgba(55, 126, 247, 0.16)",
      color: "text3",
    },
    ":disabled": {
      color: "text5",
    },
  },
  [Variants.TEXT_WHITE]: {
    color: "text1",
    backgroundColor: "transparent",

    ":hover:not(:disabled)": {
      opacity: 0.8,
    },
    ":active:not(:disabled)": {
      backgroundColor: "rgba(55, 126, 247, 0.16)",
      color: "text2",
    },
    ":disabled": {
      color: "text5",
    },
  },
};
