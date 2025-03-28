import { PolymorphicComponent } from "../../util";
import { BaseButtonProps } from "./types";
interface IconButtonProps extends BaseButtonProps {
    $round?: boolean;
}
declare const IconButton: PolymorphicComponent<IconButtonProps>;
export default IconButton;
