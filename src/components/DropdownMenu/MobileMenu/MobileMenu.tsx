import React, { FC, Fragment, useContext, useEffect, useState } from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";

//
import { MenuContext } from "../../../widgets/Menu/context";

// hooks
import { useMatchBreakpoints } from "../../../contexts";

// components
import { Box, Flex, Grid } from "../../Box";

// types
import { type MobileMenuProps, DropdownMenuItemType } from "../types";

// components
import MenuItemContent from "../components/MenuItemContent";
import { DropdownMenuItemContainer } from "../components";
import IconComponent from "../../Svg/IconComponent";
import Accordion from "../../Accordion/Accordion";
import Community from "../../../widgets/Menu/components/Footer/Community";
import Marker from "../../MenuItem/Marker";
import { HeadText, Scales } from "../../Typography";

// styles
import { BorderMobileMenuItem, DropdownMenuDivider } from "../styles";

const MobileCommunityWrapper = styled(Flex)`
  flex: 1;
  flex-direction: column;
  margin-top: 32px;
`;

const StyledMobileMenu = styled(Flex)<{
  $isOpen: boolean;
}>`
  flex-direction: column;
  justify-content: space-between;
  align-content: stretch;
  width: 100vw;
  height: calc(100vh - 72px);
  background-color: ${({ theme }) => theme.colors.white};
  overflow: auto;
  visibility: visible;
  opacity: 1;
  transition:
    opacity 250ms linear,
    visibility 350ms linear;
  transform: translate3d(0, 72px, 0) !important;

  ${({ $isOpen }) =>
    !$isOpen &&
    `
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
  `}

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: none;
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-slider-thumb {
    display: none;
  }
`;

const MobileMenu: FC<MobileMenuProps> = ({
  items,
  mobileMenuCallback,
  children,
  activeItem,
  baseAwsUrl,
  mobileLangSelector,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null);
  const [currentOpen, setCurrentOpen] = useState<string | undefined>();

  const { linkComponent } = useContext(MenuContext);
  const { isMobile, isTablet } = useMatchBreakpoints();
  const hasItems = items.length > 0;
  const { styles, attributes, update } = usePopper(targetRef, tooltipRef, {
    strategy: "fixed",
    placement: "bottom",
  });

  useEffect(() => {
    const hideDropdownMenu = (evt: MouseEvent | TouchEvent) => {
      const target = evt.target as Node;

      target && !tooltipRef?.contains(target) && setIsOpen(false);
    };

    targetRef?.addEventListener("mouseleave", hideDropdownMenu, {
      passive: true,
    });

    return () => {
      targetRef?.removeEventListener("mouseleave", hideDropdownMenu);
    };
  }, [targetRef, tooltipRef, setIsOpen, update]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    mobileMenuCallback?.(isOpen);
  }, [isOpen, mobileMenuCallback]);

  const onPointerDownHandler = async () => {
    setIsOpen((s) => !s);
    update && (await update());
  };

  const LanguageSelector = mobileLangSelector ?? Fragment;

  return (
    <Box ref={setTargetRef} {...props}>
      <Box onPointerDown={onPointerDownHandler}>{children}</Box>
      {hasItems && (
        <StyledMobileMenu style={styles.popper} ref={setTooltipRef} {...attributes.popper} $isOpen={isOpen}>
          <Box>
            <LanguageSelector />
            {items
              .filter((item) => item.label && !item.type)
              .map(({ label, items: innerItems = [], showItemsOnMobile, hidden, href }, index) => {
                if (hidden) return null;

                const isMarker = items[index].showNavBadge;
                const isMarkerColor = items[index].colorNavBadge;
                const isOpenAccordion = label === "Biswap Products";
                const isHighlighted = items[index].highlightTitle;
                const visualize = !showItemsOnMobile || (showItemsOnMobile && isMobile && !hidden);

                return (
                  <BorderMobileMenuItem key={`${label}#${index}`} isHighlighted={isHighlighted}>
                    <Accordion
                      index={index}
                      label={label}
                      href={href}
                      linkComponent={linkComponent}
                      setIsOpenMenu={setIsOpen}
                      currentOpen={currentOpen}
                      setCurrentOpen={setCurrentOpen}
                      clickable={!isTablet && innerItems.length > 0}
                      isOpenItem={isOpenAccordion}
                      heading={(opened) => {
                        return (
                          ((!showItemsOnMobile && !hidden) || (href && !isTablet)) && (
                            <>
                              <Box m="16px 0" position="relative">
                                {/*@ts-ignore*/}
                                {isMarker && <Marker color={isMarkerColor} />}
                                <HeadText
                                  scale={isTablet ? Scales.SIZE20 : Scales.SIZE16}
                                  color={
                                    isMobile && opened && !href
                                      ? "primary"
                                      : isHighlighted && isTablet
                                        ? "warningPress"
                                        : "backgroundDark"
                                  }
                                >
                                  {label}
                                </HeadText>
                              </Box>

                              {!isTablet && (
                                <IconComponent
                                  width={!href ? "24px" : "20px"}
                                  iconName={href ? "ArrowRight" : opened ? "ChevronUp" : "ChevronDown"}
                                  color={opened ? "primary" : "dark800"}
                                />
                              )}
                            </>
                          )
                        );
                      }}
                    >
                      {innerItems.length > 0 && (
                        <Grid
                          gridTemplateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
                          gridColumnGap={16}
                          mt={isOpenAccordion ? 16 : 0}
                        >
                          {innerItems
                            .filter((element) => element.type !== DropdownMenuItemType.BANNER)
                            .map(
                              (
                                {
                                  type = DropdownMenuItemType.INTERNAL_LINK,
                                  rightIconFill,
                                  description,
                                  status,
                                  leftIcon = "",
                                  rightIcon = "",
                                  links = [],
                                  badgeTitle,
                                  badgeType,
                                  bannerRenderer,
                                  ...itemProps
                                },
                                itemIndex,
                                arr
                              ) => {
                                const getMenuItemContent = (icon: string = rightIcon) => (
                                  <MenuItemContent
                                    fill={rightIconFill}
                                    leftIcon={leftIcon}
                                    rightIcon={icon}
                                    description={description}
                                    status={status}
                                    badgeTitle={badgeTitle}
                                    badgeType={badgeType}
                                    {...itemProps}
                                  />
                                );

                                const isActive = (itemProps.href ?? "/") === activeItem;

                                const lastItem = itemIndex === arr?.length - 1;
                                return (
                                  visualize && (
                                    <DropdownMenuItemContainer
                                      key={itemIndex}
                                      isActive={isActive}
                                      leftIcon={leftIcon}
                                      getMenuItemContent={getMenuItemContent}
                                      links={links}
                                      setIsOpen={setIsOpen}
                                      linkComponent={linkComponent}
                                      bannerRenderer={bannerRenderer}
                                      type={type}
                                      badgeTitle={badgeTitle}
                                      badgeType={badgeType}
                                      isOpenItem={isOpenAccordion}
                                      lastItem={lastItem}
                                      {...itemProps}
                                    />
                                  )
                                );
                              }
                            )}
                        </Grid>
                      )}
                    </Accordion>

                    {isTablet && !showItemsOnMobile && <DropdownMenuDivider />}
                  </BorderMobileMenuItem>
                );
              })}
            {!isTablet && isMobile && (
              <Box m="0 16px">
                <DropdownMenuDivider color="btnTertiary" />
              </Box>
            )}
          </Box>
          {isMobile && (
            <MobileCommunityWrapper>
              <Community menuVariant iconSize="24px" baseAwsUrl={baseAwsUrl} />
            </MobileCommunityWrapper>
          )}
        </StyledMobileMenu>
      )}
    </Box>
  );
};

export default MobileMenu;
