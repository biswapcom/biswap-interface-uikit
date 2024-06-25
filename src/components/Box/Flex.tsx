import styled from "styled-components";
import { flexbox } from "styled-system";

// components
import Box from "./Box";

// types
import { FlexProps } from "./types";

const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
`;

export default Flex;
