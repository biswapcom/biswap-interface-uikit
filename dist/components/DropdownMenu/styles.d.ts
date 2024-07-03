import { ReactNode } from "react";
import { Colors } from "../../theme";
import type { StyledDropdownMenuInnerLinkItemProps, StyledDropdownMenuItemProps } from "./types";
export declare const InnerLinksBlockContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../Box").BoxProps> & import("../Box").BoxProps, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, {
    padded: boolean;
}>> & string;
export declare const DropdownMenuInnerLinkItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../Box").BoxProps> & import("../Box").BoxProps, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, StyledDropdownMenuInnerLinkItemProps>> & string;
export declare const DropdownMenuInnerOuterLinkItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, StyledDropdownMenuInnerLinkItemProps>> & string;
export declare const CommonLinkStyle: ({ disabled, $isActive, $hasIcon, label, }: StyledDropdownMenuItemProps & {
    $isActive: boolean;
    $hasIcon?: boolean;
    label?: string | ReactNode;
}) => import("styled-components").RuleSet<object>;
export declare const DropdownMenuItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, StyledDropdownMenuItemProps & {
    $isActive: boolean;
    $hasIcon?: boolean;
}>> & string;
export declare const DropdownInternalMenuItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("react-router-dom").LinkProps & import("react").RefAttributes<HTMLAnchorElement>, "ref"> & {
    ref?: import("react").Ref<HTMLAnchorElement>;
}, StyledDropdownMenuItemProps & {
    $isActive: boolean;
    $hasIcon?: boolean;
    label?: string | ReactNode;
}>> & string & Omit<import("react").ForwardRefExoticComponent<import("react-router-dom").LinkProps & import("react").RefAttributes<HTMLAnchorElement>>, keyof import("react").Component<any, {}, any>>;
export declare const StyledDropdownMenuItemContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../Box").BoxProps> & import("../Box").BoxProps, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, {
    isOpenMenuItem?: boolean;
    disabled?: boolean;
}>> & string;
export declare const DropdownMenuDivider: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHRElement>, HTMLHRElement>, never>> & string;
export declare const StyledDropdownMenu: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../Box").BoxProps> & import("../Box").BoxProps, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, keyof import("../Box").GridProps> & import("../Box").GridProps, {
    $isOpen: boolean;
    $isExtended?: boolean;
}>> & string;
export declare const LinkStatus: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../Text").TextProps> & import("../Text").TextProps, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, {
    color: keyof Colors;
}>> & string;
export declare const BannerPlacementItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../Box").BoxProps> & import("../Box").BoxProps, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, never>> & string;
export declare const BorderMobileMenuItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../Box").BoxProps> & import("../Box").BoxProps, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, {
    isHighlighted?: boolean;
}>> & string;
