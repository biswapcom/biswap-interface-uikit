import { FC } from "react";
import { BSWPriceProps, FooterStatisticProps, FooterAboutLinks, FooterProductLinks, FooterServiceLinks, FooterSocialLinks } from "../../types";
interface Props extends BSWPriceProps, FooterStatisticProps, FooterAboutLinks, FooterProductLinks, FooterSocialLinks, FooterServiceLinks {
    registerToken: () => void;
    buyBswHandler: () => void;
    marketplaceLink?: string;
    baseAwsUrl: string;
    buyBswLabel: string;
}
declare const Footer: FC<Props>;
export default Footer;
