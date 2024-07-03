/// <reference types="react" />
import { HandleProps, InputProps, StyleToggleProps } from "./types";
import { SpaceProps } from "styled-system";
interface IToggleProps extends SpaceProps {
    labelOrientation?: string;
    disabled?: boolean;
    gridArea?: string;
    spaceBetween?: boolean;
    labelSize?: string;
}
export declare const ToggleWrap: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, IToggleProps>> & string;
export declare const Handle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, HandleProps>> & string;
export declare const Label: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../Text").TextProps> & import("../Text").TextProps, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../Text").TextProps> & import("../Text").TextProps, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}>, never>, keyof import("../Typography").BodyTextProps> & import("../Typography").BodyTextProps, {
    labelOrientation?: string;
    isChecked: boolean;
    disabled?: boolean;
    variant?: string;
}>> & string;
export declare const Input: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, InputProps>> & string;
declare const StyledToggle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyleToggleProps>> & string;
export default StyledToggle;
