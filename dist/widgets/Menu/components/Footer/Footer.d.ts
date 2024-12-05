import { FC } from "react";
import { BSWPriceProps, FooterAboutLinks, FooterInfoPagesLinks, FooterProductLinks, FooterServiceLinks, FooterSocialLinks } from "../../types";
interface Props extends BSWPriceProps, FooterAboutLinks, FooterInfoPagesLinks, FooterProductLinks, FooterSocialLinks, FooterServiceLinks {
    registerToken: () => void;
    buyBswHandler: () => void;
    marketplaceLink?: string;
    baseAwsUrl: string;
    buyBswLabel: string;
}
declare const Footer: FC<Props>;
export default Footer;
