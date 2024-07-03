/// <reference types="react" />
import type { MarkerType } from "../../theme";
declare const Marker: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../Box").BoxProps> & import("../Box").BoxProps, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, {
    color?: keyof MarkerType;
    top?: string;
    right?: string;
}>> & string;
export default Marker;
