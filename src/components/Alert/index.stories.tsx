import React, {FC} from "react";
import styled from "styled-components";
import noop from "lodash/noop";
import { Meta } from "@storybook/react/types-6-0";

// components
import Alert from "./Alert";
import { Text } from "../Text";
import { Box } from "../Box";

// types
import { Variants } from "./types";

const Wrapper = styled(Box)`
    width: 400px;
    padding: 32px;
`

const Row = styled(Box)`
  position: relative;
  margin-bottom: 32px;
`;

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {},
} as Meta;

export const Default: FC = () => {
  return (
    <Wrapper>
      <Row>
        <Alert title="Info" progress={0}>
          <Text as="p">This is a description</Text>
        </Alert>
      </Row>
      <Row>
        <Alert title="Success" variant={Variants.SUCCESS} progress={25}>
          <Text as="p">This is a description</Text>
        </Alert>
      </Row>
      <Row>
        <Alert title="Warning" variant={Variants.WARNING} progress={50}>
          <Text as="p">This is a description</Text>
        </Alert>
      </Row>
      <Row>
        <Alert title="Danger" variant={Variants.DANGER} progress={75}>
          <Text as="p">This is a description</Text>
        </Alert>
      </Row>
    </Wrapper>
  );
};

const handleClick = noop;

export const WithHandler: FC = () => {
  return (
    <Wrapper>
      <Row>
        <Alert onClick={handleClick} title="Info" progress={0} />
      </Row>
      <Row>
        <Alert onClick={handleClick} title="Success" variant={Variants.SUCCESS} progress={25}>
          A description of the success alert
        </Alert>
      </Row>
      <Row>
        <Alert
          onClick={handleClick}
          title="Danger A Long Title"
          variant={Variants.DANGER}
          progress={50}
        />
      </Row>
      <Row>
        <Alert onClick={handleClick} title="Warning" variant={Variants.DANGER} progress={75} />
      </Row>
    </Wrapper>
  );
};
