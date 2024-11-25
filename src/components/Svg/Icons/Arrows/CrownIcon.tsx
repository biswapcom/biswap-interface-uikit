import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg fill='currentColor'  viewBox="0 0 40 40" {...props}>
      <rect width="40" height="40" rx="20" fill="#377EF7" fillOpacity="0.16" />
      <path d="M18.1992 16.4001L19.9992 18.2001L21.7992 16.4001" stroke="#377EF7" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23.5996 22.2499L25.3996 24.0499L27.1996 22.2499" stroke="#377EF7" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.7988 22.2499L14.5988 24.0499L16.3988 22.2499" stroke="#377EF7" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 18.2001V11.0001" stroke="#377EF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.3984 23.9901V18.0367C25.3984 17.0426 26.2043 16.2367 27.1984 16.2367H28.9984" stroke="#377EF7"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.6 23.9901V18.0367C14.6 17.0426 13.7941 16.2367 12.8 16.2367H11" stroke="#377EF7" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 25.4V27.2C11 28.1941 11.8059 29 12.8 29H27.2C28.1941 29 29 28.1941 29 27.2V25.4" stroke="#377EF7"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default Icon;
