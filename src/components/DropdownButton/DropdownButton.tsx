import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { variant as systemVariant, space } from "styled-system";

// types
import { type DropdownButtonProps, type OptionProps, Positions, Scales, Variants } from "./types";

// theme
import {
  scaleVariantsContainer,
  scaleVariantsTop,
  scaleVariantsContent,
  styleVariantsTop,
  scaleVariantItem,
  getVariantColor,
} from "./theme";

// icons
import ChevronDown from "../Svg/Icons/Arrows/ChevronDown";
import ChevronDownCircleSolid from "../Svg/Icons/Arrows/ChevronDownCircleSolid";

// components
import IconComponent from "../Svg/IconComponent";
import { Box, Flex } from "../Box";

const getBottom = ({ contentPosition }: { contentPosition: Positions }): string =>
  contentPosition === Positions.TOP ? "calc(100% + 8px)" : "-8px";

const Container = styled(Box)<{
  maxWidth?: string;
  minWidth?: string;
  scale: Scales;
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
  disabled: boolean;
  scale: Scales;
  variant: Variants;
}>`
  align-items: center;
  width: 100%;
  height: 100%;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? ".56" : "1")};

  ${systemVariant({
    prop: "scale",
    variants: scaleVariantsTop,
  })}

  ${systemVariant({
    variants: styleVariantsTop,
  })}
  
  ${({ disabled, variant }) => disabled && getVariantColor(variant)}
  
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
  }
`;

const StyledArrow = styled(ChevronDown)<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "scale(1,-1)" : "scale(1,1)")};
  transition: transform 0.4s ease-in-out;
`;

const StyledArrowPrimary = styled(ChevronDownCircleSolid)<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "scale(1,-1)" : "scale(1,1)")};
  transition: transform 0.4s ease-in-out;
`;

const DropdownContent = styled(Box)<{
  contentPosition: Positions;
  scale: Scales;
  dropDownWidth?: string;
}>`
  position: absolute;
  left: 0;
  bottom: ${getBottom};
  width: ${({ dropDownWidth }) => (dropDownWidth ? dropDownWidth : "100%")};
  box-shadow: ${({ contentPosition }) =>
    contentPosition === "bottom" ? "0px 16px 32px rgba(0, 26, 67, 0.24)" : "0px -16px 32px rgba(0, 26, 67, 0.24)"};
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  transform: ${({ contentPosition }) => (contentPosition === "bottom" ? "translateY(100%)" : "translateY(0)")};
  transition: height 0.3s;
  z-index: 101;

  ${systemVariant({
    prop: "scale",
    variants: scaleVariantsContent,
  })}
`;

const DropdownItem = styled(Flex)<{ scale: Scales; selected?: boolean }>`
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

const DropdownButton: React.FC<DropdownButtonProps> = ({
  position = Positions.BOTTOM,
  maxWidth,
  minWidth,
  scale = Scales.MD,
  variant = Variants.PRIMARY,
  disabled = false,
  options,
  onChange,
  hideLabel,
  dropDownWidth,
  selectedItem,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<OptionProps>(selectedItem || options[0]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedItem && selectedItem?.value !== selectedOption?.value) setSelectedOption(selectedItem);
  }, [selectedItem, selectedOption]);

  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      if (wrapperRef.current && !wrapperRef.current.contains(target)) {
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

  const toggling = (event: React.MouseEvent<HTMLDivElement>) => {
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

  const scaleVariantsImage = (scaleItem: Scales): number => {
    switch (scaleItem) {
      case Scales.LG:
        return 24;
      case Scales.MD:
        return 20;
      case Scales.SM:
      default:
        return 16;
    }
  };

  const getIconMargin = (scaleItem: Scales): string => {
    switch (scaleItem) {
      case Scales.LG:
        return "8px";
      case Scales.MD:
        return "6px";
      case Scales.SM:
      default:
        return "4px";
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
            <IconComponent
              iconName={selectedOption.icon.name}
              color={selectedOption.icon.color}
              mr={getIconMargin(scale)}
            />
          ))}
        {!hideLabel && <span>{selectedOption.label}</span>}
        {variant === Variants.PRIMARY ? (
          <StyledArrowPrimary className="arrow arrow_primary" isOpen={isOpen} />
        ) : (
          <StyledArrow className="arrow" isOpen={isOpen} />
        )}
      </DropdownTop>
      <DropdownContent
        ref={dropdownMenuRef}
        height={isOpen ? dropdownMenuRef?.current?.scrollHeight : 0}
        contentPosition={position}
        scale={scale}
        dropDownWidth={dropDownWidth}
      >
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
                  alt="icon"
                />
              ) : (
                <IconComponent iconName={option.icon.name} color={option.icon.color} />
              ))}
            <span>{option.label}</span>
          </DropdownItem>
        ))}
      </DropdownContent>
    </Container>
  );
};

export default DropdownButton;
