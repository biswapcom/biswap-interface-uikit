import React, { FC } from "react";
import styled from "styled-components";

// types
import { type CheckboxProps, CheckboxScales } from "./types";

// utils
import getRgba from "../../util/getRgba";

// components
import { Text } from "../Text";

const getScale = ({ scale }: CheckboxProps) => {
  switch (scale) {
    case CheckboxScales.SM:
      return "16px";
    case CheckboxScales.MD:
    default:
      return "20px";
  }
};

const Wrapper = styled.label<{
  labelOrientation?: string;
  checkboxPosition?: string;
}>`
  display: inline-flex;
  align-items: ${({ checkboxPosition }) => checkboxPosition ?? "center"};
  flex-direction: ${({ labelOrientation }) => (labelOrientation === "left" ? "row-reverse" : "row")};
`;

const CheckboxInput = styled.input.attrs({ type: "checkbox" })<CheckboxProps>`
  position: relative;
  display: inline-block;
  width: ${getScale};
  min-width: ${getScale};
  height: ${getScale};
  min-height: ${getScale};
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: ${({ theme }) => getRgba(theme.colors.pastelBlue, theme, 0.16)};
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  transition:
    background-color 0.4s ease-in-out,
    border-color 0.4s ease;

  &:after {
    content: "";
    position: absolute;
    top: 25%;
    left: 0;
    right: 0;
    width: 65%;
    height: 37%;
    margin: auto;
    border-bottom: 2px solid;
    border-left: 2px solid;
    border-color: transparent;
    transform: rotate(-50deg);
    transition: border-color 0.2s ease-in-out;
  }

  &:hover:not(:disabled):not(:checked) {
    border-color: ${({ theme }) => theme.colors.success};
  }

  &:focus {
    outline: none;
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.success};

    &:after {
      border-color: white;
    }
  }

  &:checked + span {
    background: ${({ colorVariant }) => colorVariant};
    color: ${({ theme, colorVariant }) =>
      colorVariant === "dark"
        ? theme.colors.white
        : colorVariant === "light"
          ? theme.colors.dark800
          : theme.colors.gray900};
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;

const StyledText = styled(Text)`
  transition: color 0.4s ease-in-out;
`;

const Checkbox: FC<CheckboxProps> = ({
  labelOrientation = "left",
  label,
  scale = CheckboxScales.MD,
  colorVariant = "light",
  id,
  defaultChecked,
  onChange,
  value,
  disabled,
  inputMargin,
  checkboxPosition,
}) => {
  return (
    <Wrapper checkboxPosition={checkboxPosition} labelOrientation={labelOrientation}>
      <CheckboxInput
        checked={value}
        scale={scale}
        colorVariant={colorVariant}
        id={id}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
      />
      {label && labelOrientation && (
        <StyledText
          as="span"
          fontSize="12px"
          fontWeight="600"
          color="gray900"
          mr={labelOrientation === "left" ? inputMargin ?? "12px" : 0}
          ml={labelOrientation === "right" ? inputMargin ?? "12px" : 0}
        >
          {label}
        </StyledText>
      )}
    </Wrapper>
  );
};

export default Checkbox;
