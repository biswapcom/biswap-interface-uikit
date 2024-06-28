import React, { useState } from "react";

// components
import { Box, Flex } from "../Box";
import { Button, ButtonVariants } from "../Button";
import { BodyText, Scales } from "../Typography";
import ExpandableIcon from "./ExpandableIcon";

// types
import { VariantRotate } from "./type";

export default {
  title: "Components/Expandable",
  component: ExpandableIcon,
  argTypes: {},
};

export const Default = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box>
      <Flex>
        <Button
          variant={ButtonVariants.TEXT}
          aria-label="Hide or show expandable content"
          onClick={() => setOpen(!open)}
        >
          <ExpandableIcon isOpen={open} iconName="ChevronDown" />
        </Button>
        <Button
          variant={ButtonVariants.TEXT}
          aria-label="Hide or show expandable content"
          onClick={() => setOpen(!open)}
        >
          <ExpandableIcon isOpen={open} width="14px" iconName="ChevronDownCircleSolid" />
        </Button>
        <Button
          variant={ButtonVariants.TEXT}
          aria-label="Hide or show expandable content"
          onClick={() => setOpen(!open)}
          endIcon={
            <ExpandableIcon
              isOpen={open}
              iconName="ChevronDown"
              width="18px"
              ml="40px"
              rotateType={VariantRotate.ROTATE_V2}
            />
          }
        >
          <BodyText scale={Scales.SIZE12}>Details2</BodyText>
        </Button>
      </Flex>
      <Flex>
        <Button
          variant={ButtonVariants.TEXT}
          aria-label="Hide or show expandable content"
          onClick={() => setOpen(!open)}
        >
          <ExpandableIcon
            isOpen={open}
            iconName={"ChevronDown"}
            width="24px"
            color="success"
            rotateType={VariantRotate.ROTATE_V1}
          />
        </Button>
        <Button
          variant={ButtonVariants.TEXT}
          aria-label="Hide or show expandable content"
          onClick={() => setOpen(!open)}
        >
          <ExpandableIcon
            isOpen={open}
            width="24px"
            iconName="ChevronDownCircleSolid"
            color="warning"
            ml="4px"
            rotateType={VariantRotate.ROTATE_V1}
          />
        </Button>
        <Button
          variant={ButtonVariants.TEXT}
          aria-label="Hide or show expandable content"
          onClick={() => setOpen(!open)}
          endIcon={
            <ExpandableIcon isOpen={open} iconName="ChevronDown" width="20px" rotateType={VariantRotate.ROTATE_V1} />
          }
        >
          <BodyText mr="4px" color="primary" bold>
            Details
          </BodyText>
        </Button>
      </Flex>
    </Box>
  );
};
