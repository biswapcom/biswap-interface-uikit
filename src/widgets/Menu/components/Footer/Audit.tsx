import React, { FC } from "react";
import styled from "styled-components";
import Flex from "../../../../components/Box/Flex";

// components
import Image from "next/image";

// hooks
import { useMatchBreakpoints } from "../../../../contexts";
import { BswIcon, ProjectNameIcon } from "../../../../components/Svg";

const CERTIK_URL = "https://www.certik.org/projects/biswap";

const AuditedWrap = styled(Flex)`
  //grid-area: audit;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const LinkWrap = styled.a`
  height: fit-content;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const Audit: FC<{ marketplaceLink?: string; baseAwsUrl: string }> = ({ marketplaceLink, baseAwsUrl }) => {
  const { isMobile } = useMatchBreakpoints();

  return (
    <AuditedWrap>
      <Flex>
        <BswIcon width="32px" />
        <ProjectNameIcon ml="8px" width="110px" />
      </Flex>
      <LinkWrap href={CERTIK_URL} target="_blank">
        <Image width={124} height={35} src={`${baseAwsUrl}/icons/CertikAudited.svg`} alt="Certik" />
      </LinkWrap>
    </AuditedWrap>
  );
};

export default Audit;
