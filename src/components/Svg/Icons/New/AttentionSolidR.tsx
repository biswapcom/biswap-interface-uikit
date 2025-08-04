import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8 10.5C7.44772 10.5 7 10.9477 7 11.5C7 12.0523 7.44772 12.5 8 12.5C8.55229 12.5 9 12.0523 9 11.5C9 10.9477 8.55229 10.5 8 10.5ZM8 3.5C7.44772 3.5 7 3.94772 7 4.5V8.5C7 9.05228 7.44772 9.5 8 9.5C8.55229 9.5 9 9.05229 9 8.5V4.5C9 3.94772 8.55228 3.5 8 3.5Z"
      />
    </Svg>
  );
};

export default Icon;
