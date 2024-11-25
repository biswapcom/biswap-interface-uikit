import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg  viewBox="0 0 40 40" fill="currentColor" {...props}>
      <rect width="40" height="40" rx="20" fill="#94A3C6" fillOpacity="0.16" />
      <g clipPath="url(#clip0_435_2788)">
        <path d="M24.25 20V10" stroke="#9AB2D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.5 13.75L24.25 10L28 13.75" stroke="#9AB2D3" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" />
        <path d="M15.75 30V20" stroke="#9AB2D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 26.25L15.75 30L19.5 26.25" stroke="#9AB2D3" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_435_2788">
          <rect width="24" height="24" fill="white" transform="translate(8 8)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
