import React, { FC, ReactNode, useRef } from "react";
import styled from "styled-components";
import { variant as systemVariant } from "styled-system";

// components
import { HeadText, Scales } from "../../Typography";
import { Box, Flex } from "../../Box";
import { ChevronDownIcon } from "../../Svg";

// utils
import { getRgba } from "../../../util";

// types
import { Variants } from "../types";

// theme
import { openBackground, questionVariants, wrapperVariants } from "../theme";

interface IProps {
  name: string;
  isOpened: boolean;
  handleToggle: (value: string) => void;
  children: ReactNode;
  variant: Variants;
}

const Wrapper = styled(Box)<{ isOpen: boolean; variant: Variants }>`
  width: 100%;
  margin-top: 8px;

  ${systemVariant({
    variants: wrapperVariants,
  })}

  ${({ isOpen }) =>
    isOpen &&
    systemVariant({
      variants: openBackground,
    })};

  border: 1px solid ${({ theme, isOpen }) => (isOpen ? getRgba(theme.colors.primary, theme, 0.16) : "transparent")};
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => getRgba(theme.colors.primary, theme, 0.16)};
    ${systemVariant({
      variants: openBackground,
    })}
  }
`;

const Question = styled(Flex)<{ isOpen: boolean }>`
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: space-between;
  }
`;

const StyledText = styled(HeadText)<{ variant: Variants }>`
  ${systemVariant({
    variants: questionVariants,
  })}
`;

const StyledChevronIcon = styled(({ ...props }) => <ChevronDownIcon {...props} />)<{ isOpen?: boolean }>`
  transform: scale(${({ isOpen }) => (isOpen ? "1, -1" : "1, 1")});
  transition: transform 0.3s ease;
`;

const Answer = styled(Box)`
  overflow: hidden;
  transition: height ease 0.3s;
`;

const FaqAccordion: FC<IProps> = ({ name = "", isOpened, handleToggle, variant = Variants.DARK, children }) => {
  const contentEl = useRef<HTMLDivElement>(null);

  return (
    <Wrapper isOpen={isOpened} onClick={() => handleToggle(name)} variant={variant}>
      <Question isOpen={isOpened}>
        <StyledText scale={Scales.SIZE14} variant={variant}>
          {name}
        </StyledText>
        <StyledChevronIcon isOpen={isOpened} color="primary" width="24px" />
      </Question>
      <Answer ref={contentEl} height={isOpened ? contentEl?.current?.scrollHeight : "0"}>
        {children}
      </Answer>
    </Wrapper>
  );
};

export default FaqAccordion;
