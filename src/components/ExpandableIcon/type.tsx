import { BoxProps } from "../Box";

export enum VariantRotate {
  ROTATE_V1 = "transformV1",
  ROTATE_V2 = "transformV2",
}

export interface ExpandableIconProps extends BoxProps {
  isOpen: boolean;
  color?: string;
  width?: string;
  iconName: string;
  rotateType?: VariantRotate;
}
