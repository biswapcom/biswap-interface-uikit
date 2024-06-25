import styled from "styled-components";
import { background, border, layout, position, space } from "styled-system";

// types
import { BoxProps } from "./types";

const Box = styled.div<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
`;

export default Box;
