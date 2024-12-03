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
  padding: 20px 16px;
  background: ${({ theme }) => theme.colors.dark600};
  margin-bottom: 32px;

  @media screen and (min-width: 750px) {
    flex-direction: column;
    margin-bottom: 0;
    padding: 20px 24px;

    & > div {
      margin-bottom: 24px;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    padding: 24px;

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
