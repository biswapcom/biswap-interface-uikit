import { DropdownScales, DropdownVariants } from "./types";

export const scaleVariantsContainer = {
  [DropdownScales.LG]: {
    height: "48px",
  },
  [DropdownScales.MD]: {
    height: "40px",
  },
  [DropdownScales.SM]: {
    height: "32px",
  },
};

export const scaleVariantsTop = {
  [DropdownScales.LG]: {
    padding: "0 12px 0 24px",
    fontSize: "16px",
    borderRadius: "10px",

    svg: {
      width: "24px",
      marginRight: "12px",
    },
    img: {
      marginRight: "12px",
    },
  },
  [DropdownScales.MD]: {
    padding: "0 10px 0 16px",
    fontSize: "14px",
    borderRadius: "8px",

    svg: {
      width: "20px",
      marginRight: "8px",
    },
    img: {
      marginRight: "8px",
    },
  },
  [DropdownScales.SM]: {
    padding: "0 8px 0 12px",
    fontSize: "12px",
    borderRadius: "8px",

    svg: {
      width: "16px",
      marginRight: "8px",
    },
    img: {
      marginRight: "8px",
    },
  },
};

export const scaleVariantsContent = {
  [DropdownScales.LG]: {
    borderRadius: "10px",
  },
  [DropdownScales.MD]: {
    borderRadius: "8px",
  },
  [DropdownScales.SM]: {
    borderRadius: "8px",
  },
};

export const scaleVariantItem = {
  [DropdownScales.LG]: {
    height: "48px",
    fontSize: "16px",
    padding: "0 25px",

    svg: {
      width: "24px",
      marginRight: "12px",
    },
    img: {
      marginRight: "12px",
    },
  },
  [DropdownScales.MD]: {
    height: "40px",
    fontSize: "14px",
    padding: "0 17px",

    svg: {
      width: "20px",
      marginRight: "8px",
    },
    img: {
      marginRight: "8px",
    },
  },
  [DropdownScales.SM]: {
    height: "32px",
    fontSize: "12px",
    padding: "0 13px",

    svg: {
      width: "16px",
      marginRight: "8px",
    },
    img: {
      marginRight: "8px",
    },
  },
};

export const styleVariantsTop = {
  [DropdownVariants.LIGHT]: {
    borderColor: "gray300",
    color: "gray900",

    ".arrow": {
      fill: "gray900",
    },
    ":hover": {
      color: "dark800",
      borderColor: "gray500",
    },
    "&.open": {
      color: "dark800",
      borderColor: "primary",

      ":hover": {
        color: "dark800",
        borderColor: "primary",
      },

      ".arrow": {
        fill: "primary",
      },
    },
  },
  [DropdownVariants.DARK]: {
    borderColor: "pastelBlue",
    color: "white",

    ".arrow": {
      fill: "pastelBlue",
    },
    ":hover": {
      color: "white",
      borderColor: "pastelBlue",
    },
    "&.open": {
      color: "white",
      borderColor: "primary",

      ":hover": {
        color: "white",
        borderColor: "primary",
      },
      ".arrow": {
        fill: "primary",
      },
    },
  },
};
