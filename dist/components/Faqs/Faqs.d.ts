import { FC } from "react";
import { BoxProps } from "../Box";
import { type QuestionProp, Variants } from "./types";
type TitlePositionType = "start" | "center" | "end";
interface IProps extends BoxProps {
    title?: string;
    leftData: QuestionProp[];
    rightData?: QuestionProp[];
    variant?: Variants;
    blogFAQ?: boolean;
    titlePosition?: TitlePositionType;
}
declare const Faqs: FC<IProps>;
export default Faqs;
