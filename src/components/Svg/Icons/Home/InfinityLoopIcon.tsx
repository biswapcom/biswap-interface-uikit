import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" fill="currentColor" {...props}>
      <rect width="40" height="40" rx="20" fill="#A8102B" fillOpacity="0.16" />
      <path
        d="M11.27 20C10.48 19.05 10 17.83 10 16.5C10 13.48 12.47 11 15.5 11H20.5C23.52 11 26 13.48 26 16.5C26 19.52 23.53 22 20.5 22H18"
        stroke="#A8102B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.73 20C29.52 20.95 30 22.17 30 23.5C30 26.52 27.53 29 24.5 29H19.5C16.48 29 14 26.52 14 23.5C14 20.48 16.47 18 19.5 18H22"
        stroke="#A8102B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
