import React, { FC } from "react";
import styled from "styled-components";

// types
import {
  BSWPriceProps,
  FooterAboutLinks,
  FooterMoreLinks,
  FooterInfoPagesLinks,
  FooterProductLinks,
  FooterServiceLinks,
  FooterSocialLinks,
} from "../../types";

// components
import FooterInfo from "./FoolerInfo";
import About from "./About";
import More from "./More";
import Info from "./Info";
import Product from "./Product";
import Service from "./Service";
import Community from "./Community";
import Audit from "./Audit";
import { Flex, Grid } from "../../../../components/Box";

interface Props
  extends BSWPriceProps,
    FooterAboutLinks,
    FooterMoreLinks,
    FooterInfoPagesLinks,
    FooterProductLinks,
    FooterSocialLinks,
    FooterServiceLinks {
  registerToken: () => void;
  buyBswHandler: () => void;
  marketplaceLink?: string;
  baseAwsUrl: string;
  buyBswLabel: string;
}

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.dark900};
  padding: 56px 16px 24px;
  transition: padding-left 0.2s;
  z-index: 10;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 56px 24px 24px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 56px 64px;
  }
`;

const FooterTop = styled(Grid)`
  grid-template-columns: 310px 1fr 150px;
  grid-column-gap: 24px;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 48px;
`;

const SocialWrap = styled.div`
  width: 260px;
  margin: 0 auto;
`;

const FooterBottom = styled(Flex)`
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
`;

const Footer: FC<Props> = ({
  BSWPriceLabel,
  BSWPriceValue,
  aboutLinks,
  moreLinks,
  infoLinks,
  productLinks,
  serviceLinks,
  buyBswHandler,
  socialLinks,
  marketplaceLink,
  baseAwsUrl,
  buyBswLabel,
}) => {
  return (
    <Wrapper>
      <FooterTop>
        <FooterInfo
          BSWPriceLabel={BSWPriceLabel}
          BSWPriceValue={BSWPriceValue}
          buyBswHandler={buyBswHandler}
          buyBswLabel={buyBswLabel}
        />
        <SocialWrap>
          <Community isFooter socialLinks={socialLinks} iconSize="24px" baseAwsUrl={baseAwsUrl} />
        </SocialWrap>
        <Audit marketplaceLink={marketplaceLink} baseAwsUrl={baseAwsUrl} />
      </FooterTop>
      <FooterBottom>
        <Product footerLinks={productLinks} />
        <Service footerLinks={serviceLinks} />
        <More footerLinks={moreLinks} />
        <Info footerLinks={infoLinks} />
        <About footerLinks={aboutLinks} />
      </FooterBottom>
    </Wrapper>
  );
};

export default Footer;
