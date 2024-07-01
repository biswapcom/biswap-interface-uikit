import React, { FC, cloneElement } from "react";
import styled, { css } from "styled-components";
import { variant as systemVariant } from "styled-system";
import Image from "next/image";

// components
import { Box } from "../Box";
import Input from "./Input";
import { Text } from "../Text";
import IconComponent from "../Svg/IconComponent";

// types
import { type InputGroupProps, Scales, Variants } from "./types";

// theme
import { styleVariants, scaleVariants, styleTextVariants } from "./theme";

const getPadding = (scale: Scales, hasIcon: boolean): string => {
  if (!hasIcon) {
    switch (scale) {
      case Scales.SM:
        return "12px";
      case Scales.LG:
        return "24px";
      case Scales.MD:
      default:
        return "16px";
    }
  }

  switch (scale) {
    case Scales.SM:
      return "36px";
    case Scales.LG:
      return "60px";
    case Scales.MD:
    default:
      return "44px";
  }
};

const getIconPosition = (scale: Scales): string => {
  switch (scale) {
    case Scales.LG:
      return "24px";
    case Scales.MD:
      return "16px";
    case Scales.SM:
    default:
      return "12px";
  }
};

const getImageSize = (scale: Scales): number => {
  switch (scale) {
    case Scales.LG:
      return 24;
    case Scales.MD:
      return 20;
    case Scales.SM:
    default:
      return 16;
  }
};

const StyledInputWrapper = styled(Box)<{
  disabled?: boolean;
}>`
  position: relative;
  display: block;
  width: 100%;
  outline: 0;
  opacity: ${({ disabled }) => (disabled ? ".56" : "1")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "initial")};
`;

const StyledInputGroup = styled(Box)<{
  scale: Scales;
  variant?: Variants;
  hasStartIcon: boolean;
  hasEndIcon: boolean;
}>`
  ${systemVariant({
    prop: "scale",
    variants: scaleVariants,
  })}

  ${Input} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    ${systemVariant({
      prop: "variant",
      variants: styleVariants,
    })}

    padding-left: ${({ hasStartIcon, scale }) => getPadding(scale, hasStartIcon)};
    padding-right: ${({ hasEndIcon, scale }) => getPadding(scale, hasEndIcon)};
  }
`;

const iconCss = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
`;

const StyledIconComponent = styled(IconComponent)`
  ${() => iconCss}
`;

const LeftIconComponent = styled(StyledIconComponent)<{ scale: Scales }>`
  left: ${({ scale }) => getIconPosition(scale)};
`;

const LeftIconImage = styled(Box)<{ scale: Scales }>`
  ${() => iconCss}
  left: ${({ scale }) => `${getIconPosition(scale)}px`};
`;

const RightIconComponent = styled(StyledIconComponent)<{ scale: Scales }>`
  right: ${({ scale }) => getIconPosition(scale)};
`;

const TextDescription = styled(Text)<{ variant?: Variants }>`
  ${systemVariant({
    prop: "variant",
    variants: styleTextVariants,
  })}
`;

const InputGroup: FC<InputGroupProps> = ({
  scale = Scales.MD,
  startIcon,
  startImage,
  endIcon,
  children,
  variant,
  isError,
  isWarning,
  disabled,
  description,
  baseAwsUrl = "https://static.biswap.org/bs",
  ...props
}) => {
  return (
    <StyledInputWrapper width="100%" position="relative" disabled={disabled} {...props}>
      <StyledInputGroup
        scale={scale}
        variant={variant}
        width="100%"
        position="relative"
        hasStartIcon={!!startIcon || !!startImage}
        hasEndIcon={!!endIcon}
      >
        {startIcon && <LeftIconComponent color={startIcon.color} iconName={startIcon.iconName} scale={scale} />}
        {startImage && (
          <LeftIconImage scale={scale}>
            <Image
              width={getImageSize(scale)}
              height={getImageSize(scale)}
              src={`${baseAwsUrl}${startImage?.imageSrc}`}
              alt="img"
            />
          </LeftIconImage>
        )}
        {cloneElement(children, { variant, scale, disabled })}
        {!isError && !isWarning && endIcon && (
          <RightIconComponent color={endIcon.color} iconName={endIcon.iconName} scale={scale} />
        )}
        {isError && <RightIconComponent iconName="CloseCircleSolid" color="secondary" scale={scale} />}
        {isWarning && <RightIconComponent iconName="WarningSolid" color="warning" scale={scale} />}
      </StyledInputGroup>
      {description && (
        <TextDescription mt="4px" fontSize="12px" variant={variant}>
          {description}
        </TextDescription>
      )}
    </StyledInputWrapper>
  );
};

export default InputGroup;
