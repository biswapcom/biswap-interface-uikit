import React, { Children, FC, isValidElement, ReactNode } from "react";
import styled from "styled-components";
import { space } from "styled-system";

// components
import ChevronRightIcon from "../Svg/Icons/Arrows/ChevronRight";
import { Flex } from "../Box";

// types
import { BreadcrumbsProps } from "./types";

const Separator = styled(Flex)`
  align-items: center;
  justify-content: center;
  padding-left: 4px;
  padding-right: 4px;
  color: ${({ theme }) => theme.colors.gray900};

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 8px;
    padding-right: 8px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const StyledBreadcrumbs = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;

  a {
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  ${space}
`;

const insertSeparators = (items: ReactNode[], separator: BreadcrumbsProps["separator"]) =>
  items.reduce((accum: ReactNode[], item, index) => {
    if (index === 0) {
      return [...accum, item];
    }

    return [
      ...accum,
      <Separator aria-hidden key={`seperator-${index}`}>
        {separator}
      </Separator>,
      item,
    ];
  }, []);

const DefaultSeparator = <ChevronRightIcon color="dark500" width="20px" />;

const Breadcrumbs: FC<BreadcrumbsProps> = ({ separator = DefaultSeparator, children }) => {
  const validItems = Children.toArray(children).filter((child) => isValidElement(child));
  const items = insertSeparators(validItems, separator);

  return (
    <StyledBreadcrumbs>
      {items.map((item, index) => (
        <li key={`child-${index}`}>{item}</li>
      ))}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
