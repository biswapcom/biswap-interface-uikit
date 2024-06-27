import React, { useState, useRef, useEffect, FC, BaseSyntheticEvent } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import { variant as systemVariant, space } from "styled-system";

// types
import {
  type DropdownProps,
  type DropdownPositionProps,
  type OptionProps,
  DropdownPosition,
  DropdownScales,
  DropdownVariants,
} from "./types";

// components
import IconComponent from "../Svg/IconComponent";
import ChevronDown from "../Svg/Icons/Arrows/ChevronDown";
import { Box, Flex } from "../Box";

// theme
import {
  scaleVariantsContainer,
  scaleVariantsTop,
  scaleVariantsContent,
  styleVariantsTop,
  scaleVariantItem,
} from "./theme";

const getBottom = ({ position }: DropdownPositionProps): string =>
  position === DropdownPosition.TOP ? "calc(100% + 8px)" : "-8px";

const Container = styled(Box)<{
  maxWidth?: string;
  minWidth?: string;
  scale?: DropdownScales;
}>`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  min-width: ${({ minWidth }) => minWidth || "0"};

  ${systemVariant({
    prop: "scale",
    variants: scaleVariantsContainer,
  })}

  ${space}
`;
const DropdownTop = styled(Flex)<{
  disabled?: boolean;
  scale?: DropdownScales;
  variant?: DropdownVariants;
}>`
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.4s ease-in-out;
  opacity: ${({ disabled }) => (disabled ? ".56" : "1")};

  ${systemVariant({
    prop: "scale",
    variants: scaleVariantsTop,
  })}
  ${systemVariant({
    variants: styleVariantsTop,
  })}

  ${(props) =>
    props.disabled &&
    props.variant === DropdownVariants.LIGHT &&
    css`
      border-color: ${({ theme }) => theme.colors.gray300} !important;
      color: ${({ theme }) => theme.colors.gray900} !important;
    `}
  ${(props) =>
    props.disabled &&
    props.variant === DropdownVariants.DARK &&
    css`
      border-color: ${({ theme }) => theme.colors.dark500} !important;
      color: ${({ theme }) => theme.colors.pastelBlue} !important;
    `}
`;

const Label = styled.span`
  flex-grow: 1;
`;

const StyledArrow = styled(ChevronDown)<{ isOpen: boolean }>`
  transition: transform 0.4s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "scale(1,-1)" : "scale(1,1)")};
`;

const DropdownContent = styled.div<{ position?: DropdownPosition; scale?: DropdownScales }>`
  position: absolute;
  left: 0;
  bottom: ${getBottom};
  width: 100%;
  box-shadow: ${({ position }) =>
    position === DropdownPosition.BOTTOM
      ? "0 16px 32px rgba(0, 26, 67, 0.24)"
      : "box-shadow: 0 -16px 32px rgba(0, 26, 67, 0.24);"};
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  z-index: 101;
  transform: ${({ position }) => (position === DropdownPosition.BOTTOM ? "translateY(100%)" : "translateY(0)")};

  ${systemVariant({
    prop: "scale",
    variants: scaleVariantsContent,
  })}
`;

const DropdownItem = styled(Flex)<{ scale?: DropdownScales; selected?: boolean }>`
  align-items: center;
  color: ${({ theme, selected }) => (selected ? theme.colors.primary : theme.colors.dark800)};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.4s ease-out;

  ${systemVariant({
    prop: "scale",
    variants: scaleVariantItem,
  })}

  &:hover {
    background: ${({ theme }) => theme.colors.gray200};
  }
`;

const Dropdown: FC<DropdownProps> = ({
  position = DropdownPosition.BOTTOM,
  maxWidth,
  minWidth,
  scale,
  variant,
  disabled,
  options,
  onChange,
  selectedItem,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<OptionProps>(selectedItem || options[0]);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedItem && selectedItem?.value !== selectedOption?.value) setSelectedOption(selectedItem);
  }, [selectedItem, selectedOption]);

  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      if (!wrapperRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside, {
      passive: true,
    });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const toggling = (event: BaseSyntheticEvent) => {
    if (!disabled) {
      setIsOpen(!isOpen);
      event.stopPropagation();
    }

    return;
  };

  const onOptionClicked = (option: OptionProps) => () => {
    setIsOpen(false);
    setSelectedOption(options[options.indexOf(option)]);

    if (onChange) {
      onChange(option);
    }
  };

  const scaleVariantsImage = (scaleItem: DropdownScales): number => {
    switch (scaleItem) {
      case DropdownScales.LG:
        return 24;
      case DropdownScales.MD:
        return 20;
      case DropdownScales.SM:
      default:
        return 16;
    }
  };

  return (
    <Container maxWidth={maxWidth} minWidth={minWidth} ref={wrapperRef} scale={scale} {...props}>
      <DropdownTop
        scale={scale}
        variant={variant}
        onClick={toggling}
        disabled={disabled}
        className={isOpen ? "open" : disabled ? "disabled" : ""}
      >
        {selectedOption.icon &&
          (selectedOption.icon.isAws ? (
            <Image
              src={selectedOption.icon.name}
              width={scaleVariantsImage(scale)}
              height={scaleVariantsImage(scale)}
              quality={90}
              alt="icon"
            />
          ) : (
            <IconComponent iconName={selectedOption.icon.name} color={selectedOption.icon.color} />
          ))}
        <Label>{selectedOption.label}</Label>
        <StyledArrow className="arrow" isOpen={isOpen} />
      </DropdownTop>
      {isOpen && (
        <DropdownContent position={position} scale={scale}>
          {options.map((option) => (
            <DropdownItem
              scale={scale}
              selected={option.label === selectedOption.label}
              onClick={onOptionClicked(option)}
              key={option.label}
            >
              {option.icon &&
                (option.icon.isAws ? (
                  <Image
                    src={option.icon.name}
                    width={scaleVariantsImage(scale)}
                    height={scaleVariantsImage(scale)}
                    quality={90}
                    alt="icon"
                  />
                ) : (
                  <IconComponent iconName={option.icon.name} color={option.icon.color} />
                ))}
              <span>{option.label}</span>
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </Container>
  );
};

export default Dropdown;
