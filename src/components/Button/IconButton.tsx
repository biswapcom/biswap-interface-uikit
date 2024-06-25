import styled from "styled-components";

// utils
import { PolymorphicComponent } from "../../util";

// components
import Button from "./Button";

// types
import { BaseButtonProps } from "./types";

const IconButton: PolymorphicComponent<BaseButtonProps> = styled(Button)`
  padding: 0;
`;

export default IconButton;
