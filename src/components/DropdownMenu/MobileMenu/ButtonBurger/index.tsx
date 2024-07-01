import React, { FC, useEffect, useState } from "react";

// hooks
import { useMatchBreakpoints } from "../../../../contexts";

// styles
import { StyledBurger } from "./Burger.styled";

const Burger: FC<{ open: boolean }> = ({ open }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const { isTablet } = useMatchBreakpoints();

  useEffect(() => {
    open && setIsLoaded(true);
  }, [open]);

  return (
    <StyledBurger aria-label="Toggle menu" isLoaded={isLoaded} aria-expanded={open} open={open} isTablet={isTablet}>
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

export default Burger;
