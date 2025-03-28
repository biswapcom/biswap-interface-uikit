import styled from "styled-components";
import { variant } from "styled-system";

// theme
import { scaleVariantsIconOnly } from "./theme";

// utils
import { PolymorphicComponent } from "../../util";

// components
import Button from "./Button";

// types
import { BaseButtonProps } from "./types";

interface IconButtonProps extends BaseButtonProps {
  $round?: boolean;
}

const IconButton: PolymorphicComponent<IconButtonProps> = styled(Button)<{ round?: boolean }>`
  //padding: 0;
  border-radius: ${({ round }) => round && "50%"};
  ${variant({
    prop: "scale",
    variants: scaleVariantsIconOnly,
  })}
`;

export default IconButton;
