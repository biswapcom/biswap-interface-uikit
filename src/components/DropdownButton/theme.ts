import { css } from "styled-components";

// types
import { Scales, Variants } from "./types";

export const scaleVariantsContainer = {
  [Scales.LG]: {
    height: "48px",
  },
  [Scales.MD]: {
    height: "40px",
  },
  [Scales.SM]: {
    height: "32px",
  },
};
export const scaleVariantsTop = {
  [Scales.LG]: {
    padding: "0 12px 0 24px",
    fontSize: "16px",
    borderRadius: "10px",

    svg: {
      width: "24px",
      marginRight: "8px",
    },
    img: {
      marginRight: "8px",
    },

    ".arrow_primary": {
      marginLeft: "8px",
    },
  },
  [Scales.MD]: {
    padding: "0 10px 0 16px",
    fontSize: "14px",
    borderRadius: "8px",

    svg: {
      width: "20px",
      marginRight: "6px",
    },
    img: {
      marginRight: "6px",
    },

    ".arrow_primary": {
      marginLeft: "6px",
    },
  },
  [Scales.SM]: {
    padding: "0 8px 0 12px",
    fontSize: "12px",
    borderRadius: "8px",

    svg: {
      width: "16px",
      marginRight: "4px",
    },
    img: {
      marginRight: "4px",
    },

    ".arrow_primary": {
      marginLeft: "4px",
    },
  },
};

export const scaleVariantsContent = {
  [Scales.LG]: {
    borderRadius: "10px",
  },
  [Scales.MD]: {
    borderRadius: "8px",
  },
  [Scales.SM]: {
    borderRadius: "8px",
  },
};

export const scaleVariantItem = {
  [Scales.LG]: {
    height: "48px",
    fontSize: "16px",
    padding: "0 24px",

    svg: {
      width: "24px",
      marginRight: "8px",
    },
    img: {
      marginRight: "8px",
    },
  },
  [Scales.MD]: {
    height: "40px",
    fontSize: "14px",
    padding: "0 10px 0 16px",

    svg: {
      width: "20px",
      marginRight: "6px",
    },
    img: {
      marginRight: "6px",
    },
  },
  [Scales.SM]: {
    height: "32px",
    fontSize: "12px",
    padding: "0 8px 0 12px",

    svg: {
      width: "16px",
      marginRight: "4px",
    },
    img: {
      marginRight: "4px",
    },
  },
};

export const styleVariantsTop = {
  [Variants.PRIMARY]: {
    color: "primary",

    ".arrow": {
      fill: "primary",
    },
  },
  [Variants.SECONDARY]: {
    color: "gray900",

    ".arrow": {
      fill: "gray900",
    },
  },
  [Variants.LIGHT]: {
    color: "white",

    ".arrow": {
      fill: "white",
    },
  },
  [Variants.DARK]: {
    color: "dark800",

    ".arrow": {
      fill: "dark800",
    },
  },
};

export const getVariantColor = (variant: Variants) => {
  switch (variant) {
    case Variants.SECONDARY:
      return css`
        color: ${({ theme }) => theme.colors.gray900} !important;
      `;
    case Variants.LIGHT:
      return css`
        color: ${({ theme }) => theme.colors.white} !important;
      `;
    case Variants.DARK:
      return css`
        color: ${({ theme }) => theme.colors.dark800} !important;
      `;
    case Variants.PRIMARY:
    default:
      return css`
        color: ${({ theme }) => theme.colors.primary} !important;
      `;
  }
};
