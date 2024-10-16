import styled, { DefaultTheme } from "styled-components";
import { space, layout, variant } from "styled-system";

// theme
import { scaleVariants, styleVariants } from "./theme";

// types
import { BaseButtonProps } from "./types";

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
}

const getDisabledStyles = ({ $isLoading }: TransientButtonProps) => {
  if ($isLoading === true) {
    return `
      &:disabled,
      &.button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.button--disabled {
      opacity: .32;
      cursor: not-allowed;
    }
  `;
};

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? ".5" : "1";
};

const getFlat = ({ flatBottom = false, flatTop = false, flat = false }: BaseButtonProps) => {
  if (flatBottom) {
    return `
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    `;
  }

  if (flatTop) {
    return `
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    `;
  }

  if (flat) {
    return `
      border-radius: 0;
    `;
  }
};

const StyledButton = styled.button<BaseButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  opacity: ${getOpacity};
  outline: 0;
  transition:
    background-color 0.3s ease-in-out,
    opacity 0.3s ease-in-out,
    color 0.3s ease-in-out;
  white-space: nowrap;
  cursor: pointer;

  ${getDisabledStyles}
  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  ${layout}
  ${space}
  ${getFlat}
`;

export default StyledButton;
