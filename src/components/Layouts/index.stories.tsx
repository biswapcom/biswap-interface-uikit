import React, { FC } from "react";
import styled from "styled-components";

// components
import { BaseLayout, CardsLayout, Container, HeroWrapper } from ".";
import { Box } from "../Box";

export default {
  title: "Components/Layouts",
  argTypes: {},
};

const Stub = styled(Box)`
  width: 100%;
  height: 300px;
  background: ${({ theme }) => theme.colors.twitter};
`;

export const Base: FC = () => {
  return (
    <BaseLayout>
      {[...Array(24)].map((value) => (
        <Stub key={value} />
      ))}
    </BaseLayout>
  );
};

export const Cards: FC = () => {
  return (
    <CardsLayout>
      {[...Array(10)].map((value) => (
        <Stub key={value} />
      ))}
    </CardsLayout>
  );
};

export const ContainerLayout: FC = () => {
  return (
    <Container>
      <Stub />
    </Container>
  );
};

export const HeroWrap: FC = () => {
  return (
    <HeroWrapper>
      <Stub />
    </HeroWrapper>
  );
};
