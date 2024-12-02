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
  padding: 40px 0 12px;
  transition: padding-left 0.2s;
  z-index: 10;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 56px 0 8px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 56px 0 0;
  }
`;

const FooterTop = styled(Grid)`
  grid-template-columns: 310px 1fr 150px;
  grid-column-gap: 24px;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px 48px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0 16px 48px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 24px 48px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding: 0 64px 48px;
  }
`;

const SocialWrap = styled.div`
  width: 260px;
  margin: 0 auto;
`;

const FooterBottom = styled(Flex)`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
  flex-wrap: wrap;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: center;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 24px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding: 0 64px;
  }
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
