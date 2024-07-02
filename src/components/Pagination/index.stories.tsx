import React, { FC } from "react";
import styled from "styled-components";

// components
import Pagination from "./Pagination";
import { Box } from "../Box";

// types
import { Variants } from "./types";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {},
};

const Wrapper = styled(Box)`
  padding: 32px 24px;
`;

const WrapperLight = styled(Wrapper)`
  background: ${({ theme }) => theme.colors.white};
`;

const WrapperDark = styled(Wrapper)`
  background: ${({ theme }) => theme.colors.backgroundDark};
`;

export const Default: FC = () => {
  return (
    <>
      <WrapperDark>
        <Pagination variant={Variants.DARK} pageCount={9} />
      </WrapperDark>
      <WrapperLight>
        <Pagination variant={Variants.LIGHT} pageCount={9} />
      </WrapperLight>
    </>
  );
};
