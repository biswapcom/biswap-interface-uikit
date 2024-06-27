import React, { FC } from "react";
import styled from "styled-components";

// components
import Dropdown from "./Dropdown";
import { Flex } from "../Box";

// types
import { DropdownPosition, DropdownScales, DropdownVariants } from "./types";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {},
};

const WrapperLight = styled(Flex)`
  height: 150px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.gray100};
`;

const WrapperDark = styled(WrapperLight)`
  background-color: ${({ theme }) => theme.colors.dark800};
`;

export const Default: FC = () => {
  return (
    <>
      <WrapperLight>
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale={DropdownScales.LG}
          variant={DropdownVariants.LIGHT}
          options={[
            {
              label: "Light LG",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "BSC",
                color: "success",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
              icon: {
                name: "Gas",
                color: "secondary",
              },
            },
          ]}
        />
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale={DropdownScales.MD}
          variant={DropdownVariants.LIGHT}
          options={[
            {
              label: "Light MD",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
        />
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale={DropdownScales.SM}
          variant={DropdownVariants.LIGHT}
          options={[
            {
              label: "Light SM",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
        />
      </WrapperLight>
      <WrapperLight>
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale={DropdownScales.SM}
          variant={DropdownVariants.LIGHT}
          options={[
            {
              label: "Light open to top",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
          position={DropdownPosition.TOP}
        />
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale={DropdownScales.SM}
          variant={DropdownVariants.LIGHT}
          options={[
            {
              label: "Light disabled",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
          disabled
        />
      </WrapperLight>
      <WrapperDark>
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale={DropdownScales.LG}
          variant={DropdownVariants.DARK}
          options={[
            {
              label: "Dark LG",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
        />
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale={DropdownScales.MD}
          variant={DropdownVariants.DARK}
          options={[
            {
              label: "Dark MD",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
        />
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale={DropdownScales.SM}
          variant={DropdownVariants.DARK}
          options={[
            {
              label: "Dark SM",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
        />
      </WrapperDark>
      <WrapperDark>
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale={DropdownScales.SM}
          variant={DropdownVariants.DARK}
          options={[
            {
              label: "Dark open to top",
              value: "valueTest",
              icon: {
                name: "Auction",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                isAws: true,
                name: "https://static.biswap.org/bs/chains/56.svg",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
          position={DropdownPosition.TOP}
        />
        <Dropdown
          mr="24px"
          maxWidth="250px"
          scale={DropdownScales.SM}
          variant={DropdownVariants.DARK}
          options={[
            {
              label: "Dark disabled",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text2",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
            {
              label: "Text3",
              value: "valueTest",
              icon: {
                name: "Binance",
                color: "pastelBlue",
              },
            },
          ]}
          disabled
        />
      </WrapperDark>
    </>
  );
};
