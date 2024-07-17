import React, { FC } from "react";
import styled from "styled-components";

// types
import { FooterLinks } from "../../types";

// components
import CommonFooterLinksComponent from "./CommonFooterLinksComponent";

const Wrapper = styled.div`
  grid-area: about;
`;

const About: FC<FooterLinks> = ({ footerLinks }) => {
  return (
    <Wrapper>
      <CommonFooterLinksComponent footerLinks={footerLinks} />
    </Wrapper>
  );
};

export default About;
