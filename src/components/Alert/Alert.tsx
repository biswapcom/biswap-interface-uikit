import React, { FC } from "react";
import styled from "styled-components";

// components
import { type SvgProps, ConflictIcon, CloseCircleIcon, WarningCircleRIcon, CheckRoundRIcon, InfoIcon } from "../Svg";
import { Text } from "../Text";
import { Flex, Box } from "../Box";

// widgets
import ProgressCircle from "../../widgets/Toast/ProgressCircle";

// types
import { AlertProps, Variants } from "./types";

const getThemeColor = ({ variant = Variants.INFO }: { variant: Variants }): string => {
  switch (variant) {
    case Variants.DANGER:
      return "rgba(249, 59, 93, 0.16)";
    case Variants.WARNING:
      return "rgba(255, 219, 28, 0.16)";
    case Variants.SUCCESS:
      return "rgba(29, 200, 114, 0.16)";
    case Variants.EXTENSIONS_CONFLICT:
      return "rgba(255, 255, 255, 1)";
    case Variants.INFO:
    default:
      return "rgba(18, 99, 241, 0.16)";
  }
};

const getIcon = (variant: Variants = Variants.INFO): FC<SvgProps> => {
  switch (variant) {
    case Variants.DANGER:
      return CloseCircleIcon;
    case Variants.WARNING:
      return WarningCircleRIcon;
    case Variants.SUCCESS:
      return CheckRoundRIcon;
    case Variants.EXTENSIONS_CONFLICT:
      return ConflictIcon;
    case Variants.INFO:
    default:
      return InfoIcon;
  }
};

const getIconColor = (variant: Variants = Variants.INFO): string => {
  switch (variant) {
    case Variants.DANGER:
      return "secondary";
    case Variants.WARNING:
      return "warning";
    case Variants.SUCCESS:
      return "success";
    case Variants.INFO:
    default:
      return "primary";
  }
};

const IconLabel = styled(Flex)<{ variant: Variants }>`
  justify-content: center;
  align-items: center;
  padding: 12px;
  border: none;
  border-radius: 50px;
  background-color: ${getThemeColor};
`;

const StyledAlert = styled(Flex)`
  padding: 12px 60px 12px 12px;
  border: 1px solid ${({ theme }) => theme.colors.divider1};
  border-radius: 16px;
  background-color: #132f5d;
`;

const StyledBox = styled(Box)`
  position: absolute;
  right: 8px;
`;

const Wrapper = styled(Flex)`
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radii.default};
  background-color: #132f5d;
  overflow: hidden;
`;

const TitleWrapper = styled(Box)`
  background-color: #132f5d;
`;

const Alert: FC<AlertProps> = ({ title, children, variant, onClick, progress }) => {
  const Icon = getIcon(variant);
  const IconColor = getIconColor(variant);

  if (variant === Variants.EXTENSIONS_CONFLICT) {
    return (
      <Wrapper>
        <TitleWrapper py="8px" pl="20px" pr="66px">
          <Text fontSize="16px" color="text1" bold>
            {title}
          </Text>
        </TitleWrapper>
        <Flex p="16px">
          <Box mr="12px">
            <IconLabel variant={variant}>
              <Icon width="48px" color={IconColor} />
            </IconLabel>
          </Box>
          {typeof children === "string" ? (
            <Text as="p" color="text1">
              {children}
            </Text>
          ) : (
            children
          )}
        </Flex>
        <StyledBox>
          <ProgressCircle onClick={onClick} filled={progress} notFilled={progress ? 100 - progress : 0} />
        </StyledBox>
      </Wrapper>
    );
  }

  return (
    <StyledAlert>
      <Box>
        <IconLabel variant={variant}>
          <Icon width="24px" color={IconColor} />
        </IconLabel>
      </Box>
      <Flex>
        <Box ml="10px">
          <Text fontSize="16px" color="text1" bold>
            {title}
          </Text>
          {typeof children === "string" ? (
            <Text as="p" color="text1">
              {children}
            </Text>
          ) : (
            children
          )}
        </Box>
        <StyledBox>
          <ProgressCircle onClick={onClick} filled={progress} notFilled={progress ? 100 - progress : 0} />
        </StyledBox>
      </Flex>
    </StyledAlert>
  );
};

export default Alert;
