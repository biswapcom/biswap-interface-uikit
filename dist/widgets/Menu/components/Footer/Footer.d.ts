import { FC } from "react";
import {
  BSWPriceProps,
  FooterAboutLinks,
  FooterInfoPagesLinks,
  FooterProductLinks,
  FooterSocialLinks,
} from "../../types";
interface Props extends BSWPriceProps, FooterAboutLinks, FooterInfoPagesLinks, FooterProductLinks, FooterSocialLinks {
  registerToken: () => void;
  buyBswHandler: () => void;
  marketplaceLink?: string;
  baseAwsUrl: string;
  buyBswLabel: string;
}
declare const Footer: FC<Props>;
export default Footer;
