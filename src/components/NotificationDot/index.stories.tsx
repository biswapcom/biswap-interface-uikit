import React, { FC, useState } from "react";
import styled from "styled-components";

// components
import NotificationDot from "./NotificationDot";
import { Button } from "../Button";
import { ButtonMenu, ButtonMenuItem } from "../ButtonMenu";
import { Box } from "../Box";

export default {
  title: "Components/NotificationDot",
  component: NotificationDot,
  argTypes: {},
};

export const Default: FC = () => {
  return (
    <>
      <NotificationDot show>
        <Button>Hi</Button>
      </NotificationDot>
      <NotificationDot show color="warning">
        <Button>Hi</Button>
      </NotificationDot>
      <NotificationDot show color="success">
        <Button>Hi</Button>
      </NotificationDot>
    </>
  );
};

const Row = styled(Box)`
  & > * + * {
    margin-left: 16px;
  }
`;

export const MenuButtons: FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);

  return (
    <Row>
      <ButtonMenu activeIndex={index} onItemClick={handleClick}>
        <NotificationDot show={index === 0}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
        </NotificationDot>
        <NotificationDot show={index === 1}>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
        </NotificationDot>
        <NotificationDot show={index === 2}>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
        </NotificationDot>
        <NotificationDot show={index === 3}>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </NotificationDot>
      </ButtonMenu>
    </Row>
  );
};
