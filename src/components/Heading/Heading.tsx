import styled from "styled-components";

// components
import Text from "../Text/Text";

// types
import { type HeadingProps, Scales, Tags } from "./types";

const style = {
  [Scales.MD]: {
    fontSize: "20px",
    fontSizeLg: "20px",
  },
  [Scales.LG]: {
    fontSize: "24px",
    fontSizeLg: "24px",
  },
  [Scales.XL]: {
    fontSize: "32px",
    fontSizeLg: "40px",
  },
  [Scales.XXL]: {
    fontSize: "48px",
    fontSizeLg: "64px",
  },
};

const Heading = styled(Text).attrs({ bold: true, tags: Tags.H2 })<HeadingProps>`
  font-size: ${({ scale }) => style[scale || Scales.MD].fontSize};
  font-weight: 600;
  line-height: 1.1;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ scale }) => style[scale || Scales.LG].fontSize};
  }
`;

export default Heading;
