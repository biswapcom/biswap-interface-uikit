import React, { useState, useEffect, useCallback, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import { ThemeProvider, DefaultTheme } from "styled-components";

// theme
import { light, dark } from "../../theme";

// utils
import { isTouchDevice, getPortalRoot } from "../../util";

// components
import { StyledTooltip, Arrow } from "./StyledTooltip";

// types
import { TooltipOptions, TooltipRefs } from "./types";

// hooks
import { useMatchBreakpoints } from "../../contexts";

const invertTheme = (currentTheme: DefaultTheme) => {
  if (currentTheme.isDark) {
    return light;
  }
  return dark;
};

const useTooltip = (content: ReactNode, options: TooltipOptions): TooltipRefs => {
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [tooltipElement, setTooltipElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const { isMobile, isTablet } = useMatchBreakpoints();
  const {
    placement = "auto",
    trigger = isMobile || isTablet ? "click" : "hover",
    tooltipPadding = { left: 16, right: 16 },
    tooltipOffset = [0, 10],
    disableStopPropagation,
    openedByDefault = false,
    isLight = false,
  } = options;

  const [defaultVisible, setDefaultVisible] = useState<boolean>(openedByDefault);

  const isHoveringOverTooltip = useRef<boolean>(false);
  const hideTimeout = useRef<number>();

  const hideTooltip = useCallback(
    (e: Event) => {
      const hide = () => {
        e.stopPropagation();
        e.preventDefault();
        setVisible(false);
      };

      if (trigger === "hover") {
        if (hideTimeout.current) {
          window.clearTimeout(hideTimeout.current);
        }

        if (e.target === tooltipElement) {
          isHoveringOverTooltip.current = false;
        }

        if (!isHoveringOverTooltip.current) {
          hideTimeout.current = window.setTimeout(() => {
            if (!isHoveringOverTooltip.current) {
              hide();
            }
          }, 100);
        }
      } else {
        hide();
      }
    },
    [tooltipElement, trigger]
  );

  const showTooltip = useCallback(
    (e: Event) => {
      e.stopPropagation();
      e.preventDefault();
      setVisible(true);

      if (trigger === "hover") {
        if (e.target === targetElement) {
          clearTimeout(hideTimeout.current);
        }

        if (e.target === tooltipElement) {
          isHoveringOverTooltip.current = true;
        }
      }
    },
    [tooltipElement, targetElement, trigger]
  );

  const toggleTooltip = useCallback(
    (e: Event) => {
      !disableStopPropagation && e.stopPropagation();
      setVisible(!visible);
    },
    [visible, disableStopPropagation]
  );

  const stopPropagationHandle = (e: Event) => e.stopPropagation();

  useEffect(() => {
    tooltipElement?.addEventListener("click", stopPropagationHandle);

    return () => {
      tooltipElement?.removeEventListener("click", stopPropagationHandle);
    };
  }, [tooltipElement]);

  useEffect(() => {
    if (targetElement === null || trigger !== "hover") return undefined;

    if (isTouchDevice()) {
      targetElement.addEventListener("touchstart", showTooltip);
      targetElement.addEventListener("touchend", hideTooltip);
    } else {
      targetElement.addEventListener("mouseenter", showTooltip);
      targetElement.addEventListener("mouseleave", hideTooltip);
    }

    return () => {
      targetElement.removeEventListener("touchstart", showTooltip);
      targetElement.removeEventListener("touchend", hideTooltip);
      targetElement.removeEventListener("mouseenter", showTooltip);
      targetElement.removeEventListener("mouseleave", showTooltip);
    };
  }, [trigger, targetElement, hideTooltip, showTooltip]);

  useEffect(() => {
    if (tooltipElement === null || trigger !== "hover") return undefined;

    tooltipElement.addEventListener("mouseenter", showTooltip);
    tooltipElement.addEventListener("mouseleave", hideTooltip);

    return () => {
      tooltipElement.removeEventListener("mouseenter", showTooltip);
      tooltipElement.removeEventListener("mouseleave", hideTooltip);
    };
  }, [trigger, tooltipElement, hideTooltip, showTooltip]);

  useEffect(() => {
    if (targetElement === null || trigger !== "click") return undefined;

    targetElement.addEventListener("click", toggleTooltip);

    return () => targetElement.removeEventListener("click", toggleTooltip);
  }, [trigger, targetElement, visible, toggleTooltip]);

  useEffect(() => {
    if (targetElement === null || trigger !== "click" || !defaultVisible) return undefined;

    targetElement.addEventListener("click", showTooltip);
    targetElement.click();
    setDefaultVisible(false);

    return () => targetElement.removeEventListener("click", showTooltip);
  }, [trigger, targetElement, visible, defaultVisible, showTooltip]);

  useEffect(() => {
    if (trigger !== "click") return undefined;

    const handleClickOutside = ({ target }: Event) => {
      if (target instanceof Node) {
        if (
          tooltipElement != null &&
          targetElement != null &&
          !tooltipElement.contains(target) &&
          !targetElement.contains(target)
        ) {
          setVisible(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [trigger, targetElement, tooltipElement]);

  useEffect(() => {
    if (targetElement === null || trigger !== "focus") return undefined;

    targetElement.addEventListener("focus", showTooltip);
    targetElement.addEventListener("blur", hideTooltip);

    return () => {
      targetElement.removeEventListener("focus", showTooltip);
      targetElement.removeEventListener("blur", hideTooltip);
    };
  }, [trigger, targetElement, showTooltip, hideTooltip]);

  const { styles, attributes } = usePopper(targetElement, tooltipElement, {
    placement,
    modifiers: [
      {
        name: "arrow",
        options: { element: arrowElement },
      },
      { name: "offset", options: { offset: tooltipOffset } },
      { name: "preventOverflow", options: { padding: tooltipPadding } },
    ],
  });

  const tooltip = (
    <StyledTooltip ref={setTooltipElement} style={styles.popper} isLight={isLight} {...attributes.popper}>
      <ThemeProvider theme={invertTheme}>{content}</ThemeProvider>
      <Arrow ref={setArrowElement} isLight={isLight} style={styles.arrow} />
    </StyledTooltip>
  );

  const portal = getPortalRoot();
  const tooltipInPortal = portal ? createPortal(tooltip, portal) : null;

  return {
    targetRef: setTargetElement,
    tooltip: tooltipInPortal ?? tooltip,
    tooltipVisible: visible,
  };
};

export default useTooltip;
