import React from "react";
import styled from "styled-components";
import noop from "lodash/noop";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Alert from "./Alert";
import { Text } from "../Text";

const Row = styled.div`
  margin-bottom: 32px;
  position: relative;
`;

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "400px" }}>
      <Row>
        <Alert title="Info" progress={40}>
          <Text as="p">This is a description</Text>
        </Alert>
      </Row>
      <Row>
        <Alert title="Success" variant="success" progress={50}>
          <Text as="p">This is a description</Text>
        </Alert>
      </Row>
      <Row>
        <Alert title="Warning" variant="warning" progress={16}>
          <Text as="p">This is a description</Text>
        </Alert>
      </Row>
      <Row>
        <Alert title="Danger" variant="danger" progress={82}>
          <Text as="p">This is a description</Text>
        </Alert>
      </Row>
    </div>
  );
};

const handleClick = noop;

export const WithHandler: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "400px" }}>
      <Row>
        <Alert onClick={handleClick} title="Info" progress={10}/>
      </Row>
      <Row>
        <Alert onClick={handleClick} title="Success" variant="success" progress={100}>
          A description of the success alert
        </Alert>
      </Row>
      <Row>
        <Alert
          onClick={handleClick}
          title="Danger A Long Title"
          variant="danger"
          progress={40}
        />
      </Row>
      <Row>
        <Alert onClick={handleClick} title="Warning" variant="warning" progress={30}/>
      </Row>
    </div>
  );
};
