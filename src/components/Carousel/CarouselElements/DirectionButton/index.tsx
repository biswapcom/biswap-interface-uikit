import React, { FC } from "react";

// components
import IconComponent from "../../../Svg/IconComponent";

// styles
import { WrapperDirectionButton } from "./styles";

// types
import { IDirectionButtonProps, CarouselButtonsTypes } from "../../types";

const DirectionButton: FC<IDirectionButtonProps> = ({
  enabled,
  onClick,
  iconName,
  isNextButton,
  themeType,
  navPadding,
}) => {
  return (
    <WrapperDirectionButton
      onClick={onClick}
      disabled={!enabled}
      isNextButton={isNextButton}
      variant={themeType}
      navPadding={navPadding}
    >
      <IconComponent
        iconName={iconName}
        color={themeType === CarouselButtonsTypes.WHITE ? "dark900" : "white"}
        height="32px"
      />
    </WrapperDirectionButton>
  );
};

export default DirectionButton;
