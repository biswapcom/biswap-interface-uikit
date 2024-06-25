import { BadgeTypes } from "./types";

export const BadgeTypesContainer = {
  [BadgeTypes.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
    border: "0",
  },
  [BadgeTypes.ERROR]: {
    backgroundColor: "secondary",
    color: "white",
    border: "0",
  },
  [BadgeTypes.WARNING]: {
    backgroundColor: "warning",
    color: "dark800",
    border: "0",
  },
  [BadgeTypes.PRIMARY]: {
    backgroundColor: "primary",
    color: "white",
    border: "0",
  },
  [BadgeTypes.BOOST]: {
    backgroundColor: "boost",
    color: "white",
    border: "0",
  },
  [BadgeTypes.ACTIVE]: {
    backgroundColor: "successOpacity",
    color: "success",
    border: "1px solid transparent",
  },
  [BadgeTypes.NOT_ACTIVE]: {
    backgroundColor: "secondaryOpacity",
    color: "secondary",
    border: "1px solid transparent",
  },
  [BadgeTypes.CORE]: {
    backgroundColor: "primaryOpacity",
    color: "primary",
    border: "1px solid transparent",
  },
  [BadgeTypes.WARNING_OPACITY]: {
    backgroundColor: "warningOpacity",
    color: "warning",
    border: "1px solid transparent",
  },
  [BadgeTypes.LIGHT]: {
    backgroundColor: "gray200",
    color: "dark800",
    border: "0",
  },
};
