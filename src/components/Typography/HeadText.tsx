import styled from "styled-components";

// components
import { Text } from "../Text";

// types
import { type HeadTextProps, HeadTextTags, Scales } from "./types";

// theme
import { breakpointsKeys } from "../../theme/base";

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

const getScalesAttributes = ({ scale, as }: HeadTextProps) => {
  if (typeof scale === "string") return headTextScaleMap[scale || Scales.SIZE32];
  if (typeof scale === "undefined") return headTextScaleMap[Scales.SIZE32];

  const tempScales = JSON.parse(JSON.stringify(scale));

  if (!tempScales.xs) tempScales.xs = HeadText.defaultProps?.scale;

  return {
    fontSize: breakpointsKeys.map((breakPoint) =>
      tempScales[breakPoint] ? headTextScaleMap[tempScales[breakPoint]].fontSize : null
    ),
    lineHeight: breakpointsKeys.map((breakPoint) =>
      tempScales[breakPoint] ? headTextScaleMap[tempScales[breakPoint]].lineHeight : null
    ),
    as: as || HeadTextTags.H2,
  };
};

export const HeadText = styled(Text).attrs(getScalesAttributes)<HeadTextProps>`
  font-weight: 600;
  white-space: ${({ nowrap }) => (nowrap ? "nowrap" : "normal")};
`;
