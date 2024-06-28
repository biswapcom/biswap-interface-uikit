import styled from "styled-components";

// components
import { Text } from "../Text";

// types
import { type HeadTextProps, HeadTextTags, Scales } from "./types";

export const headTextScaleMap = {
  [Scales.SIZE40]: {
    fontSize: "40px",
    lineHeight: "48px",
  },
  [Scales.SIZE32]: {
    fontSize: "32px",
    lineHeight: "40px",
  },
  [Scales.SIZE24]: {
    fontSize: "24px",
    lineHeight: "32px",
  },
  [Scales.SIZE20]: {
    fontSize: "20px",
    lineHeight: "28px",
  },
  [Scales.SIZE16]: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  [Scales.SIZE14]: {
    fontSize: "14px",
    lineHeight: "20px",
  },
  [Scales.SIZE12]: {
    fontSize: "12px",
    lineHeight: "16px",
  },
  [Scales.SIZE10]: {
    fontSize: "10px",
    lineHeight: "12px",
  },
};

export const HeadText = styled(Text).attrs({ bold: true, as: HeadTextTags.H2 })<HeadTextProps>`
  font-size: ${({ scale }) => headTextScaleMap[scale || Scales.SIZE32].fontSize};
  line-height: ${({ scale }) => headTextScaleMap[scale || Scales.SIZE32].lineHeight};
  font-weight: 600;
  white-space: ${({ nowrap }) => (nowrap ? "nowrap" : "normal")};
`;
