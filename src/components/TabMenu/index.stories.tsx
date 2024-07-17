import React, { FC, useState } from "react";
import styled from "styled-components";
import { Meta } from "@storybook/react/types-6-0";

// components
import { TabBarScales, TabBarVariants, TabMenu, TabMenuItem } from "./index";
import { Box } from "../Box";

const Row = styled(Box)<{ isLight?: boolean }>`
  margin-bottom: 32px;
  padding: 24px;
  background-color: ${({ theme, isLight }) => (isLight ? theme.colors.white : theme.colors.tooltip)};
`;

export default {
  title: "Components/Tab Bar",
  component: TabMenu,
  argTypes: {},
} as Meta;

export const Default: FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);

  return (
    <>
      <Row>
        <TabMenu disabled activeIndex={index} onItemClick={handleClick}>
          <TabMenuItem>Dark sm 1</TabMenuItem>
          <TabMenuItem>Dark sm 2</TabMenuItem>
          <TabMenuItem>Dark sm 3</TabMenuItem>
          <TabMenuItem>Dark sm 4</TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu disabled variant={TabBarVariants.LIGHT} activeIndex={index} onItemClick={handleClick}>
          <TabMenuItem>Dark sm 1</TabMenuItem>
          <TabMenuItem>Dark sm 2</TabMenuItem>
          <TabMenuItem>Dark sm 3</TabMenuItem>
          <TabMenuItem>Dark sm 4</TabMenuItem>
        </TabMenu>
      </Row>

      <Row isLight>
        <TabMenu
          withoutAnimation
          activeIndex={index}
          onItemClick={handleClick}
          variant={TabBarVariants.LIGHT}
          scale={TabBarScales.SM}
        >
          <TabMenuItem>Light sm 1</TabMenuItem>
          <TabMenuItem>Light sm 2</TabMenuItem>
          <TabMenuItem>Light sm 3</TabMenuItem>
          <TabMenuItem>Light sm 4</TabMenuItem>
        </TabMenu>
      </Row>

      <Row isLight>
        <TabMenu activeIndex={index} onItemClick={handleClick} variant={TabBarVariants.LIGHT}>
          <TabMenuItem>Light md 1</TabMenuItem>
          <TabMenuItem>Light md 2</TabMenuItem>
          <TabMenuItem>Light md 3</TabMenuItem>
          <TabMenuItem>Light md 4</TabMenuItem>
        </TabMenu>
      </Row>

      <Row isLight>
        <TabMenu activeIndex={index} onItemClick={handleClick} variant={TabBarVariants.LIGHT} scale={TabBarScales.LG}>
          <TabMenuItem>Light lg 1</TabMenuItem>
          <TabMenuItem>Light lg 2</TabMenuItem>
          <TabMenuItem>Light lg 3</TabMenuItem>
          <TabMenuItem>Light lg 4</TabMenuItem>
        </TabMenu>
      </Row>

      <Row>
        <TabMenu activeIndex={index} onItemClick={handleClick} variant={TabBarVariants.DARK} scale={TabBarScales.SM}>
          <TabMenuItem>Dark sm 1</TabMenuItem>
          <TabMenuItem>Dark sm 2</TabMenuItem>
          <TabMenuItem>Dark sm 3</TabMenuItem>
          <TabMenuItem>Dark sm 4</TabMenuItem>
        </TabMenu>
      </Row>

      <Row>
        <TabMenu activeIndex={index} onItemClick={handleClick} variant={TabBarVariants.DARK}>
          <TabMenuItem>Dark md 1</TabMenuItem>
          <TabMenuItem>Dark md 2</TabMenuItem>
          <TabMenuItem>Dark md 3</TabMenuItem>
          <TabMenuItem>Dark md 4</TabMenuItem>
        </TabMenu>
      </Row>

      <Row>
        <TabMenu activeIndex={index} onItemClick={handleClick} variant={TabBarVariants.DARK} scale={TabBarScales.LG}>
          <TabMenuItem>Dark lg 1</TabMenuItem>
          <TabMenuItem>Dark lg 2</TabMenuItem>
          <TabMenuItem>Dark lg 3</TabMenuItem>
          <TabMenuItem>Dark lg 4</TabMenuItem>
        </TabMenu>
      </Row>
    </>
  );
};

export const AsLinks: FC = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <>
      <Row>
        <TabMenu activeIndex={index} onItemClick={setIndex}>
          <TabMenuItem as="a" href="https://biswap.org/">
            Biswap 1
          </TabMenuItem>
          <TabMenuItem as="a" href="https://biswap.org/">
            Link 2
          </TabMenuItem>
          <TabMenuItem as="a" href="https://biswap.org/">
            Example 3
          </TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu variant={TabBarVariants.LIGHT} activeIndex={index} onItemClick={setIndex}>
          <TabMenuItem as="a" href="https://biswap.org/">
            Biswap 1
          </TabMenuItem>
          <TabMenuItem as="a" href="https://biswap.org/">
            Link 2
          </TabMenuItem>
          <TabMenuItem as="a" href="https://biswap.org/">
            Example 3
          </TabMenuItem>
        </TabMenu>
      </Row>
    </>
  );
};

export const DisabledMenu: FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);

  return (
    <>
      <Row>
        <TabMenu disabled activeIndex={index} onItemClick={handleClick}>
          <TabMenuItem>Disabled</TabMenuItem>
          <TabMenuItem>Dark</TabMenuItem>
          <TabMenuItem>Buttons</TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu disabled variant={TabBarVariants.LIGHT} activeIndex={index} onItemClick={handleClick}>
          <TabMenuItem>Disabled</TabMenuItem>
          <TabMenuItem>Light</TabMenuItem>
          <TabMenuItem>Full</TabMenuItem>
          <TabMenuItem>Buttons</TabMenuItem>
        </TabMenu>
      </Row>
      <Row>
        <TabMenu disabled fullWidth activeIndex={index} onItemClick={handleClick}>
          <TabMenuItem>Disabled</TabMenuItem>
          <TabMenuItem>Light</TabMenuItem>
          <TabMenuItem>Full</TabMenuItem>
          <TabMenuItem>Buttons</TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu disabled fullWidth variant={TabBarVariants.LIGHT} activeIndex={index} onItemClick={handleClick}>
          <TabMenuItem>Disabled</TabMenuItem>
          <TabMenuItem>Light</TabMenuItem>
          <TabMenuItem>Full</TabMenuItem>
          <TabMenuItem>Buttons</TabMenuItem>
        </TabMenu>
      </Row>
    </>
  );
};

export const FullWidthMenu: FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);

  return (
    <>
      <Row>
        <TabMenu
          scrollX
          fullWidth
          activeIndex={index}
          equalElementWidth
          onItemClick={handleClick}
          variant={TabBarVariants.DARK}
          scale={TabBarScales.LG}
        >
          <TabMenuItem as="a">Warning Dark</TabMenuItem>
          <TabMenuItem>Full width</TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu
          scrollX
          fullWidth
          activeIndex={index}
          equalElementWidth
          onItemClick={handleClick}
          variant={TabBarVariants.LIGHT}
          scale={TabBarScales.LG}
        >
          <TabMenuItem as="a">Warning Dark</TabMenuItem>
          <TabMenuItem>Full width</TabMenuItem>
        </TabMenu>
      </Row>
      <Row>
        <TabMenu fullWidth activeIndex={index} onItemClick={setIndex}>
          <TabMenuItem as="a" href="https://biswap.org/">
            Biswap
          </TabMenuItem>
          <TabMenuItem as="a" href="https://biswap.org/">
            Link
          </TabMenuItem>
          <TabMenuItem as="a" href="https://biswap.org/">
            Full Width
          </TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu variant={TabBarVariants.LIGHT} fullWidth activeIndex={index} onItemClick={setIndex}>
          <TabMenuItem as="a" href="https://biswap.org/">
            Biswap
          </TabMenuItem>
          <TabMenuItem as="a" href="https://biswap.org/">
            Link
          </TabMenuItem>
          <TabMenuItem as="a" href="https://biswap.org/">
            Full Width
          </TabMenuItem>
        </TabMenu>
      </Row>
      <Row>
        <TabMenu disabled fullWidth activeIndex={index} onItemClick={handleClick}>
          <TabMenuItem>Disabled</TabMenuItem>
          <TabMenuItem>Dark</TabMenuItem>
          <TabMenuItem>Buttons</TabMenuItem>
        </TabMenu>
      </Row>
      <Row isLight>
        <TabMenu variant={TabBarVariants.LIGHT} disabled fullWidth activeIndex={index} onItemClick={handleClick}>
          <TabMenuItem>Disabled</TabMenuItem>
          <TabMenuItem>Dark</TabMenuItem>
          <TabMenuItem>Buttons</TabMenuItem>
        </TabMenu>
      </Row>
    </>
  );
};
