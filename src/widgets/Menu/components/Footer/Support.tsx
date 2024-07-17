import React, { FC } from "react";
import styled from "styled-components";

// components
import { TelegramIcon } from "../../../../components/Svg";
import { BodyText, Scales } from "../../../../components/Typography";

const Wrapper = styled.div`
  grid-area: support;
  margin-top: 8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 24px;
  }

  ${({ theme }) => theme.mediaQueries.xll} {
    margin-top: 0;
  }
`;

const LinkBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 8px;
  background: #26a6e5;
  color: ${({ theme }) => theme.colors.white};
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.65;
  }
`;

const Suport: FC = () => {
  return (
    <Wrapper>
      <BodyText as="h4" scale={Scales.SIZE16} mt="16px" color="white">
        Support 24/7
      </BodyText>
      <LinkBtn href="https://t.me/biswap" target="_blank">
        Contact us
        <TelegramIcon width="24px" color="contrast" ml="4px" />
      </LinkBtn>
    </Wrapper>
  );
};

export default Suport;
