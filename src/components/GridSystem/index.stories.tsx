import React, { FC } from "react";
import styled from "styled-components";

// components
import { Box, Grid } from "../Box";

export default {
  title: "Components/GridSystem",
  argTypes: {},
};

const Wrapper = styled(Grid)`
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 8px;
  margin: 0 auto 24px;
`;

const Column = styled(Box)`
  padding: 12px;
  background: ${({ theme }) => theme.colors.pastelBlue};
`;

const ColumnCustom = styled(Box)`
  grid-column: span 4;
  padding: 12px;
  background: ${({ theme }) => theme.colors.dark100};

  ${({ theme }) => theme.mediaQueries.xxl} {
    grid-column: span 3;
  }
`;

export const Default: FC = (): JSX.Element => {
  return (
    <>
      <Wrapper>
        <Column>1</Column>
        <Column>2</Column>
        <Column>3</Column>
        <Column>4</Column>
        <Column>5</Column>
        <Column>6</Column>
        <Column>7</Column>
        <Column>8</Column>
        <Column>9</Column>
        <Column>10</Column>
        <Column>11</Column>
        <Column>12</Column>
      </Wrapper>

      <Wrapper>
        <ColumnCustom>1</ColumnCustom>
        <ColumnCustom>2</ColumnCustom>
        <ColumnCustom>3</ColumnCustom>
        <ColumnCustom>4</ColumnCustom>
      </Wrapper>
    </>
  );
};
