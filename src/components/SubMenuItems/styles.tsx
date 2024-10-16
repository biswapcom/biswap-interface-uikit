import styled from "styled-components";

// components
import { Flex } from "../Box";

const StyledSubMenuItems = styled(Flex)<{ $isMobileOnly: boolean }>`
  ${({ theme }) => theme.mediaQueries.sm} {
    ${({ $isMobileOnly }) => ($isMobileOnly ? "display:none" : "")};
  }

  flex-grow: 1;
  background-color: ${({ theme }) => `${theme.colors.white}`};
  box-shadow: inset 0 -2px 0 -8px rgba(133, 133, 133, 0.1);
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default StyledSubMenuItems;
