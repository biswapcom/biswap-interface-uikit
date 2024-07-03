/// <reference types="react" />
import { IDirectButtonStyled } from "../../types";
export declare const backgroundVariants: {
    grayOpacity: {
        backgroundColor: string;
    };
    white: {
        backgroundColor: string;
    };
    primary: {
        backgroundColor: string;
    };
};
export declare const WrapperDirectionButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never>, "ref"> & {
    ref?: import("react").Ref<HTMLButtonElement>;
}, IDirectButtonStyled>> & string;
