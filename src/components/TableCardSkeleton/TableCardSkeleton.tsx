import React, { FC } from "react";

// components
import { Box } from "../Box";
import { Skeleton } from "../Skeleton";

// types
import { SkeletonMode } from "./types";
import { SkeletonAnimation } from "../Skeleton";

interface IProps {
  viewMode?: SkeletonMode;
  number?: number;
  tableHeight?: string;
  cardHeight?: string;
}

const TableCardSkeleton: FC<IProps> = ({
  viewMode = SkeletonMode.CARD,
  number = 6,
  tableHeight = "72px",
  cardHeight = "352px",
}): JSX.Element => {
  if (viewMode === SkeletonMode.CARD) {
    return (
      <>
        {Array.from({ length: number }, (v, i) => i).map((item) => (
          <Box key={item.toString()} overflow="hidden" borderRadius="16px">
            <Skeleton animation={SkeletonAnimation.WAVES} height={cardHeight} width="100%" />
          </Box>
        ))}
      </>
    );
  }

  return (
    <Box overflow="hidden" borderRadius="16px">
      {Array.from({ length: number }, (v, i) => i).map((item) => (
        <Skeleton
          key={item.toString()}
          animation={SkeletonAnimation.WAVES}
          height={tableHeight}
          width="100%"
          my="2px"
        />
      ))}
    </Box>
  );
};

export default TableCardSkeleton;
