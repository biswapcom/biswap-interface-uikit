import React, { FC } from "react";
import styled from "styled-components";

// types
import { FooterLinks } from "../../types";

// components
import CommonFooterLinksComponent from "./CommonFooterLinksComponent";

const Wrapper = styled.div`
  grid-area: product;
`;

const Product: FC<FooterLinks> = ({ footerLinks }) => {
  return (
    <Wrapper>
      <CommonFooterLinksComponent footerLinks={footerLinks} />
    </Wrapper>
  );
};

export default Product;
