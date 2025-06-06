import { Colors } from "./types";

export const baseColors = {
  //BS
  primary: "#1263F1",
  secondary: "#F93B5D",
  success: "#1DC872",
  warning: "#FFDB1C",
  boost: "#7412F1",
  backgroundDark: "#07162D",
  backgroundLight: "#F9FAFD",
  white: "#FFFFFF",
  tooltip: "#040C1A",
};

export const brandColors = {
  binance: "#F0B90B",
  polygon: "#8247E5",
  telegram: "#239FDB",
  twitter: "#16CDFD",
};

export const additionalColors = {
  // overlay: "#452a7a",
  // gold: "#FFC700",
  // silver: "#B2B2B2",
  // bronze: "#E7974D",

  //BS
  primaryHover: "#2E7AFF",
  primaryPress: "#004ACC",

  secondaryHover: "#FF506F",
  secondaryPress: "#E12446",

  successHover: "#38DC89",
  successPress: "#08B66D",

  warningHover: "#FEE560",
  warningPress: "#FFCD1C",

  boostHover: "#8E35FF",
  boostPress: "#6205D9",

  //---button additional colors
  btnTertiary: "rgba(18, 99, 241, 0.16)",

  btnTertiaryOut: "rgba(18, 99, 241, 0.16)",
  btnTertiaryOutPress: "rgba(18, 99, 241, 0.24)",

  btnLightOutBorder: "rgba(255, 255, 255, 0.24)",
  btnLightOutBgHover: "rgba(255, 255, 255, 0.24)",
  btnLightOutBgPress: "rgba(255, 255, 255, 0.32)",

  btnLight: "rgba(255, 255, 255, 0.24)",

  toggleBg: "rgba(116, 155, 216, 0.16);",

  //---Dark palette
  dark900: "#021127",
  dark800: "#07162D",
  dark700: "#071C3C",
  dark600: "#102648",
  dark500: "#1C3254",
  dark400: "#2A436A",
  dark300: "#3F5880",
  dark200: "#546F99",
  dark100: "#637FA9",

  //---LightPalette
  gray900: "#708DB7",
  gray800: "#83A0C9",
  gray700: "#9AB2D3",
  gray600: "#B5C6DE",
  gray500: "#C8D4E6",
  gray400: "#DFE7F2",
  gray300: "#E7EEF6",
  gray200: "#F2F6FC",
  gray100: "#F9FAFD",
};

export const badgeSpecialColors = {
  successOpacity: "rgba(29, 200, 114, 0.16)",
  secondaryOpacity: "rgba(249, 59, 93, 0.16)",
  primaryOpacity: "rgba(18, 99, 241, 0.16)",
  warningOpacity: "rgba(255, 205, 28, 0.16)",
};

export const newColors = {
  blue: "#377EF7",
  wineRed: "#A8102B",
  black: "#030811",
  // unique
  buttonLightBlue: "rgba(55, 126, 247, 0.16)",
  badgeLightOpacity: "rgba(112, 141, 183, 0.16)",
};

export const crossThemeColors = {
  pastelBlue: "#749BD8",
  darkViolet: "#5104B3",
  darkYellow: "#FFBB1C",
  darkRed: "#A8102B",
  darkGreen: "#07A462",
  darkBlue: "#0E3382",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  ...brandColors,
  ...badgeSpecialColors,
  ...newColors,
  ...crossThemeColors,
  background: "#F9FAFD",
  fill1: "#F2F6FC",
  fill2: "#DFE7F2",
  fill3: "#E7EEF6",
  fill4: "#9AB2D3",
  fill5: "#B5C6DE",
  fill6: "#07162D",
  fill7: "#F2F6FC",
  fill8: "#3F5880",
  fill9: "#C8D4E6",
  fill10: "#DFE7F2",
  fill11: "#9AB2D3",
  skyBlue: "#2A75F3",
  newCar: "#1056D0",
  violet: "#6205D9",
  yellow: "#FFCD1C",
  yellowBtn: "#FFDB1C",
  red: "#E12446",
  green: "#08B66D",
  text1: "#07162D",
  text2: "#1C3254",
  text3: "#3F5880",
  text4: "#F9FAFD",
  text5: "#9AB2D3",
  divider1: "#DFE7F2",
  divider2: "#DFE7F2",
  divider3: "#DFE7F2",
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  ...brandColors,
  ...badgeSpecialColors,
  ...newColors,
  ...crossThemeColors,
  background: "#030811",
  fill1: "#021127",
  fill2: "#071C3C",
  fill3: "#102648",
  fill4: "#708DB7",
  fill5: "#2A436A",
  fill6: "#E7EEF6",
  fill7: "#040C1A",
  fill8: "#9AB2D3",
  fill9: "#3F5880",
  fill10: "#07162D",
  fill11: "#1C3254",
  skyBlue: "#377EF7",
  newCar: "#1056D0",
  violet: "#7412F1",
  yellow: "#FFDB1C",
  yellowBtn: "#FFCD1C",
  red: "#F93B5D",
  green: "#1DC872",
  text1: "#E7EEF6",
  text2: "#C8D4E6",
  text3: "#9AB2D3",
  text4: "#F9FAFD",
  text5: "#2A436A",
  divider1: "#102648",
  divider2: "#2A436A",
  divider3: "#546F99",
};
