export enum VariantsNavButton {
  PRIMARY = "primary",
  WHITE = "white",
  GRAY_OPACITY = "grayOpacity",
}

export interface IDirectionButtonProps {
  enabled: boolean;
  onClick: () => void;
  iconName: string;
  isNextButton?: boolean;
  navPadding?: number;
  themeType: VariantsNavButton;
}

export interface IDirectButtonStyled {
  disabled?: boolean;
  isNextButton?: boolean;
  navPadding?: number;
  variant: VariantsNavButton;
}
