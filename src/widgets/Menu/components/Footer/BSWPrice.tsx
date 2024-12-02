import React, { FC } from "react";
import styled from "styled-components";

// components
import { BodyText, BodyTextTags, Scales } from "../../../../components/Typography";
import { BswIcon } from "../../../../components/Svg";
import { Flex, Box } from "../../../../components/Box";

// types
import { BSWPriceProps } from "../../types";

const Test = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const BSWPrice: FC<BSWPriceProps> = ({ BSWPriceLabel, BSWPriceValue }) => {
  return (
    <Flex>
      <BswIcon width="40px" />
      <Box ml="8px">
        <BodyText color="gray900" as={BodyTextTags.P} scale={Scales.SIZE16} bold>
          {BSWPriceLabel}
        </BodyText>
        <BodyText color="gray100" as={BodyTextTags.P} scale={Scales.SIZE24} bold>
          {BSWPriceValue}
        </BodyText>
      </Box>
    </Flex>
  );
};

export default BSWPrice;
