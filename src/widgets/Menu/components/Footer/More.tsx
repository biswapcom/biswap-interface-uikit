import React, { FC } from "react";

// types
import { FooterLinks } from "../../types";

// components
import CommonFooterLinksComponent from "./CommonFooterLinksComponent";

const More: FC<FooterLinks> = ({ footerLinks }) => {
  return (
    <>
      <CommonFooterLinksComponent footerLinks={footerLinks} />
    </>
  );
};

export default More;
