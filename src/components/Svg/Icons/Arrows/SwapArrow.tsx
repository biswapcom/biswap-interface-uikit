import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg  viewBox="0 0 40 40" fill="currentColor" {...props}>
      <rect width="40" height="40" rx="20" fill="#F93B5D" fillOpacity="0.16" />
      <path d="M28.5002 22.99L23.4902 28.01" stroke="#F93B5D" strokeWidth="2" strokeMiterlimit="10"
            strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 22.99H28.5" stroke="#F93B5D" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
            strokeLinejoin="round" />
      <path d="M11.5 17.01L16.51 11.99" stroke="#F93B5D" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
            strokeLinejoin="round" />
      <path d="M28.5 17.01H11.5" stroke="#F93B5D" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
            strokeLinejoin="round" />
    </Svg>
  );
};

export default Icon;
