import React, { FC } from "react";
import styled from "styled-components";
import { space, variant } from "styled-system";

// types
import { BadgeProps, BadgeScales } from "./types";

// theme
import { BadgeScalesContainer, BadgeTypesContainer } from "./theme";

// components
import { Box } from "../Box";

const Wrapper = styled(Box)<BadgeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  //height: 20px;
  //border-radius: 16px;
  font-weight: 600;

  ${space}

  ${variant({
    prop: "badgeType",
    variants: BadgeTypesContainer,
  })}
  ${variant({
    prop: "scale",
    variants: BadgeScalesContainer,
  })}
`;

const Badge: FC<BadgeProps> = ({ children, badgeType, scale, fontWeight, isIcon, ...props }) => {
  const selectedScale = scale ?? BadgeScales.SM;
  return (
    <Wrapper badgeType={badgeType} scale={selectedScale} isIcon={isIcon} fontWeight={fontWeight} {...props}>
      {children}
    </Wrapper>
  );
};

export default Badge;
