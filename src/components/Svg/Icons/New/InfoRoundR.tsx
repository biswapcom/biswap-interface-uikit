import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 17C11.4477 17 11 16.5523 11 16V11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2555 8C13.2555 8.69036 12.6958 9.25 12.0055 9.25H11.9965C11.3062 9.25 10.7465 8.69036 10.7465 8C10.7465 7.30964 11.3062 6.75 11.9965 6.75H12.0055C12.6958 6.75 13.2555 7.30964 13.2555 8Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
      />
    </Svg>
  );
};

export default Icon;
