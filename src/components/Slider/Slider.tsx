import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { parseInt } from "lodash";

// components
import type { BoxProps } from "../Box";

// type
import type { Colors } from "../../theme";

// styles
import {
  BarBackground,
  BarProgress,
  BreakPointsWrap,
  BunnySlider,
  Divider,
  InfoBlock,
  InfoNode,
  PercentageAmount,
  PercentBanner,
  PercentText,
  PercentWrap,
  Point,
  RBPrice,
  SliderContainer,
  StyledInput,
  TitleText,
  Wrapper,
} from "./styles";

interface SliderProps extends BoxProps {
  value: number;
  onValueChanged: (newValue: number) => void;
  valueLabel?: string;
  checkPoints?: Checkpoint[];
  isRobiBoost?: boolean;
  bannerPosition?: "top" | "bottom";
  darkMode?: boolean;
}

interface Checkpoint {
  value: number;
  RB: string;
}

const MIN = 0;
const MAX = 100;

const INIT_CHECKPOINTS: Checkpoint[] = [
  { value: 0, RB: "1000" },
  { value: 25, RB: "2500" },
  { value: 50, RB: "5000" },
  { value: 75, RB: "7500" },
  { value: 90, RB: "10000" },
];

const Slider: FC<SliderProps> = ({
  value,
  onValueChanged,
  checkPoints = INIT_CHECKPOINTS,
  isRobiBoost,
  bannerPosition = "top",
  darkMode = false,
  ...props
}) => {
  const [percent, setPercent] = useState<Checkpoint>({ value: 0, RB: "0" });
  const [infoVisible, setInfoVisible] = useState<boolean>(false);

  const getRB = (percentage: number) => {
    const temp = checkPoints.map((item) => Math.abs(item.value - percentage));
    const minValue = Math.min(...temp);
    const res = temp.indexOf(minValue);

    return checkPoints[res].RB;
  };

  useEffect(() => {
    if (checkPoints?.length) {
      const RB = getRB(value);
      setPercent({ value, RB });
    }
    // eslint-disable-next-line
  }, [value, checkPoints]);

  const onMouseLeaveHandleChange = () => {
    const temp = checkPoints.map((item) => Math.abs(item.value - percent.value));
    const minValue = Math.min(...temp);
    const res = temp.indexOf(minValue);

    onValueChanged(checkPoints[res].value);
    setPercent(checkPoints[res]);
  };

  const getCirclesColor = (pointPercent: number): keyof Colors => {
    return percent.value >= pointPercent && pointPercent !== 90 ? "primary" : darkMode ? "dark400" : "gray300";
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = parseInt(target.value);

    switch (selectedValue) {
      case checkPoints[0].value: {
        onValueChanged(0);
        break;
      }
      case checkPoints[1].value: {
        onValueChanged(checkPoints[1].value);
        break;
      }
      case checkPoints[2].value: {
        onValueChanged(checkPoints[2].value);
        break;
      }
      case checkPoints[3].value: {
        onValueChanged(checkPoints[3].value);
        break;
      }
      case checkPoints[4].value: {
        onValueChanged(checkPoints[4].value);
        setPercent((prev) => ({ ...prev, value: checkPoints[4].value }));
        break;
      }
      default: {
        if (selectedValue <= checkPoints[4].value) setPercent((prev) => ({ ...prev, value: selectedValue }));
      }
    }
  };

  const progressPercentage = (percent.value / MAX) * 100;

  return (
    <Wrapper>
      <SliderContainer {...props}>
        <BunnySlider>
          <PercentWrap>
            {infoVisible && (
              <PercentBanner className="percent-info-banner" bannerPosition={bannerPosition} left={percent?.value}>
                <PercentText>{value}</PercentText>
                <Divider />
                <PercentText>{100 - value}</PercentText>
              </PercentBanner>
            )}
          </PercentWrap>
          <BarBackground />
          <BarProgress progress={progressPercentage} />
          <StyledInput
            onMouseDown={() => setInfoVisible(true)}
            onMouseUp={() => setInfoVisible(false)}
            onTouchStart={() => setInfoVisible(true)}
            onTouchEnd={() => setInfoVisible(false)}
            type="range"
            min={MIN}
            max={MAX}
            value={percent.value}
            onChange={handleChange}
            onClick={() => onMouseLeaveHandleChange()}
          />
          <BreakPointsWrap>
            {checkPoints?.map((item, index) => (
              <Point key={index.toString()} pointColor={getCirclesColor(item.value)} />
            ))}
          </BreakPointsWrap>
        </BunnySlider>
      </SliderContainer>
      <InfoBlock>
        <InfoNode>
          <TitleText>Fee return</TitleText>
          <PercentageAmount color="primary">{value}%</PercentageAmount>
        </InfoNode>
        <InfoNode>
          <PercentageAmount color="success">{100 - value}%</PercentageAmount>
          <TitleText>{isRobiBoost ? "Robi Boost" : "Squid Energy"}</TitleText>
        </InfoNode>
      </InfoBlock>
      <RBPrice>
        price 1 {isRobiBoost ? "RB" : "SE"} = ${percent.RB} volume
      </RBPrice>
    </Wrapper>
  );
};

export default Slider;
