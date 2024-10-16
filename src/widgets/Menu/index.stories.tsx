import noop from "lodash/noop";
import React, { FC, useState } from "react";
import { BrowserRouter, Link, MemoryRouter } from "react-router-dom";
import styled, { css } from "styled-components";

// components
import { Box, Flex } from "../../components/Box";
import { Button, IconButton, ExpandableButton, ButtonScales, ButtonVariants } from "../../components/Button";
import { DownloadIcon, OptionsSolidIcon } from "../../components/Svg";
import { Text } from "../../components/Text";
import { BodyText, HeadText, Scales as TextScales, HeadTextTags } from "../../components/Typography";
import { Modal, ModalProps, useModal } from "../Modal";
import { Dropdown } from "../../components/Dropdown";
import Menu from "./Menu";

// config
import {
  aboutLinks,
  BSWPriceLabel,
  BSWPriceValue,
  footerStatistic,
  links,
  productLinks,
  serviceLinks,
  socialLinks,
} from "./config";

// types
import { NavProps } from "./types";

export default {
  title: "Widgets/Menu",
  component: Menu,
  argTypes: {
    activeItem: {
      options: ["Trade", "Earn", "Win"],
      control: { type: "select" },
    },
  },
};

const GlobalMenuModal: FC<ModalProps> = ({ title, onDismiss, ...props }) => (
  <Modal title={title} onDismiss={onDismiss} {...props}>
    <HeadText scale={TextScales.SIZE20} bold>
      {title}
    </HeadText>
    <Button>This button Does nothing</Button>
  </Modal>
);

const GlobalMenuComponent: FC = () => {
  const [onPresent1] = useModal(<GlobalMenuModal title="Display Settings Modal" />);
  const [onPresent2] = useModal(<GlobalMenuModal title="Global Settings Modal" />);

  return (
    <Flex>
      <IconButton onClick={onPresent1} variant={ButtonVariants.TEXT} scale={ButtonScales.SM} mr="4px">
        <DownloadIcon height={22} width={22} color="textSubtle" />
      </IconButton>
      <IconButton onClick={onPresent2} variant={ButtonVariants.TEXT} scale={ButtonScales.SM} mr="8px">
        <OptionsSolidIcon height={22} width={22} color="textSubtle" />
      </IconButton>
    </Flex>
  );
};

const UserMenuTest = ({ isMobileMenuOpen = false }) => (
  <BodyText color="white">{isMobileMenuOpen.toString()} test</BodyText>
);

const defaultProps = {
  linkComponent: ({ href, ...props }) => {
    return <Link to={href} {...props} />;
  },
  bswPriceUsd: 0.023158668932877668,
  links,
  subLinks: [
    {
      label: "Home",
      href: "/",
    },
  ],
  activeItem: "/swap",
  activeSubItem: "https://exchange.biswap.org",
  buyCakeLabel: "Buy BSW",
  withEvent: true,
  eventCallback: noop,
  rightSide: UserMenuTest,
};

const Extended = styled(Flex)<{ expanded: boolean }>`
  max-height: 0;
  height: 0;
  transform: scaleY(0);
  visibility: hidden;
  transition: transform 0.3s ease-out;
  transform-origin: top;

  ${({ expanded }) =>
    expanded &&
    css`
      max-height: 100px;
      height: 100px;
      transform: scaleY(1);
      visibility: visible;
      transition: transform 0.3s ease-in;
    `};
`;

const ContentWrap = styled(Box)`
  transition: padding-top 0.25s ease-in;
`;

const ClickableWrapper = styled(Flex)`
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  height: 40px;
`;

const Banner: FC<{
  setHeight?: (i: boolean) => void;
  setBannerHeight?: (i: number) => void;
}> = ({ setHeight, setBannerHeight }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const onClick = () => {
    setHeight && setHeight(expanded);
    setBannerHeight && setBannerHeight(expanded ? 0 : 116);
    setExpanded(!expanded);
  };

  return (
    <Flex flexDirection="column" px="16px" background="#071C3C">
      <ClickableWrapper onClick={onClick}>
        <BodyText>Title</BodyText>
        <ExpandableButton expanded={expanded}>Details</ExpandableButton>
      </ClickableWrapper>
      <Extended expanded={expanded} mt="16px" background="#07162D">
        <Button width="100%" mx="4px">
          Step1
        </Button>
        <Button width="100%" mx="4px">
          Step2
        </Button>
        <Button width="100%" mx="4px">
          Step3
        </Button>
      </Extended>
    </Flex>
  );
};

const ConnectedTemplate: FC<NavProps> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bannerHeight, setBannerHeight] = useState<number>(0);

  const renderContent = Array.from({ length: 30 }, (v, i) => i).map((el) => (
    <Text as="p" mt="32px" key={el}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    </Text>
  ));

  return (
    <BrowserRouter>
      <Box background="#071C3C">
        <Menu
          {...args}
          BSWPriceLabel={BSWPriceLabel}
          BSWPriceValue={BSWPriceValue}
          footerStatistic={footerStatistic}
          registerToken={noop}
          aboutLinks={aboutLinks}
          productLinks={productLinks}
          socialLinks={socialLinks}
          serviceLinks={serviceLinks}
          buyBswLabel={"Buy bsdt"}
          mobileLangSelector={Dropdown}
          banner={(setHeight?: (s: boolean) => void) => (
            <Banner setHeight={setHeight} setBannerHeight={setBannerHeight} />
          )}
        >
          <ContentWrap pt={`${bannerHeight + 116}px`} pb="32px" px="24px" background="#071C3C">
            <Text bold fontSize="24px" as="h1" mb="8px" color="white">
              Page body
            </Text>
            <Button scale={ButtonScales.SM} onClick={() => setIsOpen(!isOpen)}>
              Show mobile drawer
            </Button>
            {renderContent}
          </ContentWrap>
        </Menu>
      </Box>
    </BrowserRouter>
  );
};
export const Connected = ConnectedTemplate.bind({});
// @ts-ignore
Connected.args = defaultProps;

export const ConnectedWithBanner = ConnectedTemplate.bind({});
// @ts-ignore
ConnectedWithBanner.args = {
  ...defaultProps,
  banner: (setHeight: () => void) => <Banner setHeight={setHeight} />,
};

export const WithSubmenuSelected: FC<NavProps> = (args) => {
  return (
    <MemoryRouter initialEntries={["/teams"]}>
      <Menu
        {...args}
        BSWPriceLabel={BSWPriceLabel}
        BSWPriceValue={BSWPriceValue}
        footerStatistic={footerStatistic}
        registerToken={noop}
        aboutLinks={aboutLinks}
        productLinks={productLinks}
        socialLinks={socialLinks}
        serviceLinks={serviceLinks}
        links={links}
        mobileLangSelector={Dropdown}
        subLinks={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Home",
            href: "/",
          },
        ]}
        buyBswLabel={"Buy bsdt"}
      >
        <div style={{ paddingTop: "72px" }}>
          <HeadText as={HeadTextTags.H1} mb="8px" bold>
            Submenu leaderboard selected
          </HeadText>
        </div>
        <div>
          <h1>Page body</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
        <div>
          <h1>Page body</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
        <div>
          <h1>Page body</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
        <div>
          <h1>Page body</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
      </Menu>
    </MemoryRouter>
  );
};
