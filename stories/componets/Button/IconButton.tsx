import styled from "styled-components";
import { PolymorphicComponent } from "../../util";
import Button from "./Button";
import { BaseButtonProps } from "./types";

const IconButton: PolymorphicComponent<BaseButtonProps> = styled(Button)`
  padding: 0;
`;

export default IconButton;
