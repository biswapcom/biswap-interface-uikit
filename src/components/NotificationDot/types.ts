import { ReactElement } from "react";
import { Colors } from "../../theme";

export interface NotificationDotProps {
  show?: boolean;
  color?: keyof Colors;
  children: ReactElement | ReactElement[];
}

export interface DotProps {
  show: boolean;
  color: keyof Colors;
}
