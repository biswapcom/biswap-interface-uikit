import React, { FC } from "react";
import styled from "styled-components";

// components
import { IconButton, ButtonScales, ButtonVariants } from "../../Button";
import { Flex } from "../../Box";
import { ChevronLeftIcon, ChevronRightIcon } from "../../Svg";
import { BodyText, Scales } from "../../Typography";
import { Container } from "../../Layouts";

// hooks
import { useMatchBreakpoints } from "../../../contexts";

interface Props {
  title?: string;
  showNavButtons: boolean;
  handleNav: (arg: string) => void;
}
const NavButton = styled(IconButton)`
  width: 32px;
  height: 32px;
`;

const CarouselHeader: FC<Props> = ({ handleNav, title, showNavButtons }): JSX.Element => {
  const { isMobile } = useMatchBreakpoints();

  return (
    <Container>
      <Flex
        position="relative"
        justifyContent={title ? "space-between" : "flex-end"}
        mb={isMobile ? "24px" : "32px"}
        alignItems={isMobile ? "flex-end" : "flex-start"}
      >
        {title && (
          <BodyText scale={isMobile ? Scales.SIZE24 : Scales.SIZE32} color="white">
            {title}
          </BodyText>
        )}
        {showNavButtons && (
          <Flex ml="8px">
            <NavButton
              scale={ButtonScales.XS}
              variant={ButtonVariants.PRIMARY}
              onClick={() => {
                handleNav("prev");
              }}
            >
              <ChevronLeftIcon color="white" />
            </NavButton>
            <NavButton
              scale={ButtonScales.XS}
              variant={ButtonVariants.PRIMARY}
              ml="8px"
              onClick={() => {
                handleNav("next");
              }}
            >
              <ChevronRightIcon color="white" />
            </NavButton>
          </Flex>
        )}
      </Flex>
    </Container>
  );
};

export default CarouselHeader;
