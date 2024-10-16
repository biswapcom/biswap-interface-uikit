import React, { FC } from "react";
import styled from "styled-components";

// types
import { BSWPriceProps, FooterStatisticProps } from "../../types";

// utils
import { formatSpacingAmount } from "../../../../util";

// components
import BSWPrice from "./BSWPrice";
import ConnectMetamask from "./ConnectMetamask";
import BuyBSW from "./BuyBSW";
import { Flex } from "../../../../components/Box";

interface Props extends BSWPriceProps, FooterStatisticProps {
  registerToken: () => void;
  buyBswHandler: () => void;
  baseAwsUrl: string;
  buyBswLabel: string;
}

const Wrapper = styled(Flex)`
  display: flex;
  grid-area: footer-info;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  background: ${({ theme }) => theme.colors.dark600};

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.mediaQueries.xll} {
    flex-direction: row;
    justify-content: initial;
  }
`;

const LeftInfo = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 24px;

  ${({ theme }) => theme.mediaQueries.xll} {
    flex-direction: column;
    justify-content: space-between;
    width: 142px;
    min-width: 142px;
    margin-right: 24px;
    margin-bottom: 0;
  }
`;

const FlexWrap = styled(Flex)`
  align-items: center;
  gap: 8px;
`;

const InfoList = styled.div`
  flex-grow: initial;

  ${({ theme }) => theme.mediaQueries.xll} {
    flex-grow: 1;
  }
`;

const InfoListItem = styled(Flex)`
  align-items: center;
  line-height: 18px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: space-between;
  }
`;

const InfoListLabel = styled.span`
  width: 140px;
  min-width: 140px;
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 12px;
  font-weight: bold;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 120px;
    min-width: 120px;
  }
`;

const InfoListValue = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  padding-left: 4px;
  font-weight: bold;
  width: 126px;
`;

const FooterInfo: FC<Props> = ({
  BSWPriceLabel,
  BSWPriceValue,
  registerToken,
  footerStatistic,
  buyBswHandler,
  baseAwsUrl,
  buyBswLabel,
}) => {
  return (
    <Wrapper>
      <LeftInfo>
        <BSWPrice BSWPriceLabel={BSWPriceLabel} BSWPriceValue={BSWPriceValue} />
        <FlexWrap>
          <ConnectMetamask onClick={registerToken} baseAwsUrl={baseAwsUrl} />
          <BuyBSW buyBswHandler={buyBswHandler} buyBswLabel={buyBswLabel} />
        </FlexWrap>
      </LeftInfo>
      <InfoList>
        {footerStatistic.map((item, index) => (
          <InfoListItem key={index.toString()}>
            <InfoListLabel>{item.label}</InfoListLabel>
            <InfoListValue>{formatSpacingAmount(item.value)}</InfoListValue>
          </InfoListItem>
        ))}
      </InfoList>
    </Wrapper>
  );
};

export default FooterInfo;
