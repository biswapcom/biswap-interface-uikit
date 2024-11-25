import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" fill="currentColor" {...props}>
      <rect width="40" height="40" rx="20" fill="#749BD8" fillOpacity="0.16" />
      <path d="M10.834 29.1667H29.1673" stroke="#749BD8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
            strokeLinejoin="round" />
      <path
        d="M17.9375 12.6666V29.1666H22.0625V12.6666C22.0625 11.6583 21.65 10.8333 20.4125 10.8333H19.5875C18.35 10.8333 17.9375 11.6583 17.9375 12.6666Z"
        stroke="#749BD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M11.75 18.1666V29.1666H15.4167V18.1666C15.4167 17.1583 15.05 16.3333 13.95 16.3333H13.2167C12.1167 16.3333 11.75 17.1583 11.75 18.1666Z"
        stroke="#749BD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M24.584 22.7501V29.1667H28.2507V22.7501C28.2507 21.7417 27.884 20.9167 26.784 20.9167H26.0507C24.9507 20.9167 24.584 21.7417 24.584 22.7501Z"
        stroke="#749BD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};



export default Icon;
