import { ElementType, FunctionComponent, ReactNode } from "react";
import { MenuItemsType } from "../../components/MenuItems/types";
import { SubMenuItemsType } from "../../components/SubMenuItems";
import { DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { Colors } from "../../theme";
export interface LinkStatus {
    text: string;
    color: keyof Colors;
}
export interface NavProps extends BSWPriceProps, FooterAboutLinks, FooterInfoPagesLinks, FooterProductLinks, ConnectMetaProps, FooterSocialLinks {
    buyBswHandler: () => void;
    linkComponent?: ElementType;
    banner?: (b?: (s: boolean) => void) => JSX.Element;
    links: Array<MenuItemsType>;
    subLinks: Array<SubMenuItemsType>;
    activeItem: string;
    activeSubItem: string;
    rightSide: FunctionComponent<{
        isMobileMenuOpen?: boolean;
    }>;
    bswPriceUsd?: number;
    buyBSWLabel: string;
    withEvent?: boolean;
    eventCallback?: () => void;
    children?: ReactNode;
    eventButtonLogo?: () => JSX.Element;
    customLogoSubtitle?: string;
    baseAwsUrl?: string;
    buyBswLabel?: string;
    mobileLangSelector: ElementType;
    showFooter?: boolean;
}
export interface ConnectMetaProps {
    registerToken: () => void;
}
export interface BSWPriceProps {
    BSWPriceLabel: string;
    BSWPriceValue: number;
}
export interface FooterInfoLinks {
    title?: string;
    links?: Array<FooterNavItem>;
}
export interface FooterAboutLinks {
    aboutLinks: FooterInfoLinks;
}
export interface FooterInfoPagesLinks {
    infoLinks: FooterInfoLinks;
}
export interface FooterProductLinks {
    productLinks: FooterInfoLinks;
}
export interface SocialLinks {
    title?: string;
    links?: any[];
}
export interface FooterSocialLinks {
    socialLinks: SocialLinks;
}
export interface FooterLinks {
    footerLinks: FooterInfoLinks;
}
export interface FooterNavItem {
    label: string;
    href: string;
    target?: string;
    type?: DropdownMenuItemType;
}
