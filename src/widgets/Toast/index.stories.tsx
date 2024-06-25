import React, { FC, useState } from "react";
import { sample } from "lodash";

// types
import { AlertVariants, ColoredVariants } from "../../components/Alert";
import { ColoredToastProps, Toast } from "./types";

// components
import Button from "../../components/Button/Button";
import ToastContainer from "./ToastContainer";
import { ColoredToasts } from "./ColoredToasts";
import { Box } from "../../components/Box";

export default {
  title: "Widgets/Toast",
  component: ToastContainer,
  argTypes: {},
};

export const Default: FC = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const handleClick = (description = "") => {
    const now = Date.now();
    const randomToast = {
      id: `id-${now}`,
      title: `Title: ${now}`,
      tweeterDescription:
        "Share your earnings on Biswap and win a part of $2530 in BSW Prize Pool for 253 winners every week! #biswap_earn",
      description,
      hash: "hash",
      type: AlertVariants[sample(Object.keys(AlertVariants))],
      url: `https://github.com`,
    };

    setToasts((prevToasts) => [randomToast, ...prevToasts]);
  };

  const handleRemove = (id: string) => {
    setToasts((prevToasts) =>
      prevToasts.filter((prevToast) => prevToast.id !== id)
    );
  };

  const ClearAllHandler = () => {
    setToasts([]);
  };

  return (
    <Box>
      <Button type="button" variant="primary" onClick={() => handleClick()}>
        Random Toast
      </Button>
      <Button
        type="button"
        variant="primary"
        ml="8px"
        onClick={() =>
          handleClick("This is a description to explain more about the toast")
        }
      >
        Random Toast with Description
      </Button>
      <ToastContainer
        clearAll={ClearAllHandler}
        toasts={toasts}
        onRemove={handleRemove}
        clearAllLabel="clear all"
        viewBscScanLabel="View bscscan"
      />
    </Box>
  );
};

export const WithAction: FC = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const ClearAllHandler = () => {
    setToasts([]);
  };

  const handleClick = () => {
    const now = Date.now();
    const randomToast = {
      id: `id-${now}`,
      title: `Title: ${now}`,
      description:
        "Share your earnings on Twitter and win a part of <strong>$2200 in BSW</strong> Prize Pool for 202 winners every week!",
      tweeterDescription:
        "Share your earnings on Biswap and win a part of $2530 in BSW Prize Pool for 253 winners every week! #biswap_earn",
      type: AlertVariants[sample(Object.keys(AlertVariants))],
    };

    setToasts((prevToasts) => [randomToast, ...prevToasts]);
  };

  const handleRemove = (id: string) => {
    setToasts((prevToasts) =>
      prevToasts.filter((prevToast) => prevToast.id !== id)
    );
  };

  return (
    <Box>
      <Button
        type="button"
        variant="success"
        ml="8px"
        onClick={() => handleClick()}
      >
        Random Toast with Action Button
      </Button>
      <ToastContainer
        clearAllLabel="clear all"
        viewBscScanLabel="View bscscn"
        clearAll={ClearAllHandler}
        toasts={toasts}
        onRemove={handleRemove}
      />
    </Box>
  );
};

export const ColoredToast: FC = () => {
  const [toasts, setToasts] = useState<ColoredToastProps[]>([]);

  const handleClick = () => {
    const now = Date.now();
    const randomToast = {
      id: `id-${now}`,
      title: "Link copied",
      type: ColoredVariants[sample(Object.keys(ColoredVariants))],
    };

    setToasts([randomToast]);
  };

  const handleRemove = () => setToasts([]);

  return (
    <Box>
      <Button
        type="button"
        variant="success"
        ml="8px"
        onClick={() => handleClick()}
      >
        Toast for blog
      </Button>
      <ColoredToasts toasts={toasts} onRemove={handleRemove} ttl={1000} />
    </Box>
  );
};
