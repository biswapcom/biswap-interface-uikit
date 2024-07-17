import React, { FC } from "react";
import { Meta } from "@storybook/react/types-6-0";

// components
import TableCardSkeleton from "./TableCardSkeleton";
import { Box, Grid } from "../Box";

// hooks
import { useMatchBreakpoints } from "../../contexts";

// types
import { SkeletonMode } from "./types";

export default {
  title: "Components/TableCardSkeleton",
  component: TableCardSkeleton,
  argTypes: {},
} as Meta;

export const Table: FC = () => {
  return (
    <Box maxWidth="1120px" p="48px">
      <TableCardSkeleton viewMode={SkeletonMode.TABLE} />
    </Box>
  );
};

export const Card: FC = () => {
  const { isMobile } = useMatchBreakpoints();

  return (
    <Grid maxWidth="1120px" p="48px" mb="56px" gridGap="24px" gridTemplateColumns={isMobile ? "1fr" : "repeat(3, 1fr)"}>
      <TableCardSkeleton />
    </Grid>
  );
};
