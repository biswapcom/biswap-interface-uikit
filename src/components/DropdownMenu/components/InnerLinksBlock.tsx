import React, { FC, Fragment } from "react";
import styled from "styled-components";

// styles
import {
  DropdownMenuDivider,
  DropdownMenuInnerLinkItem,
  DropdownMenuInnerOuterLinkItem,
  InnerLinksBlockContainer,
} from "../styles";

// components
import IconComponent from "../../Svg/IconComponent";
import { Text } from "../../Text";
import { Grid } from "../../Box";
import { Badge, BadgeTypes } from "../../Badge";

// types
import { type InnerLinksBlockProps, DropdownMenuItemType } from "../types";

// hooks
import { useMatchBreakpoints } from "../../../contexts";

const LabelText = styled(Text)`
  max-width: 80px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const InnerLinksBlock: FC<InnerLinksBlockProps> = ({ links, leftIcon, setIsOpen, linkComponent, lastItem }) => {
  const { isMobile, isTablet } = useMatchBreakpoints();

  const renderLinks = () =>
    links.map(
      (
        {
          label = "",
          href = "/",
          icon = "ChevronRight",
          linkType = DropdownMenuItemType.INTERNAL_LINK,
          mobileTarget,
          target,
          fill = "primary",
          badgeTitle,
          badgeType,
        },
        index: number
      ) => {
        const getLinkContent = () => (
          <>
            {icon && <IconComponent className="inner-chevron" width={16} iconName={icon} color={fill} />}
            <LabelText bold fontSize={"12px"} color={fill}>
              {label}
            </LabelText>
            {badgeTitle && (
              <Badge ml="4px" badgeType={badgeType ?? BadgeTypes.SUCCESS}>
                {badgeTitle}
              </Badge>
            )}
          </>
        );
        return (
          <Fragment key={`${index}#${label}`}>
            {linkType === DropdownMenuItemType.INTERNAL_LINK && (
              <DropdownMenuInnerLinkItem
                key={index + label}
                as={linkComponent}
                to={href}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {getLinkContent()}
              </DropdownMenuInnerLinkItem>
            )}
            {linkType === DropdownMenuItemType.EXTERNAL_LINK && (
              <DropdownMenuInnerOuterLinkItem
                key={index + label}
                href={href}
                target={isMobile ? mobileTarget || "_self" : target || "_blank"}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {getLinkContent()}
              </DropdownMenuInnerOuterLinkItem>
            )}
          </Fragment>
        );
      }
    );

  return (
    <InnerLinksBlockContainer padded={!!leftIcon && !isTablet}>
      <Grid gridTemplateColumns={"1fr 1fr"} gridGap={16} paddingBottom={!lastItem ? 16 : 0}>
        {renderLinks()}
      </Grid>
      {!lastItem && <DropdownMenuDivider />}
    </InnerLinksBlockContainer>
  );
};

export default InnerLinksBlock;
