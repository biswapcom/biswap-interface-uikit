import React, { FC, useCallback, useEffect } from "react";
import styled from "styled-components";
import { TransitionGroup } from "react-transition-group";

//components
import ColoredToastItem from "./ColoredToastItem";
import { Box } from "../../../components/Box";

//types
import { ColoredToastProps, ColoredToastContainerProps } from "../types";

interface ToastContainerProps extends ColoredToastContainerProps {
  toasts: ColoredToastProps[];
}

const StyledToastContainer = styled(Box)`
  .enter,
  .appear {
    opacity: 0.01;
  }

  .enter.enter-active,
  .appear.appear-active {
    opacity: 1;
    transition: opacity 0.25s ease-in;
  }

  .exit {
    opacity: 1;
  }

  .exit.exit-active {
    opacity: 0.01;
    transition: opacity 0.25s ease-out;
  }
`;

const ColoredToasts: FC<ToastContainerProps> = ({ toasts, onRemove, ttl = 5000 }) => {
  const handleRemove = useCallback(() => {
    onRemove(toasts[0]?.id);
  }, [toasts, onRemove]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      handleRemove();
    }, ttl);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [handleRemove]);

  return (
    <StyledToastContainer>
      <TransitionGroup>
        {toasts.map((toast) => (
          <ColoredToastItem key={toast.id} toast={toast} ttl={ttl} style={{ bottom: "50px" }} />
        ))}
      </TransitionGroup>
    </StyledToastContainer>
  );
};

export default ColoredToasts;
