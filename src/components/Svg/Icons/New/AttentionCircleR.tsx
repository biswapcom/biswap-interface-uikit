import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { DefaultTheme, useTheme } from "styled-components";

// utils
import { getThemeValue } from "../../../../util";

interface ThemedProps extends SvgProps {
  theme: DefaultTheme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();

  return (
    <Svg viewBox="0 0 80 80" fill="currentColor" {...props}>
      {/*<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
      <rect
        x="2"
        y="2"
        width="76"
        height="76"
        rx="38"
        // stroke={getColor({ color: props.color, theme })}
        // fill="none"
        stroke="currentColor"
        fill="none"
        strokeWidth="4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.666 40C21.666 29.9129 29.9122 21.6667 39.9993 21.6667C50.0865 21.6667 58.3327 29.9129 58.3327 40C58.3327 50.0871 50.0865 58.3333 39.9993 58.3333C29.9122 58.3333 21.666 50.0871 21.666 40ZM39.9993 25C31.7532 25 24.9993 31.7538 24.9993 40C24.9993 48.2462 31.7532 55 39.9993 55C48.2455 55 54.9993 48.2462 54.9993 40C54.9993 31.7538 48.2455 25 39.9993 25Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.0007 31.6667C40.9211 31.6667 41.6673 32.4129 41.6673 33.3333V41.6667C41.6673 42.5871 40.9211 43.3333 40.0007 43.3333C39.0802 43.3333 38.334 42.5871 38.334 41.6667V33.3333C38.334 32.4129 39.0802 31.6667 40.0007 31.6667Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.1582 46.6667C38.1582 45.6541 38.979 44.8333 39.9915 44.8333H40.0065C41.019 44.8333 41.8398 45.6541 41.8398 46.6667C41.8398 47.6792 41.019 48.5 40.0065 48.5H39.9915C38.979 48.5 38.1582 47.6792 38.1582 46.6667Z"
      />
    </Svg>
  );
};

export default Icon;

// <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <rect x="2" y="2" width="76" height="76" rx="38" stroke="#FFDB1C" strokeWidth="4" />
//   <path
//     fillRule="evenodd"
//     clipRule="evenodd"
//     d="M21.666 40C21.666 29.9129 29.9122 21.6667 39.9993 21.6667C50.0865 21.6667 58.3327 29.9129 58.3327 40C58.3327 50.0871 50.0865 58.3333 39.9993 58.3333C29.9122 58.3333 21.666 50.0871 21.666 40ZM39.9993 25C31.7532 25 24.9993 31.7538 24.9993 40C24.9993 48.2462 31.7532 55 39.9993 55C48.2455 55 54.9993 48.2462 54.9993 40C54.9993 31.7538 48.2455 25 39.9993 25Z"
//     fill="#FFDB1C"
//   />
//   <path
//     fillRule="evenodd"
//     clipRule="evenodd"
//     d="M40.0007 31.6667C40.9211 31.6667 41.6673 32.4129 41.6673 33.3333V41.6667C41.6673 42.5871 40.9211 43.3333 40.0007 43.3333C39.0802 43.3333 38.334 42.5871 38.334 41.6667V33.3333C38.334 32.4129 39.0802 31.6667 40.0007 31.6667Z"
//     fill="#FFDB1C"
//   />
//   <path
//     fillRule="evenodd"
//     clipRule="evenodd"
//     d="M38.1582 46.6667C38.1582 45.6541 38.979 44.8333 39.9915 44.8333H40.0065C41.019 44.8333 41.8398 45.6541 41.8398 46.6667C41.8398 47.6792 41.019 48.5 40.0065 48.5H39.9915C38.979 48.5 38.1582 47.6792 38.1582 46.6667Z"
//     fill="#FFDB1C"
//   />
// </svg>;
