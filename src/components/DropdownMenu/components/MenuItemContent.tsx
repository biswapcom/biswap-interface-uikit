import React, { FC } from "react";
import styled, { DefaultTheme } from "styled-components";

// components
import IconComponent from "../../Svg/IconComponent";
import { Flex } from "../../Box";
import { Text } from "../../Text";
import { Badge, BadgeTypes } from "../../Badge";

// types
import type { MenuItemContentProps } from "../types";

// hooks
import { useMatchBreakpoints } from "../../../contexts";

const getBG = ({ theme, leftIcon }: { theme: DefaultTheme; leftIcon?: string }) => {
  switch (leftIcon) {
    case "Market":
      return "linear-gradient(136.03deg, #1263F1 -7.36%, #F63D5E 131.43%)";
    case "GameFi":
      return "radial-gradient(170.13% 152.5% at 50% -32.5%, #FF1C5E 4.9%, #00000D 58.29%, #1EBB95 100%)";
    default:
      return theme.colors.primary;
  }
};

const IconComponentWrap = styled(Flex)<{ disabled?: boolean }>`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  align-self: flex-start;
  background: ${getBG};
  opacity: ${({ disabled }) => (disabled ? 0.32 : 1)};
`;

const MenuItemContent: FC<MenuItemContentProps> = ({
  leftIcon,
  label,
  description,
  rightIcon,
  fill = "primary",
  badgeTitle,
  badgeType,
  disabled,
}) => {
  const { isMobile } = useMatchBreakpoints();

  return (
    <>
      {leftIcon && (
        <IconComponentWrap disabled={disabled}>
          <IconComponent width={24} iconName={leftIcon} color="white" />
        </IconComponentWrap>
      )}
      <Flex alignSelf={isMobile ? "stretch" : ""} flexDirection="column" flex={1} paddingLeft={leftIcon && "16px"}>
        <Flex alignItems="center">
          {label}
          {badgeTitle && (
            <Badge ml="4px" badgeType={badgeType ?? BadgeTypes.SUCCESS}>
              {badgeTitle}
            </Badge>
          )}
        </Flex>

        {description && (
          <Text fontSize="12px" color="gray900" lineHeight="16px">
            {description}
          </Text>
        )}
      </Flex>
      {rightIcon && !disabled && <IconComponent className="arrow-icon" iconName={rightIcon} color={fill} />}
    </>
  );
};

export default MenuItemContent;
