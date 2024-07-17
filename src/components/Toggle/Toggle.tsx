import React, { FC } from "react";
import { SpaceProps } from "styled-system";

// styled
import StyledToggle, { Input, Handle, Label, ToggleWrap } from "./StyledToggle";

// types
import { type ToggleProps, Scales, Variants } from "./types";
import { Scales as BodyTextScales } from "../Typography";

const Toggle: FC<ToggleProps> = ({
  checked,
  defaultColor = "toggleBg",
  checkedColor = "success",
  scale = Scales.MD,
  disabled,
  label,
  labelOrientation,
  gridArea,
  variant = Variants.LIGHT,
  spaceBetween,
  labelSize = BodyTextScales.SIZE12,
  ...props
}) => {
  const isChecked = !!checked;

  return (
    <ToggleWrap
      labelOrientation={labelOrientation}
      disabled={disabled}
      gridArea={gridArea}
      spaceBetween={spaceBetween}
      {...(props as SpaceProps)}
    >
      <StyledToggle
        $checked={isChecked}
        $checkedColor={checkedColor}
        $defaultColor={defaultColor}
        scale={scale}
        disabled={disabled}
      >
        <Input readOnly checked={checked} scale={scale} type="checkbox" disabled={disabled} />
        <Handle scale={scale} disabled={disabled} />
      </StyledToggle>
      {label && (
        <Label
          labelOrientation={labelOrientation}
          isChecked={isChecked}
          disabled={disabled}
          variant={variant}
          scale={labelSize}
          as="span"
        >
          {label}
        </Label>
      )}
    </ToggleWrap>
  );
};

export default Toggle;
