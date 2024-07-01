import styled from "styled-components";
import { variant } from "styled-system";

// theme
import { scaleVariants, styleVariants } from "./theme";

// types
import type { InputProps } from "./types";

const Input = styled.input<InputProps>`
  display: block;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  min-width: ${({ minWidth }) => minWidth || "0"};
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  outline: 0;
  color: ${({ theme }) => theme.colors.gray900};
  opacity: ${({ disabled }) => (disabled ? ".56" : "1")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "initial")};
  transition:
    border-color 0.4s ease,
    background-color 0.4s ease,
    color 0.4s ease;

  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}

  ${variant({
    prop: "variant",
    variants: styleVariants,
  })}
`;

export default Input;
