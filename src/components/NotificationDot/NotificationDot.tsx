import React, { cloneElement, Children, ReactElement, FC } from "react";
import styled from "styled-components";

import type { NotificationDotProps, DotProps } from "./types";

const NotificationDotRoot = styled.span`
  position: relative;
  display: inline-flex;
`;

const Dot = styled.span<DotProps>`
  position: absolute;
  top: 0;
  right: 0;
  display: ${({ show }) => (show ? "inline-flex" : "none")};
  width: 10px;
  height: 10px;
  border: 2px solid ${({ theme }) => theme.colors.dark900};
  border-radius: 50%;
  background-color: ${({ theme, color }) => theme.colors[color]};
  pointer-events: none;
`;

const NotificationDot: FC<NotificationDotProps> = ({ show = false, color = "secondary", children, ...props }) => (
  <NotificationDotRoot>
    {Children.map(children, (child: ReactElement) => cloneElement(child, props))}
    <Dot show={show} color={color} />
  </NotificationDotRoot>
);

export default NotificationDot;
