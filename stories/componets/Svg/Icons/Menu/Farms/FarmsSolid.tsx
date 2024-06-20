import React from "react";
import Svg from "../../../Svg";
import { SvgProps } from "../../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2C3.44772 2 3 2.44772 3 3V4H4L3 10C2.44772 10 2 10.4477 2 11V12.0218C3.0103 11.375 4.21136 11 5.5 11C9.08985 11 12 13.9101 12 17.5C12 18.0163 11.9398 18.5185 11.8261 19H16.0275C16.2762 16.75 18.1837 15 20.5 15C21.0259 15 21.5308 15.0902 21.9999 15.256V12.7346C21.9999 11.7393 21.268 10.8954 20.2827 10.7547L15 10L13 4H14V3C14 2.44772 13.5523 2 13 2H4ZM5.22754 9L6 4H11L12.6578 9H5.22754Z"
      />
      <path d="M5.5 23C8.53757 23 11 20.5376 11 17.5C11 14.4624 8.53757 12 5.5 12C2.46243 12 0 14.4624 0 17.5C0 20.5376 2.46243 23 5.5 23Z" />
      <path d="M24 19.5C24 21.433 22.433 23 20.5 23C18.567 23 17 21.433 17 19.5C17 17.567 18.567 16 20.5 16C22.433 16 24 17.567 24 19.5Z" />
    </Svg>
  );
};

export default Icon;
