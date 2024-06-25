import React, { FC, ReactNode } from "react";

//components
import { ChevronDownIcon, ChevronUpIcon } from "../Svg";
import Button from "./Button";
import IconButton from "./IconButton";

// types
import { Variants } from "./types";

interface Props {
  onClick?: () => void;
  expanded?: Boolean;
  children?: ReactNode;
}

export const ExpandableButton: FC<Props> = ({
  onClick,
  expanded = false,
  children,
}) => {
  return (
    <IconButton aria-label="Hide or show expandable content" onClick={onClick}>
      {children}
      {expanded ? (
        <ChevronUpIcon color="invertedContrast" />
      ) : (
        <ChevronDownIcon color="invertedContrast" />
      )}
    </IconButton>
  );
};

export const ExpandableLabel: FC<Props> = ({
  onClick,
  expanded = false,
  children,
}) => {
  return (
    <Button
      variant={Variants.TEXT}
      aria-label="Hide or show expandable content"
      onClick={onClick}
      endIcon={
        expanded ? (
          <ChevronUpIcon color="primary" />
        ) : (
          <ChevronDownIcon color="primary" />
        )
      }
    >
      {children}
    </Button>
  );
};
