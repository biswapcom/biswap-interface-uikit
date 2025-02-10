export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xll: string;
  xxl: string;
  wide: string;
  // nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
  tooltip: string;
};

export type MarkerType = {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
};

export type Gradients = {
  bubblegum: string;
  cardHeader: string;
  cardBlue: string;
};

export type Colors = {
  //Brand color
  binance: string;
  polygon: string;
  telegram: string;
  twitter: string;

  //BS ---------------------------
  //Base colors
  primary: string;
  secondary: string;
  warning: string;
  boost: string;
  backgroundDark: string;
  backgroundLight: string;
  white: string;
  tooltip: string;
  pastelBlue: string;

  //BS Additional colors
  primaryHover: string;
  primaryPress: string;
  secondaryHover: string;
  secondaryPress: string;
  successHover: string;
  successPress: string;
  warningHover: string;
  warningPress: string;
  boostHover: string;
  boostPress: string;

  //Button additional colors
  btnTertiary: string;

  btnTertiaryOut: string;
  btnTertiaryOutPress: string;

  btnLightOutBorder: string;
  btnLightOutBgHover: string;
  btnLightOutBgPress: string;

  btnLight: string;

  toggleBg: string;

  //BS dark palette
  dark900: string;
  dark800: string;
  dark700: string;
  dark600: string;
  dark500: string;
  dark400: string;
  dark300: string;
  dark200: string;
  dark100: string;

  //BS light palette
  gray900: string;
  gray800: string;
  gray700: string;
  gray600: string;
  gray500: string;
  gray400: string;
  gray300: string;
  gray200: string;
  gray100: string;

  //badgeSpecialColors
  successOpacity: string;
  secondaryOpacity: string;
  primaryOpacity: string;
  warningOpacity: string;

  //newColors
  blue: string;
  wineRed: string;
  black: string;
  buttonLightBlue: string;
  //newTheme
  background: string;
  fill1: string;
  fill2: string;
  fill3: string;
  fill4: string;
  fill5: string;
  fill6: string;
  skyBlue: string;
  violet: string;
  yellow: string;
  yellowBtn: string;
  red: string;
  success: string;
  text1: string;
  text2: string;
  text3: string;
  text5: string;
  divider1: string;
  divider2: string;
  divider3: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
