// types
import { CarouselButtonsTypes } from "../../hooks";

export interface IDirectionButtonProps {
  enabled: boolean;
  onClick: () => void;
  iconName: string;
  isNextButton?: boolean;
  navPadding?: number;
  themeType: CarouselButtonsTypes;
}

export interface IDirectButtonStyled {
  disabled?: boolean;
  isNextButton?: boolean;
  navPadding?: number;
  variant: CarouselButtonsTypes;
}
