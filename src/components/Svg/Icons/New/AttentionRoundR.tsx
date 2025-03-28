import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12C1 5.94772 5.94772 1 12 1C18.0523 1 23 5.94772 23 12C23 18.0523 18.0523 23 12 23C5.94772 23 1 18.0523 1 12ZM12 3C7.05228 3 3 7.05228 3 12C3 16.9477 7.05228 21 12 21C16.9477 21 21 16.9477 21 12C21 7.05228 16.9477 3 12 3Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8945 16C10.8945 15.3925 11.387 14.9 11.9945 14.9H12.0035C12.611 14.9 13.1035 15.3925 13.1035 16C13.1035 16.6075 12.611 17.1 12.0035 17.1H11.9945C11.387 17.1 10.8945 16.6075 10.8945 16Z"
      />
    </Svg>
  );
};

export default Icon;
