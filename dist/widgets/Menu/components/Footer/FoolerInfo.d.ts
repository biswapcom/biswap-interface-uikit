import { FC } from "react";
import { BSWPriceProps, FooterStatisticProps } from "../../types";
interface Props extends BSWPriceProps, FooterStatisticProps {
    registerToken: () => void;
    buyBswHandler: () => void;
    baseAwsUrl: string;
    buyBswLabel: string;
}
declare const FooterInfo: FC<Props>;
export default FooterInfo;
