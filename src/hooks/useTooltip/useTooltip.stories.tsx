import React, { FC, useState } from "react";
import styled from "styled-components";

// components
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import HelpIcon from "../../components/Svg/Icons/Help/Help";
import { Box, Flex, Grid } from "../../components/Box";

// hooks
import useTooltip from "./useTooltip";

const GridCell = styled(Flex)`
  align-items: center;
  justify-content: center;
`;

const ReferenceElement = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.twitter};
`;

const Container = styled(Grid)`
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(4, 200px);
  padding: 64px 120px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

const ExpandableCard = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: rgba(70, 70, 80, 0.2) 0 7px 29px 0;
`;

const ExpandableHeader = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  height: 40px;
  cursor: pointer;
`;

const Wrapper = styled(Box)`
  height: 800px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export default {
  title: "Hooks/useTooltip",
};

export const Placement: FC = () => {
  const {
    targetRef: targetRefTopStart,
    tooltip: tooltipTopStart,
    tooltipVisible: tooltipTopStartVisible,
  } = useTooltip("top-start", {
    placement: "top-start",
  });
  const { targetRef: targetRefTop, tooltip: tooltipTop } = useTooltip("top", {
    placement: "top",
  });
  const { targetRef: targetRefTopEnd, tooltip: tooltipTopEnd } = useTooltip("top-end", {
    placement: "top-end",
  });
  // LEFT
  const { targetRef: targetRefLeftStart, tooltip: tooltipLeftStart } = useTooltip("left-start", {
    placement: "left-start",
  });
  const { targetRef: targetRefLeft, tooltip: tooltipLeft } = useTooltip("left", {
    placement: "left",
  });
  const { targetRef: targetRefLeftEnd, tooltip: tooltipLeftEnd } = useTooltip("left-end", { placement: "left-end" });
  // RIGHT
  const { targetRef: targetRefRightStart, tooltip: tooltipRightStart } = useTooltip("right-start", {
    placement: "right-start",
  });
  const { targetRef: targetRefRight, tooltip: tooltipRight } = useTooltip("right", { placement: "right" });
  const { targetRef: targetRefRightEnd, tooltip: tooltipRightEnd } = useTooltip("right-end", {
    placement: "right-end",
  });
  // BOTTOM
  const { targetRef: targetRefBottomStart, tooltip: tooltipBottomStart } = useTooltip("bottom-start", {
    placement: "bottom-start",
  });
  const { targetRef: targetRefBottom, tooltip: tooltipBottom } = useTooltip("bottom", { placement: "bottom" });
  const { targetRef: targetRefBottomEnd, tooltip: tooltipBottomEnd } = useTooltip("bottom-end", {
    placement: "bottom-end",
  });

  return (
    <Container>
      <GridCell>
        <ReferenceElement ref={targetRefTopStart} />
        {tooltipTopStartVisible && tooltipTopStart}
      </GridCell>
      <GridCell>
        <ReferenceElement ref={targetRefTop} />
        {tooltipTop}
      </GridCell>
      <GridCell>
        <ReferenceElement ref={targetRefTopEnd} />
        {tooltipTopEnd}
      </GridCell>
      <GridCell>
        <ReferenceElement ref={targetRefLeftStart} />
        {tooltipLeftStart}
      </GridCell>
      <div />
      <GridCell>
        <ReferenceElement ref={targetRefRightStart} />
        {tooltipRightStart}
      </GridCell>
      <GridCell>
        <ReferenceElement ref={targetRefLeft} />
        {tooltipLeft}
      </GridCell>
      <div />
      <GridCell>
        <ReferenceElement ref={targetRefRight} />
        {tooltipRight}
      </GridCell>
      <GridCell>
        <ReferenceElement ref={targetRefLeftEnd} />
        {tooltipLeftEnd}
      </GridCell>
      <div />
      <GridCell>
        <ReferenceElement ref={targetRefRightEnd} />
        {tooltipRightEnd}
      </GridCell>
      <GridCell>
        <ReferenceElement ref={targetRefBottomStart} />
        {tooltipBottomStart}
      </GridCell>
      <GridCell>
        <ReferenceElement ref={targetRefBottom} />
        {tooltipBottom}
      </GridCell>
      <GridCell>
        <ReferenceElement ref={targetRefBottomEnd} />
        {tooltipBottomEnd}
      </GridCell>
    </Container>
  );
};

export const Triggers: FC = () => {
  const {
    tooltipVisible: tooltipVisibleClick,
    targetRef: targetRefClick,
    tooltip: tooltipClick,
  } = useTooltip("You clicked me!", { placement: "right", trigger: "click" });
  const {
    tooltipVisible: tooltipVisibleHover,
    targetRef: targetRefHover,
    tooltip: tooltipHover,
  } = useTooltip("Hovering", { placement: "right", trigger: "hover" });
  const {
    tooltipVisible: tooltipVisibleFocus,
    targetRef: targetRefFocus,
    tooltip: tooltipFocus,
  } = useTooltip("You focused me!", { placement: "right", trigger: "focus" });

  return (
    <Flex flexDirection="column" justifyContent="space-evenly" width="200px" height="300px">
      <Input ref={targetRefClick} placeholder="click" />
      {tooltipVisibleClick && tooltipClick}
      <Input ref={targetRefHover} placeholder="hover" />
      {tooltipVisibleHover && tooltipHover}
      <Input ref={targetRefFocus} placeholder="focus" />
      {tooltipVisibleFocus && tooltipFocus}
    </Flex>
  );
};

export const EventPropagationAndMobile: FC = () => {
  const [showExpandedClick, setShowExpandedClick] = useState<boolean>(false);
  const [showExpandedHover, setShowExpandedHover] = useState<boolean>(false);

  const {
    tooltipVisible: tooltipVisibleClick,
    targetRef: targetRefClick,
    tooltip: tooltipClick,
  } = useTooltip("You clicked on the help icon but the card did not expand", {
    placement: "right",
    trigger: "click",
  });
  const {
    tooltipVisible: tooltipVisibleHover,
    targetRef: targetRefHover,
    tooltip: tooltipHover,
  } = useTooltip("You hovered over the help icon", {
    placement: "right",
    trigger: "hover",
  });

  return (
    <Flex flexDirection="column" justifyContent="space-evenly" width="500px" height="600px">
      <Text>
        Events do not propagate to other elements in the tree. This helps to not cause unwanted bahaviour like expanding
        the cards when clicking on the tooltip target.
      </Text>
      <ExpandableCard onClick={() => setShowExpandedClick(!showExpandedClick)}>
        <ExpandableHeader>
          On click {showExpandedClick ? "▴" : "▾"}
          <span ref={targetRefClick}>
            <HelpIcon />
          </span>
        </ExpandableHeader>
        {showExpandedClick && <Box my="16px">You clicked on the header but not on the help icon inside the header</Box>}
        {tooltipVisibleClick && tooltipClick}
      </ExpandableCard>
      <Text>
        On touch screen devices hover interactions are also properly handled with `touchstart` and `touchend` events
        (`mouseenter` and `mouseleave` cause unwated behaviour on some mobile browsers).
      </Text>
      <ExpandableCard onClick={() => setShowExpandedHover(!showExpandedHover)}>
        <ExpandableHeader>
          On hover {showExpandedHover ? "▴" : "▾"}
          <span ref={targetRefHover}>
            <HelpIcon />
          </span>
        </ExpandableHeader>
        {showExpandedHover && (
          <Box my="16px">
            On mobile hovering (or more specifically touching and holding) over the help icon does not trigger expansion
            of this card
          </Box>
        )}
        {tooltipVisibleHover && tooltipHover}
      </ExpandableCard>
    </Flex>
  );
};

export const FineTuning: FC = () => {
  const {
    tooltipVisible: tooltipVisibleDefault,
    targetRef: targetRefDefault,
    tooltip: tooltipDefault,
  } = useTooltip("Just default tooltip", { placement: "top-start" });
  const {
    tooltipVisible: tooltipVisibleFineTuned,
    targetRef: targetRefFineTuned,
    tooltip: tooltipFineTuned,
  } = useTooltip("Didn't you know that 6 comes before 7?", {
    placement: "top-start",
    arrowPadding: { right: 221 },
    tooltipOffset: [0, -8],
  });

  return (
    <Box width="500px" height="500px">
      <Text fontSize="20px">Hover over inputs</Text>
      <Text bold>Default placement</Text>
      <Input ref={targetRefDefault} value="0x1234567890000" />
      {tooltipVisibleDefault && tooltipDefault}
      <Text bold>Fine tuned arrow placement</Text>
      <Input ref={targetRefFineTuned} value="0x1234576890000" />
      {tooltipVisibleFineTuned && tooltipFineTuned}
    </Box>
  );
};

export const Flipping: FC = () => {
  const { targetRef, tooltip } = useTooltip("All tooltips flip automatically when you scroll", { placement: "top" });

  return (
    <Box width="500px" height="2000px" p="200px">
      <ReferenceElement ref={targetRef} />
      {tooltip}
    </Box>
  );
};

export const ScreenEdges: FC = () => {
  const {
    targetRef: targetRefLeft,
    tooltip: tooltipLeft,
    tooltipVisible: leftVisible,
  } = useTooltip("I should not touch the edge of the screen", {
    placement: "top",
    trigger: "click",
  });
  const {
    targetRef: targetRefRight,
    tooltip: tooltipRight,
    tooltipVisible: rightVisible,
  } = useTooltip("I should not touch the edge of the screen", {
    placement: "top",
    trigger: "click",
  });
  const {
    targetRef: targetRefMiddle,
    tooltip: tooltipMiddle,
    tooltipVisible: middleVisible,
  } = useTooltip("I should not touch the edge of the screen", {
    placement: "top",
    trigger: "click",
  });

  return (
    <Wrapper>
      <Text>
        This story can be used to visually tooltip behavior when the target element is positioned close to the screen
        edge. Open this screen on the phone or in browser with responsive mode. Tooltips should not touch the screen
        edge.
      </Text>
      <Flex justifyContent="space-between" p="24px">
        <span ref={targetRefLeft}>
          <HelpIcon />
        </span>
        {leftVisible && tooltipLeft}
        <span ref={targetRefMiddle}>
          <HelpIcon />
        </span>
        {middleVisible && tooltipMiddle}
        <span ref={targetRefRight}>
          <HelpIcon />
        </span>
        {rightVisible && tooltipRight}
      </Flex>
    </Wrapper>
  );
};
