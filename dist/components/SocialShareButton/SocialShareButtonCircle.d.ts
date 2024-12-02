import { FC } from "react";
import { FlexboxProps } from "styled-system";
import { Socials } from "./types";
interface SocialShareButtonCircleProps extends FlexboxProps {
    social: Socials;
    label: string;
    link: string;
    message: string;
    color?: string;
    width?: string;
}
declare const SocialShareButtonCircle: FC<SocialShareButtonCircleProps>;
export default SocialShareButtonCircle;
