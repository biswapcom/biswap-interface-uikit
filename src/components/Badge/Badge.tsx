import React, { FC } from "react";
import styled from "styled-components";
import { space, variant } from "styled-system";

// types
import { BadgeProps } from "./types";

// theme
import { BadgeTypesContainer } from "./theme";

// components
import { Box } from "../Box";

const Wrapper = styled(Box)<BadgeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  padding: ${({ isIcon }) =>
    isIcon === "left" ? "4px 8px 4px 4px" : isIcon === "right" ? "4px 4px 4px 8px" : "4px 8px"};
  border-radius: 16px;
  font-size: ${({ fontSize }) => fontSize || "10px"};
  font-weight: 600;

  ${space}

  ${variant({
    prop: "badgeType",
    variants: BadgeTypesContainer,
  })}
`;

const Badge: FC<BadgeProps> = ({ children, badgeType, fontSize, fontWeight, isIcon, ...props }) => {
  return (
    <Wrapper badgeType={badgeType} isIcon={isIcon} fontSize={fontSize} fontWeight={fontWeight} {...props}>
      {children}
    </Wrapper>
  );
};

export default Badge;
