import { FC } from "react";
import { BSWPriceProps } from "../../types";
interface Props extends BSWPriceProps {
  buyBswHandler: () => void;
  buyBswLabel: string;
}
declare const FooterInfo: FC<Props>;
export default FooterInfo;
