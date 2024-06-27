import styled from "styled-components";

// components
import Text from "../Text/Text";

// types
import { type BodyTextProps, BodyTextTags, Scales } from "./types";

// theme
import { breakpointsKeys } from "../../theme/base";

interface ScalesMap {
  [x: string]: {
    fontSize: string;
    lineHeight: string;
  };
}

export const bodyTextScaleMap: ScalesMap = {
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

const getScalesAttributes = ({ scale, as }: BodyTextProps) => {
  if (typeof scale === "string") return bodyTextScaleMap[scale || Scales.SIZE16];
  if (typeof scale === "undefined") return bodyTextScaleMap[Scales.SIZE16];

  const tempScales = JSON.parse(JSON.stringify(scale));

  if (!tempScales.xs) tempScales.xs = BodyText.defaultProps?.scale;

  return {
    fontSize: breakpointsKeys.map((breakPoint) =>
      tempScales[breakPoint] ? bodyTextScaleMap[tempScales[breakPoint]].fontSize : null
    ),
    lineHeight: breakpointsKeys.map((breakPoint) =>
      tempScales[breakPoint] ? bodyTextScaleMap[tempScales[breakPoint]].lineHeight : null
    ),
    as: as || BodyTextTags.P,
  };
};

// @ts-ignore TODO check types
export const BodyText = styled(Text).attrs(getScalesAttributes)<BodyTextProps>`
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  white-space: ${({ nowrap }) => (nowrap ? "nowrap" : "normal")};
`;
