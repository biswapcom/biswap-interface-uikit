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
    return <BswIcon width="32px" />;
  } else if (logoSubtitle) {
    return (
      <Flex>
        <BswIcon width="32px" />
        <Box ml="8px">
          <ProjectNameIcon width="78px" />
          <BodyText mt="-6px" textAlign="left" scale={Scales.SIZE12}>
            {logoSubtitle}
          </BodyText>
        </Box>
      </Flex>
    );
  }

  return <LogoWithTextIcon width="145px" />;
};

const Logo: FC<Props> = ({ href, logoSubtitle }) => {
  const { linkComponent } = useContext(MenuContext);

  const isAbsoluteUrl = href.startsWith("http");

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledInnerButton
          variant={ButtonVariants.LIGHT}
          onClick={() => window.open(href, "_self")}
          aria-label="Biswap home page"
        >
          <LogoSwitcher logoSubtitle={logoSubtitle} />
        </StyledInnerButton>
      ) : (
        <StyledInnerButton variant="light" as={linkComponent} href={href} aria-label="Biswap home page">
          <LogoSwitcher logoSubtitle={logoSubtitle} />
        </StyledInnerButton>
      )}
    </Flex>
  );
};

export default Logo;
