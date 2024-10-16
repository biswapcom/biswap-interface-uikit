import type { BoxProps } from "../Box";

export default interface SliderProps extends BoxProps {
  min: number;
  max: number;
  value: number;
  onValueChanged: (newValue: number) => void;
  valueLabel?: string;
}
