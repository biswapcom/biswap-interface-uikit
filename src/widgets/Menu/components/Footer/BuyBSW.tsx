import React from "react";
import { Button, ButtonScales, ButtonVariants } from "../../../../components/Button";

export interface Props {
  buyBswHandler: () => void;
  buyBswLabel: string;
}

const BuyBSW: React.FC<Props> = ({ buyBswHandler, buyBswLabel }) => {
  return (
    <Button onClick={buyBswHandler} variant={ButtonVariants.DANGER} scale={ButtonScales.MD}>
      {buyBswLabel}
    </Button>
  );
};

export default BuyBSW;
