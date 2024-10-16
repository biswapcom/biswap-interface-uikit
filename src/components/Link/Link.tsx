import React, { FC } from "react";
import styled from "styled-components";
import { variant } from "styled-system";

// utils
import getExternalLinkProps from "../../util/getExternalLinkProps";

// theme
import { styleVariants, scaleVariants } from "./theme";

// components
import Text from "../Text/Text";

// types
import { LinkProps } from "./types";

const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  font-weight: 400;
  opacity: ${({ disabled }) => (disabled ? "0.32" : "1")};
  transition: color 0.4s ease-in-out;

  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  
  svg {
    color: inherit;
    transition: fill 0.4s ease-in-out;
  }
`;

const Link: FC<LinkProps> = ({ external, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};

  return <StyledLink as="a" bold {...internalProps} {...props} />;
};

export default Link;
