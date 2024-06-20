import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2396 4.37031C12.2098 4.40409 12.173 4.43117 12.1316 4.44973C12.0903 4.46829 12.0454 4.4779 12 4.4779C11.9546 4.4779 11.9097 4.46829 11.8684 4.44973C11.827 4.43117 11.7902 4.40409 11.7604 4.37031C10.8202 3.29323 9.20573 2 6.8747 2C3.669 2 1.0339 4.63125 1.00059 7.86615C0.972031 10.6891 1.98472 13.2958 4.09999 15.8349C5.09258 17.026 6.89215 18.9312 11.0481 21.7099C11.3287 21.8985 11.6603 21.9996 12 22C12.3396 21.9997 12.6713 21.8988 12.9519 21.7104C17.1079 18.9318 18.9074 17.0266 19.9 15.8354C22.0142 13.2969 23.028 10.6901 22.9994 7.86667C22.9661 4.63125 20.331 2 17.1253 2C14.7943 2 13.1798 3.29219 12.2396 4.37031ZM21.044 7.88735C21.022 5.7732 19.2833 4 17.1253 4C15.565 4 14.4389 4.8531 13.699 5.70157L13.6918 5.70979C13.4737 5.95706 13.2089 6.15028 12.9179 6.28095C12.6271 6.41154 12.3143 6.4779 12 6.4779C11.6856 6.4779 11.3729 6.41154 11.0821 6.28095C10.7911 6.15028 10.5263 5.95704 10.3082 5.70977L10.3017 5.7023C9.56079 4.85361 8.43449 4 6.8747 4C4.71659 4 2.97801 5.77331 2.95604 7.88684M21.044 7.88735C21.0668 10.1438 20.2779 12.2973 18.4113 14.5386C17.5587 15.5617 15.9277 17.318 12.0004 19.9569C8.07227 17.3176 6.44116 15.561 5.58851 14.5378C3.72137 12.2966 2.9333 10.143 2.95604 7.88684"
      />
    </Svg>
  );
};

export default Icon;
