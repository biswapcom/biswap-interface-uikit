/// <reference types="react" />
import { type BodyTextProps } from "./types";
interface ScalesMap {
    [x: string]: {
        fontSize: string;
        lineHeight: string;
    };
}
export declare const bodyTextScaleMap: ScalesMap;
export declare const BodyText: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../Text").TextProps> & import("../Text").TextProps, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../Text").TextProps> & import("../Text").TextProps, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}>, never>, BodyTextProps>> & string;
export {};
