import React, { FC } from "react";
import styled from "styled-components";

// types
import { BSWPriceProps } from "../../types";

// components
import BSWPrice from "./BSWPrice";
import BuyBSW from "./BuyBSW";
import { Flex } from "../../../../components/Box";

interface Props extends BSWPriceProps {
  buyBswHandler: () => void;
  buyBswLabel: string;
}

const Wrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.dark600};

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: column;

    & > div {
      margin-bottom: 24px;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;

    & > div {
      margin-bottom: 0;
    }
  }
`;

const FooterInfo: FC<Props> = ({ BSWPriceLabel, BSWPriceValue, buyBswHandler, buyBswLabel }) => {
  return (
    <Wrapper>
      <BSWPrice BSWPriceLabel={BSWPriceLabel} BSWPriceValue={BSWPriceValue} />
      <BuyBSW buyBswHandler={buyBswHandler} buyBswLabel={buyBswLabel} />
    </Wrapper>
  );
};

export default FooterInfo;
