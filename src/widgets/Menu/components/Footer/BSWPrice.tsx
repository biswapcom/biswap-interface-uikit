import React, { FC } from "react";
import styled from "styled-components";

// components
import { Text } from "../../../../components/Text";
import { BswIcon } from "../../../../components/Svg";
import { Grid } from "../../../../components/Box";

// types
import { BSWPriceProps } from "../../types";

const Wrapper = styled(Grid)`
  position: relative;
  grid-template-columns: 38px 1fr;
  grid-template-areas:
    "logo bsw-title"
    "logo bsw-value";
  grid-column-gap: 8px;
  width: 140px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 120px;
  }

  ${({ theme }) => theme.mediaQueries.xll} {
    grid-column-gap: 16px;
  }

  .logo {
    width: 38px;
    grid-area: logo;
  }
`;

const BSWPrice: FC<BSWPriceProps> = ({ BSWPriceLabel, BSWPriceValue }) => {
  return (
    <Wrapper>
      <BswIcon width="38px" className="logo" />
      <Text color="gray900" fontSize="12px" lineHeight="18px" bold>
        {BSWPriceLabel}
      </Text>
      <Text color="contrast" fontSize="16px" lineHeight="19px" bold>
        {BSWPriceValue}
      </Text>
    </Wrapper>
  );
};

export default BSWPrice;
