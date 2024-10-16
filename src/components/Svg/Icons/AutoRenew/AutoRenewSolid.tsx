import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 7.79V6C8.69 6 6 8.69 6 12C6 12.79 6.15 13.56 6.44 14.25C6.59 14.61 6.48 15.02 6.21 15.29C5.7 15.8 4.84 15.62 4.57 14.95C4.2 14.04 4 13.04 4 12C4 7.58 7.58 4 12 4V2.21C12 1.76 12.54 1.54 12.85 1.85L15.64 4.64C15.84 4.84 15.84 5.15 15.64 5.35L12.85 8.14C12.54 8.46 12 8.24 12 7.79ZM17.56 9.75C17.41 9.4 17.52 8.98 17.79 8.71C18.3 8.2 19.16 8.38 19.43 9.05C19.8 9.96 20 10.96 20 12C20 16.42 16.42 20 12 20V21.8C12 22.24 11.46 22.46 11.15 22.15L8.36 19.36C8.16 19.16 8.16 18.85 8.36 18.65L11.15 15.86C11.46 15.54 12 15.76 12 16.21V18C15.31 18 18 15.31 18 12C18 11.21 17.84 10.45 17.56 9.75Z"
      />
    </Svg>
  );
};

export default Icon;
