import React, { FC } from "react";
import styled from "styled-components";

// components
import { Box, Flex } from "../Box";
import { Button } from "../Button";
import { BodyText } from "../Typography";

// theme
import { lightColors } from "../../theme";

export default {
  title: "Components/Colors",
  argTypes: {},
};

const ColorBox = styled(Box)<{ backgroundColor: string }>`
  margin-right: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Default: FC = () => {
  const copyHandle = (arg: string) => {
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(arg);
    }
  };

  return (
    <Box p="20px">
      {Object.entries(lightColors).map((colorItem, index) => (
        <Flex key={colorItem[0] + index} alignItems="center" mb="20px" justifyContent="space-between" width="800px">
          <ColorBox width={100} height={40} backgroundColor={colorItem[1]} />
          <Flex justifyContent="space-between" width="350px">
            <BodyText mr="20px">{colorItem[0]}</BodyText>
            <BodyText>{colorItem[1]}</BodyText>
          </Flex>

          <Box>
            <Button mr="10px" onClick={() => copyHandle(colorItem[0])}>
              Copy Name
            </Button>
            <Button onClick={() => copyHandle(colorItem[1])}>Copy Hash</Button>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};
