import { type HeadingProps, Tags } from "./types";
declare const Heading: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../Text").TextProps & {
    bold: boolean;
    tags: Tags;
} & HeadingProps, "bold" | "tags">;
export default Heading;
