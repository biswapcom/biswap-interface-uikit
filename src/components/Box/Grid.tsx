import styled from "styled-components";
import { grid, flexbox } from "styled-system";

// components
import Box from "./Box";

// types
import { GridProps } from "./types";

const Grid = styled(Box)<GridProps>`
  display: grid;
  ${flexbox}
  ${grid}
`;

export default Grid;
