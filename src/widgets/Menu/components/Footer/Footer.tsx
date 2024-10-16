import React, { FC } from "react";
import styled from "styled-components";

// types
import {
  BSWPriceProps,
  FooterStatisticProps,
  FooterAboutLinks,
  FooterProductLinks,
  FooterServiceLinks,
  FooterSocialLinks,
} from "../../types";

// components
import FooterInfo from "./FoolerInfo";
import About from "./About";
import Product from "./Product";
import Service from "./Service";
import Community from "./Community";
import Audit from "./Audit";
import { Grid } from "../../../../components/Box";

interface Props
  extends BSWPriceProps,
    FooterStatisticProps,
    FooterAboutLinks,
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
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.dark700};
  padding: 56px 16px 24px;
  transition: padding-left 0.2s;
  z-index: 10;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 56px 24px 24px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 56px 24px;
  }
`;

const InnerRow = styled(Grid)`
  grid-template-columns: 1fr;
  grid-template-areas:
    "footer-info"
    "about"
    "product"
    "service"
    "community"
    "audit";
  max-width: 1120px;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(3, minmax(110px, 1fr));
    grid-template-areas:
      "footer-info footer-info footer-info"
      "about product service"
      "community . audit";
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: 338px minmax(0, 64px) repeat(2, minmax(110px, 1fr)) 110px;
    grid-template-areas:
      "footer-info . about product service "
      "footer-info . community . audit";
  }

  ${({ theme }) => theme.mediaQueries.xll} {
    grid-template-columns: 424px minmax(0, 64px) repeat(3, minmax(110px, 1fr)) 174px;
    grid-template-areas:
      "footer-info . about product service community"
      "footer-info . about product service audit";
  }
`;

const Footer: FC<Props> = ({
  BSWPriceLabel,
  BSWPriceValue,
  registerToken,
  footerStatistic,
  aboutLinks,
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
      <InnerRow>
        <FooterInfo
          BSWPriceLabel={BSWPriceLabel}
          BSWPriceValue={BSWPriceValue}
          registerToken={registerToken}
          footerStatistic={footerStatistic}
          buyBswHandler={buyBswHandler}
          baseAwsUrl={baseAwsUrl}
          buyBswLabel={buyBswLabel}
        />
        <About footerLinks={aboutLinks} />
        <Product footerLinks={productLinks} />
        <Service footerLinks={serviceLinks} />
        <Community isFooter socialLinks={socialLinks} baseAwsUrl={baseAwsUrl} />
        <Audit marketplaceLink={marketplaceLink} baseAwsUrl={baseAwsUrl} />
      </InnerRow>
    </Wrapper>
  );
};

export default Footer;
