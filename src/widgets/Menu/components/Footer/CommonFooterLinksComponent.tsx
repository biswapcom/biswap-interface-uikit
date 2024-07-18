import React, { FC, useContext, useState } from "react";
import styled from "styled-components";

// types
import { FooterLinks } from "../../types";
import { DropdownMenuItemType } from "../../../../components/DropdownMenu/types";

// context
import { MenuContext } from "../../context";

// components
import { Box, Flex } from "../../../../components/Box";

const TopAction = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

const ActionIcon = styled(Box)<{ isOpen: boolean }>`
  position: relative;
  width: 14px;
  height: 14px;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }

  &:before,
  &:after {
    display: block;
    content: "";
    width: 14px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    left: 50%;
    top: 50%;
    transition: transform 0.3s ease;
  }

  &:before {
    transform: ${({ isOpen }) =>
      isOpen ? "translate(-50%, -50%) rotate(180deg)" : "translate(-50%, -50%) rotate(90deg)"};
  }

  &:after {
    transform: ${({ isOpen }) =>
      isOpen ? "translate(-50%, -50%) rotate(180deg)" : "translate(-50%, -50%) rotate(0deg)"};
  }
`;

const NavList = styled(Box)<{ isOpen: boolean; innerHeight: number }>`
  height: ${({ isOpen, innerHeight }) => (isOpen ? `${innerHeight * 26 + 16}px` : "0")};
  padding-bottom: ${({ isOpen }) => (isOpen ? "16px" : "0")};
  transition:
    transform 0.3s ease,
    opacity 0.3s ease,
    height 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: auto;
    padding-bottom: 0;
    opacity: 1;
    transform: scaleY(1);
  }
`;

const NavItem = styled(Box)`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 12px;
  line-height: 18px;
`;

const CustomLink = styled(Box)`
  color: ${({ theme }) => theme.colors.pastelBlue};
  font-weight: 600;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.65;
  }
`;

const CommonFooterLinksComponent: FC<FooterLinks> = ({ footerLinks }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { linkComponent } = useContext(MenuContext);
  const { title, links } = footerLinks;

  const arrLength = links?.length ?? 0;

  return (
    <>
      <TopAction onClick={() => setIsOpen(!isOpen)}>
        <Title>{title}</Title>
        <ActionIcon isOpen={isOpen} />
      </TopAction>
      <NavList isOpen={isOpen} innerHeight={arrLength}>
        {links?.map(({ href, target = null, label, type = DropdownMenuItemType.INTERNAL_LINK }, index) => (
          <NavItem key={index.toString()}>
            {type === DropdownMenuItemType.INTERNAL_LINK && (
              <CustomLink as={linkComponent} to={href}>
                {label}
              </CustomLink>
            )}
            {type === DropdownMenuItemType.EXTERNAL_LINK && (
              <CustomLink as="a" href={href} target={target ? target : "_self"}>
                {label}
              </CustomLink>
            )}
          </NavItem>
        ))}
      </NavList>
    </>
  );
};

export default CommonFooterLinksComponent;
