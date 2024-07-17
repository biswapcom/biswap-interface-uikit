import React, { FC } from "react";

// components
import TooltipHelper from "./ToolipHelper";
import { Box, Flex } from "../Box";
import BellSolid from "../Svg/Icons/Bell/BellSolid";
import { BodyText } from "../Typography";
import CustomTooltip from "./config";
import { Button, ButtonScales } from "../Button";
import { Scales } from "../Typography";

export default {
  title: "Components/TooltipHelper",
  component: TooltipHelper,
  argTypes: {},
};

export const Default: FC = () => {
  return (
    <Box>
      <Flex justifyContent="flex-start" mt="50px" ml="100px">
        <TooltipHelper showTooltip={false} text="Some text for example" placement="left" size="50px" mr="30px">
          <BodyText scale={Scales.SIZE12}>0.0001</BodyText>
        </TooltipHelper>
        <TooltipHelper text="Some text for example" placement="right" size="50px" mr="30px">
          <BodyText scale={Scales.SIZE14}>Some text with tooltip</BodyText>
        </TooltipHelper>
        <TooltipHelper text="Some text for example" placement="left" size="50px" mr="30px">
          <BodyText scale={Scales.SIZE14}>Some text with tooltip</BodyText>
        </TooltipHelper>
        <TooltipHelper text={<CustomTooltip />} placement="right" size="50px">
          <BodyText scale={Scales.SIZE14} color="success">
            Some text with tooltip
          </BodyText>
        </TooltipHelper>
        <TooltipHelper text="Some text for example" placement="top">
          <Button scale={ButtonScales.LG}>Button</Button>
        </TooltipHelper>
      </Flex>
      <Flex mt="50px" ml="100px">
        <TooltipHelper text="Some text for example" placement="bottom" mr="30px" />
        <TooltipHelper text="Some text for example" placement="left" mr="30px" />
        <TooltipHelper text="Some text for example" placement="right" mr="30px" />
        <TooltipHelper text="Some text for example" placement="top" mr="30px" Icon={BellSolid} color="success" />
        <TooltipHelper
          text="Some text for example"
          placement="left"
          mr="30px"
          size="24px"
          Icon={BellSolid}
          color="secondary"
        />
        <TooltipHelper
          text={<CustomTooltip />}
          placement="left"
          mr="30px"
          size="24px"
          Icon={BellSolid}
          color="secondary"
        />
        <TooltipHelper
          text={<CustomTooltip />}
          placement="right"
          mr="30px"
          size="24px"
          Icon={BellSolid}
          color="warning"
        />
      </Flex>
      <Flex mt="50px" ml="100px" height="100px" background="#000000">
        <TooltipHelper text={"light tooltip Some text for example"} placement="bottom-start" isLight mr="30px" />
      </Flex>
    </Box>
  );
};
