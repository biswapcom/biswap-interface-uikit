import React, { FC, useState } from "react";
import styled from "styled-components";
import { Meta } from "@storybook/react/types-6-0";

// components
import ButtonMenu from "./ButtonMenu";
import ButtonMenuItem from "./ButtonMenuItem";
import { Box } from "../Box";

// hooks
import { useMatchBreakpoints } from "../../contexts";
import { Scales, Variants } from "./types";

const Row = styled(Box)<{ isLight?: boolean }>`
  margin-bottom: 32px;
  padding: 8px;
  background-color: ${({ theme, isLight }) => (isLight ? theme.colors.white : "transparent")};
`;

export default {
  title: "Components/Button Menu",
  component: ButtonMenu,
  argTypes: {},
} as Meta;

export const Default: FC = () => {
  const [index, setIndex] = useState<number>(0);

  const { isMobile } = useMatchBreakpoints();

  const handleClick = (newIndex: number) => setIndex(newIndex);

  return (
    <>
      <Row>
        <ButtonMenu disabled activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Dark sm 1</ButtonMenuItem>
          <ButtonMenuItem>Dark sm 2</ButtonMenuItem>
          <ButtonMenuItem>Dark sm 3</ButtonMenuItem>
          <ButtonMenuItem>Dark sm 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row isLight>
        <ButtonMenu disabled variant={Variants.LIGHT} activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Dark sm 1</ButtonMenuItem>
          <ButtonMenuItem>Dark sm 2</ButtonMenuItem>
          <ButtonMenuItem>Dark sm 3</ButtonMenuItem>
          <ButtonMenuItem>Dark sm 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>

      <Row isLight>
        <ButtonMenu activeIndex={index} onItemClick={handleClick} variant={Variants.LIGHT} scale={Scales.SM}>
          <ButtonMenuItem>Light sm 1</ButtonMenuItem>
          <ButtonMenuItem>Light sm 2</ButtonMenuItem>
          <ButtonMenuItem>Light sm 3</ButtonMenuItem>
          <ButtonMenuItem>Light sm 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>

      <Row isLight>
        <ButtonMenu activeIndex={index} onItemClick={handleClick} variant={Variants.LIGHT}>
          <ButtonMenuItem>Light md 1</ButtonMenuItem>
          <ButtonMenuItem>Light md 2</ButtonMenuItem>
          <ButtonMenuItem>Light md 3</ButtonMenuItem>
          <ButtonMenuItem>Light md 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>

      <Row isLight>
        <ButtonMenu activeIndex={index} onItemClick={handleClick} variant={Variants.LIGHT} scale={Scales.LG}>
          <ButtonMenuItem>Light lg 1</ButtonMenuItem>
          <ButtonMenuItem>Light lg 2</ButtonMenuItem>
          <ButtonMenuItem>Light lg 3</ButtonMenuItem>
          <ButtonMenuItem>Light lg 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>

      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick} variant={Variants.DARK} scale={Scales.SM}>
          <ButtonMenuItem>Dark sm 1</ButtonMenuItem>
          <ButtonMenuItem>Dark sm 2</ButtonMenuItem>
          <ButtonMenuItem>Dark sm 3</ButtonMenuItem>
          <ButtonMenuItem>Dark sm 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>

      <Row>
        <ButtonMenu
          activeIndex={index}
          onItemClick={handleClick}
          variant={Variants.DARK}
          itemsProperties={[
            {
              index: 0,
              markerColor: "success",
              dontShowTooltip: !isMobile,
              tooltipText: "test tooltip text",
            },
            { index: 1, markerColor: "secondary" },
            {
              index: 2,
              tooltipText: "test tooltip text extended test tooltip text extended test tooltip",
            },
            {
              index: 3,
              dontShowTooltip: isMobile,
              tooltipText:
                "test tooltip text extended test tooltip text extended test tooltip text extended test tooltip text extended ",
            },
          ]}
        >
          <ButtonMenuItem>Dark md 1</ButtonMenuItem>
          <ButtonMenuItem>Dark md 2</ButtonMenuItem>
          <ButtonMenuItem>Dark md 3</ButtonMenuItem>
          <ButtonMenuItem>Dark md 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>

      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick} variant={Variants.DARK} scale={Scales.LG}>
          <ButtonMenuItem>Dark lg 1</ButtonMenuItem>
          <ButtonMenuItem>Dark lg 2</ButtonMenuItem>
          <ButtonMenuItem>Dark lg 3</ButtonMenuItem>
          <ButtonMenuItem>Dark lg 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>

      <Row isLight>
        <ButtonMenu activeIndex={index} onItemClick={handleClick} variant={Variants.WARNING_LIGHT}>
          <ButtonMenuItem>Warning Light 1</ButtonMenuItem>
          <ButtonMenuItem>Warning Light 2</ButtonMenuItem>
          <ButtonMenuItem>Warning Light 3</ButtonMenuItem>
          <ButtonMenuItem>Warning Light 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>

      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick} variant={Variants.WARNING_DARK}>
          <ButtonMenuItem>Warning Light 1</ButtonMenuItem>
          <ButtonMenuItem>Warning Light 2</ButtonMenuItem>
          <ButtonMenuItem>Warning Light 3</ButtonMenuItem>
          <ButtonMenuItem>Warning Light 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  );
};

export const AsLinks: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  return (
    <>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={setIndex}>
          <ButtonMenuItem as="a" href="https://biswap.org/">
            Biswap 1
          </ButtonMenuItem>
          <ButtonMenuItem as="a" href="https://biswap.org/">
            Link 2
          </ButtonMenuItem>
          <ButtonMenuItem as="a" href="https://biswap.org/">
            Example 3
          </ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row isLight>
        <ButtonMenu variant={Variants.LIGHT} activeIndex={index} onItemClick={setIndex}>
          <ButtonMenuItem as="a" href="https://biswap.org/">
            Biswap 1
          </ButtonMenuItem>
          <ButtonMenuItem as="a" href="https://biswap.org/">
            Link 2
          </ButtonMenuItem>
          <ButtonMenuItem as="a" href="https://biswap.org/">
            Example 3
          </ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  );
};

export const FlatBottom: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);
  return (
    <>
      <Row>
        <ButtonMenu flatBottom activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Flat Bottom</ButtonMenuItem>
          <ButtonMenuItem>Example</ButtonMenuItem>
          <ButtonMenuItem>Menu</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row isLight>
        <ButtonMenu flatBottom variant={Variants.LIGHT} activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Flat Bottom</ButtonMenuItem>
          <ButtonMenuItem>Example</ButtonMenuItem>
          <ButtonMenuItem>Menu</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  );
};

export const FlatTop: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);
  return (
    <>
      <Row>
        <ButtonMenu flatTop activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Flat Top</ButtonMenuItem>
          <ButtonMenuItem>Example</ButtonMenuItem>
          <ButtonMenuItem>Menu</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row isLight>
        <ButtonMenu flatTop variant={Variants.LIGHT} activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Flat Top</ButtonMenuItem>
          <ButtonMenuItem>Example</ButtonMenuItem>
          <ButtonMenuItem>Menu</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  );
};

export const WithoutBackground: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);
  return (
    <>
      <Row>
        <ButtonMenu withoutBackground activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Without</ButtonMenuItem>
          <ButtonMenuItem>Background</ButtonMenuItem>
          <ButtonMenuItem>Example</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu withoutBackground variant={Variants.LIGHT} activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Without</ButtonMenuItem>
          <ButtonMenuItem>Background</ButtonMenuItem>
          <ButtonMenuItem>Example</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  );
};

export const DisabledMenu: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);
  return (
    <>
      <Row>
        <ButtonMenu disabled activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Disabled</ButtonMenuItem>
          <ButtonMenuItem>Dark</ButtonMenuItem>
          <ButtonMenuItem>Buttons</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row isLight>
        <ButtonMenu disabled variant={Variants.LIGHT} activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Disabled</ButtonMenuItem>
          <ButtonMenuItem>Light</ButtonMenuItem>
          <ButtonMenuItem>Full</ButtonMenuItem>
          <ButtonMenuItem>Buttons</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu disabled fullWidth activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Disabled</ButtonMenuItem>
          <ButtonMenuItem>Light</ButtonMenuItem>
          <ButtonMenuItem>Full</ButtonMenuItem>
          <ButtonMenuItem>Buttons</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row isLight>
        <ButtonMenu disabled fullWidth variant={Variants.LIGHT} activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Disabled</ButtonMenuItem>
          <ButtonMenuItem>Light</ButtonMenuItem>
          <ButtonMenuItem>Full</ButtonMenuItem>
          <ButtonMenuItem>Buttons</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  );
};

export const FullWidthMenu: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);

  return (
    <>
      <Row>
        <ButtonMenu
          scrollX
          fullWidth
          activeIndex={index}
          equalElementWidth
          onItemClick={handleClick}
          variant={Variants.WARNING_DARK}
          scale={Scales.LG}
        >
          <ButtonMenuItem as="a">Warning Dark</ButtonMenuItem>
          <ButtonMenuItem>Full width</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu fullWidth activeIndex={index} onItemClick={setIndex}>
          <ButtonMenuItem as="a" href="https://biswap.org/">
            Biswap
          </ButtonMenuItem>
          <ButtonMenuItem as="a" href="https://biswap.org/">
            Link
          </ButtonMenuItem>
          <ButtonMenuItem as="a" href="https://biswap.org/">
            Full Width
          </ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu fullWidth flatTop activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Full Width</ButtonMenuItem>
          <ButtonMenuItem>Flat Top</ButtonMenuItem>
          <ButtonMenuItem>Example</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu fullWidth flatBottom activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Full Width</ButtonMenuItem>
          <ButtonMenuItem>Flat Bottom</ButtonMenuItem>
          <ButtonMenuItem>Example</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu disabled fullWidth activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Disabled</ButtonMenuItem>
          <ButtonMenuItem>Dark</ButtonMenuItem>
          <ButtonMenuItem>Buttons</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu fullWidth withoutBackground activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Without</ButtonMenuItem>
          <ButtonMenuItem>Background</ButtonMenuItem>
          <ButtonMenuItem>Full Width</ButtonMenuItem>
          <ButtonMenuItem>Example</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  );
};
