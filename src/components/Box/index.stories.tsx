import React, { FC } from "react";

// components
import BoxComponent from "./Box";
import FlexComponent from "./Flex";
import GridComponent from "./Grid";
import Text from "../Text/Text";
import { Link } from "../Link";

// utils
import { getResponsiveAttrs } from "../../util";

export default {
  title: "Components/Primitives",
  component: BoxComponent,
  argTypes: {},
};

export const Box: FC = () => {
  return (
    <div>
      <BoxComponent as="p">
        Contains background, border, layout, position, and space from{" "}
        <Link href="https://styled-system.com/api" target="_blank">
          Styled System&lsquo;s API
        </Link>
      </BoxComponent>
    </div>
  );
};

export const Flex: FC = () => {
  return (
    <div>
      <Text>Based on the Box component. You can apply any flexbox properties on the Flex component.</Text>
      <Link href="https://styled-system.com/api#flexbox" target="_blank">
        List of applicable props
      </Link>
      <FlexComponent
        justifyContent={getResponsiveAttrs({
          xs: "flex-start",
          sm: "space-between",
          md: "flex-start",
          lg: "space-between",
        })}
        mt="40px"
      >
        <span>Left</span>
        <span>right</span>
      </FlexComponent>
      <FlexComponent justifyContent="center" mt="8px">
        <span>center</span>
      </FlexComponent>
    </div>
  );
};

export const Grid: FC = () => {
  return (
    <GridComponent
      justifyItems="center"
      alignContent="center"
      gridTemplateColumns="1fr 1fr"
      gridColumnGap="16px"
      style={{ backgroundColor: "#7645D9" }}
    >
      <BoxComponent style={{ backgroundColor: "#1fc7d4", width: "300px", height: "300px" }} />
      <BoxComponent style={{ backgroundColor: "#1fc7d4", width: "300px", height: "300px" }} />
    </GridComponent>
  );
};
