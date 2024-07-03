import React, { FC } from "react";
import { BoxProps } from "../Box";
interface IProps extends BoxProps {
    title?: string;
    revised: string;
    scrollClass?: string;
    description: string;
    termsList: Array<string | JSX.Element>;
    imageSize?: string;
    imageColor?: string;
}
export declare const StyledList: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof BoxProps> & BoxProps, "ref"> & {
    ref?: React.Ref<HTMLDivElement>;
}, never>> & string;
export declare const StyledListItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof BoxProps> & BoxProps, "ref"> & {
    ref?: React.Ref<HTMLDivElement>;
}, keyof import("../Box").FlexProps> & import("../Box").FlexProps, never>> & string;
declare const Terms: FC<IProps>;
export default Terms;
