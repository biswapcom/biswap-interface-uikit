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
  success: string;
  warning: string;
  boost: string;
  backgroundDark: string;
  backgroundLight: string;
  white: string;
  tooltip: string;

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
  crayola: string;
  newCar: string;
  radicalRed: string;
  rustyRed: string;
  wineRed: string;
  green: string;
  goGreen: string;
  jonquil: string;
  deepLemon: string;
  electricIndigo: string;
  frenchViolet: string;
  //
  pastelBlue: string;
  darkBlue: string;
  superBlack: string;
  black: string;
  basic1: string;
  basic2: string;
  basic3: string;
  basic4: string;
  basic5: string;
  basic6: string;
  basic7: string;
  basic8: string;
  basic9: string;
  basic10: string;
  basic11: string;
  basic12: string;
  basic13: string;
  basic14: string;
  basic15: string;
  basic16: string;
  basic17: string;
  basic18: string;
  ghost: string;
  buttonLightBlue: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
