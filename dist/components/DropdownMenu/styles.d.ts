import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import { Colors } from "../../theme";
import type { StyledDropdownMenuInnerLinkItemProps, StyledDropdownMenuItemProps } from "./types";
export declare const InnerLinksBlockContainer: import("styled-components").StyledComponent<"div", DefaultTheme, import("../Box").BoxProps & {
    padded: boolean;
}, never>;
export declare const DropdownMenuInnerLinkItem: import("styled-components").StyledComponent<"div", DefaultTheme, import("../Box").BoxProps & StyledDropdownMenuInnerLinkItemProps, never>;
export declare const DropdownMenuInnerOuterLinkItem: import("styled-components").StyledComponent<"a", DefaultTheme, StyledDropdownMenuInnerLinkItemProps, never>;
export declare const CommonLinkStyle: ({ disabled, $isActive, $hasIcon, label, }: StyledDropdownMenuItemProps & {
    $isActive: boolean;
    $hasIcon?: boolean;
    label?: string | ReactNode;
}) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<DefaultTheme>>;
export declare const DropdownMenuItem: import("styled-components").StyledComponent<"button", DefaultTheme, StyledDropdownMenuItemProps & {
    $isActive: boolean;
    $hasIcon?: boolean;
}, never>;
export declare const DropdownInternalMenuItem: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("react-router-dom").LinkProps & import("react").RefAttributes<HTMLAnchorElement>>, DefaultTheme, StyledDropdownMenuItemProps & {
    $isActive: boolean;
    $hasIcon?: boolean;
    label?: string | ReactNode;
}, never>;
export declare const StyledDropdownMenuItemContainer: import("styled-components").StyledComponent<"div", DefaultTheme, import("../Box").BoxProps & {
    isOpenMenuItem?: boolean;
    disabled?: boolean;
}, never>;
export declare const DropdownMenuDivider: import("styled-components").StyledComponent<"hr", DefaultTheme, {}, never>;
export declare const StyledDropdownMenu: import("styled-components").StyledComponent<"div", DefaultTheme, import("../Box").BoxProps & import("../Box").GridProps & {
    $isOpen: boolean;
    $isExtended?: boolean;
}, never>;
export declare const LinkStatus: import("styled-components").StyledComponent<"div", DefaultTheme, import("../Text").TextProps & {
    color: keyof Colors;
}, never>;
export declare const BannerPlacementItem: import("styled-components").StyledComponent<"div", DefaultTheme, import("../Box").BoxProps, never>;
export declare const BorderMobileMenuItem: import("styled-components").StyledComponent<"div", DefaultTheme, import("../Box").BoxProps & {
    isHighlighted?: boolean;
}, never>;
