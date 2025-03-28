import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7C2 4.79086 3.79086 3 6 3H17C18.6569 3 20 4.34315 20 6V7.17071C21.1652 7.58254 22 8.69378 22 10V18C22 19.6569 20.6569 21 19 21H6C3.79086 21 2 19.2091 2 17V7ZM18 7V6C18 5.44772 17.5523 5 17 5H6C4.89543 5 4 5.89543 4 7V17C4 18.1046 4.89543 19 6 19H19C19.5523 19 20 18.5523 20 18V10C20 9.44772 19.5523 9 19 9H7C6.44772 9 6 8.55228 6 8C6 7.44772 6.44772 7 7 7H18ZM15 14C15 13.4477 15.4477 13 16 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H16C15.4477 15 15 14.5523 15 14Z"
      />
    </Svg>
  );
};

export default Icon;
