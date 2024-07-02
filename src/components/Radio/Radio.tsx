import React, { FC } from "react";
import styled from "styled-components";
import { space } from "styled-system";

// types
import { type RadioProps, Scales, Variants } from "./types";

// components
import { Text } from "../Text";

const getScale = ({ scale }: RadioProps) => {
  switch (scale) {
    case Scales.SM:
      return "16px";
    case Scales.MD:
    default:
      return "20px";
  }
};

const Wrapper = styled.label<{ labelOrientation?: string }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ labelOrientation }) => (labelOrientation === "left" ? "row-reverse" : "row")};
  cursor: pointer;
`;

const InputRadio = styled.input.attrs({ type: "radio" })<RadioProps>`
  position: relative;
  display: inline-block;
  width: ${getScale};
  height: ${getScale};
  margin: 0;
  border: 2px solid ${({ theme }) => theme.colors.pastelBlue};
  border-radius: 50%;
  transition:
    border-color 0.4s ease-in-out,
    border-width 0.3s ease-in-out;
  appearance: none;
  overflow: hidden;
  cursor: pointer;

  &:hover:not(:disabled):not(:checked) {
    border-color: ${({ theme }) => theme.colors.success};
  }

  &:focus {
    outline: none;
  }

  &:checked {
    border-color: ${({ theme }) => theme.colors.success};
    border-width: 4px;
  }

  &:checked + span {
    color: ${({ theme, colorVariant }) =>
      colorVariant === Variants.DARK
        ? theme.colors.white
        : colorVariant === Variants.LIGHT
          ? theme.colors.dark800
          : theme.colors.gray900};
    background: ${({ colorVariant }) => colorVariant};
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
  ${space}
`;

const StyledText = styled(Text)`
  transition: color 0.4s ease-in-out;
`;

const Radio: FC<RadioProps> = ({
  labelOrientation = "left",
  label,
  scale = Scales.MD,
  radioName,
  onChange,
  colorVariant = Variants.LIGHT,
  checked,
}) => {
  return (
    <Wrapper labelOrientation={labelOrientation}>
      <InputRadio scale={scale} name={radioName} onChange={onChange} colorVariant={colorVariant} checked={checked} />
      {label && labelOrientation && (
        <StyledText
          as="span"
          fontSize="12px"
          fontWeight="400"
          color="gray900"
          mr={labelOrientation === "left" ? "12px" : 0}
          ml={labelOrientation === "right" ? "12px" : 0}
        >
          {label}
        </StyledText>
      )}
    </Wrapper>
  );
};

export default Radio;
