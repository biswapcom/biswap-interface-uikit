import React, { FC } from "react";
import styled from "styled-components";
import { space, variant } from "styled-system";

// types
import { BadgeButtonProps } from "./types";

// theme
import { BadgeButtonTypesContainer } from "./theme";

const Wrapper = styled.button<BadgeButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  padding: ${({ isIcon }) =>
    isIcon === "left" ? "4px 8px 4px 4px" : isIcon === "right" ? "4px 4px 4px 8px" : "4px 8px"};
  border-radius: 16px;
  font-size: 10px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    border-color 0.1s ease-in-out;

  ${space}

  ${variant({
    prop: "badgeType",
    variants: BadgeButtonTypesContainer,
  })}
`;

const Badge: FC<BadgeButtonProps> = ({ children, badgeType, fontSize, fontWeight, isIcon, isActive, ...props }) => {
  return (
    <Wrapper
      badgeType={badgeType}
      isIcon={isIcon}
      fontSize={fontSize}
      fontWeight={fontWeight}
      className={isActive ? "active" : ""}
      {...props}
    >
      {children}
    </Wrapper>
  );
};

export default Badge;
