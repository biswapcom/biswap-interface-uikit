import React from "react";
import Svg from "../../../Svg";
import { SvgProps } from "../../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.15842 1C4.07093 1 4 1.07093 4 1.15842V4H1C0.447715 4 0 4.44772 0 5V7C0 10.7277 2.54955 13.8599 6 14.748C6.18636 14.7959 6.37535 14.8374 6.56671 14.872C7.10157 15.3671 7.7042 15.7901 8.35913 16.1254C9.0557 16.6344 10 17.6535 10 19C10 19.899 9.19184 20.1918 8.30203 20.5143C7.21225 20.9092 6 21.3485 6 23H18C18 21.3485 16.7878 20.9092 15.698 20.5143C14.8082 20.1918 14 19.899 14 19C14 17.6535 14.9443 16.6344 15.6409 16.1254C16.2958 15.7901 16.8985 15.3671 17.4333 14.8719C17.6246 14.8373 17.8135 14.7959 17.9998 14.748C21.4503 13.8599 23.9998 10.7277 23.9998 7V5C23.9998 4.44772 23.5521 4 22.9998 4H20V1.15842C20 1.07093 19.9291 1 19.8416 1H4.15842ZM20 6V9C20 10.0248 19.8073 11.0045 19.4562 11.905C20.9949 10.8188 21.9998 9.02673 21.9998 7V6H20ZM4.54385 11.9052C4.1927 11.0046 4 10.0248 4 9V6H2V7C2 9.02684 3.005 10.819 4.54385 11.9052ZM11.7983 4.12189C11.8777 3.95937 12.1223 3.95937 12.2017 4.1219L13.5149 6.80976C13.5472 6.876 13.6137 6.92161 13.6904 6.9302L16.8037 7.27872C16.992 7.29979 17.0676 7.51948 16.9284 7.641L14.6267 9.65071C14.5699 9.70023 14.5445 9.77403 14.5596 9.84558L15.1706 12.7488C15.2075 12.9244 15.0096 13.0602 14.8442 12.9727L12.1085 11.5269C12.0411 11.4913 11.9589 11.4913 11.8915 11.5269L9.1558 12.9727C8.99039 13.0602 8.79246 12.9244 8.8294 12.7488L9.4404 9.84558C9.45546 9.77403 9.43006 9.70023 9.37334 9.65071L7.07159 7.641C6.93241 7.51948 7.00802 7.29979 7.19627 7.27872L10.3096 6.9302C10.3863 6.92161 10.4528 6.876 10.4851 6.80976L11.7983 4.12189Z"
      />
    </Svg>
  );
};

export default Icon;
