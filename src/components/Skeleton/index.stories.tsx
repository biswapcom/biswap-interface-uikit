import React, { FC, useEffect, useState } from "react";

// components
import Skeleton from "./Skeleton";
import { Box } from "../Box";

// types
import { Animations, Variants } from "./types";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
  },
};

export const Default: FC = (args) => {
  return (
    <Box width="500px" mt="24px" ml="24px">
      <Skeleton {...args} />
      <Skeleton animation={Animations.WAVES} width="400px" height="32px" mt="16px" />
      <Skeleton animation={Animations.WAVES} width="400px" height="48px" mt="16px" variant={Variants.MD} />
    </Box>
  );
};

export const Avatar: FC = () => {
  return (
    <Box width="500px" mt="24px" ml="24px">
      <Skeleton width="40px" height="40px" variant={Variants.CIRCLE} />
      <Skeleton animation={Animations.WAVES} width="400px" height="32px" mt="16px" />
      <Skeleton animation={Animations.WAVES} width="400px" height="48px" mt="16px" variant={Variants.MD} />
    </Box>
  );
};

export const Animation: FC = () => {
  return (
    <Box width="500px" mt="24px" ml="24px">
      <Skeleton animation={Animations.WAVES} width="100px" height="200px" />
      <Skeleton animation={Animations.WAVES} width="400px" height="32px" mt="16px" />
      <Skeleton animation={Animations.WAVES} width="400px" height="48px" mt="16px" variant={Variants.MD} />
    </Box>
  );
};

export const Text: FC = (args) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1 style={{ width: 200 }}>{loading ? <Skeleton {...args} /> : "H1"}</h1>
    </>
  );
};
