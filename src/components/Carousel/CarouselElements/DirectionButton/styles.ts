import styled, { css } from "styled-components";
import { variant } from "styled-system";

// types
import { type IDirectButtonStyled } from "../../types";
import { CarouselButtonsTypes } from "../../../../hooks";

export const backgroundVariants = {
  [CarouselButtonsTypes.GRAY_OPACITY]: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  [CarouselButtonsTypes.WHITE]: {
    backgroundColor: "white",
  },
  [CarouselButtonsTypes.PRIMARY]: {
    backgroundColor: "primary",
  },
};

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  height: 32px;
  padding: 0 6px;
  border: 0;
  border-radius: 8px;
  box-shadow: none;
  cursor: pointer;
`;

export const WrapperDirectionButton = styled(ArrowButton)<IDirectButtonStyled>`
  left: ${({ navPadding }) => `${navPadding}px`};
  transform: translate(0, -50%);

  ${variant({
    variants: backgroundVariants,
  })}

  ${({ isNextButton, navPadding }) =>
    isNextButton &&
    css`
      right: ${`${navPadding}px`};
      left: unset;
    `}
`;
