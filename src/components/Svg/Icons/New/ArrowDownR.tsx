import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L18.7071 13.7071C19.0976 13.3166 19.0976 12.6834 18.7071 12.2929C18.3166 11.9024 17.6834 11.9024 17.2929 12.2929L13 16.5858L13 5C13 4.44771 12.5523 4 12 4C11.4477 4 11 4.44771 11 5L11 16.5858L6.70711 12.2929C6.31658 11.9024 5.68342 11.9024 5.29289 12.2929C4.90237 12.6834 4.90237 13.3166 5.29289 13.7071L11.2929 19.7071Z"
      />
    </Svg>
  );
};

export default Icon;
