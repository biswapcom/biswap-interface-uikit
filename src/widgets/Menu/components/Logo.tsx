import React, { FC, useContext } from "react";
import styled from "styled-components";

// components
import { Box, Flex } from "../../../components/Box";
import { BswIcon, LogoWithTextIcon, ProjectNameIcon } from "../../../components/Svg";
import { Button, ButtonVariants } from "../../../components/Button/";
import { BodyText, Scales } from "../../../components/Typography";

// hooks
import { useMatchBreakpoints } from "../../../contexts";

// context
import { MenuContext } from "../context";

interface Props {
  href: string;
  logoSubtitle?: string;
  navigateToHome?: () => void
}

const StyledInnerButton = styled(Button)`
  display: flex;
  align-items: center;
  height: auto;
  padding: 0;
  border: none;
  background-color: transparent;
`;

const LogoSwitcher: FC<{ logoSubtitle?: string }> = ({ logoSubtitle }) => {
  const { isMobile, isMd } = useMatchBreakpoints();

  if (isMobile || isMd) {
    return <BswIcon width="32px" height="32px" />;
  } else if (logoSubtitle) {
    return (
      <Flex>
        <BswIcon width="32px" height="32px" />
        <Box ml="8px">
          <ProjectNameIcon width="78px" height="32px" />
          <BodyText mt="-6px" textAlign="left" scale={Scales.SIZE12}>
            {logoSubtitle}
          </BodyText>
        </Box>
      </Flex>
    );
  }

  return <LogoWithTextIcon width="146px" height="32px" />;
};

const Logo: FC<Props> = ({ href, logoSubtitle, navigateToHome }) => {
  const { linkComponent } = useContext(MenuContext);

  const isAbsoluteUrl = href.startsWith("http");

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledInnerButton
          variant={ButtonVariants.LIGHT}
          onClick={navigateToHome}
          aria-label="Biswap home page"
        >
          <LogoSwitcher logoSubtitle={logoSubtitle} />
        </StyledInnerButton>
      ) : (
        <StyledInnerButton onClick={navigateToHome} variant="light" as={linkComponent}  aria-label="Biswap home page">
          <LogoSwitcher logoSubtitle={logoSubtitle} />
        </StyledInnerButton>
      )}
    </Flex>
  );
};

export default Logo;
