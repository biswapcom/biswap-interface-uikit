import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" fill="currentColor" {...props}>
      <rect width="40" height="40" rx="20" fill="#004ACC" fillOpacity="0.16" />
      <path
        d="M30 16.5C30 20.09 27.09 23 23.5 23C23.33 23 23.15 22.99 22.98 22.98C22.73 19.81 20.19 17.27 17.02 17.02C17.01 16.85 17 16.67 17 16.5C17 12.91 19.91 10 23.5 10C27.09 10 30 12.91 30 16.5Z"
        stroke="#004ACC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 23.5C23 27.09 20.09 30 16.5 30C12.91 30 10 27.09 10 23.5C10 19.91 12.91 17 16.5 17C16.67 17 16.85 17.01 17.02 17.02C20.19 17.27 22.73 19.81 22.98 22.98C22.99 23.15 23 23.33 23 23.5Z"
        stroke="#004ACC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.62 22.62L16.5 21L17.38 22.62L19 23.5L17.38 24.38L16.5 26L15.62 24.38L14 23.5L15.62 22.62Z"
        stroke="#004ACC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
