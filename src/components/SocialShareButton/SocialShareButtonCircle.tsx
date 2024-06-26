import React, { FC } from "react";
import { FlexboxProps } from "styled-system";

// config
import { socialLinks } from "./config";

// components
import { Flex } from "../Box";
import { IconComponent } from "../IconComponent";

// types
import { Socials } from "./types";

interface SocialShareButtonCircleProps extends FlexboxProps {
  social: Socials;
  label: string;
  link: string;
  message: string;
  color?: string;
  width?: string;
}

const SocialShareButtonCircle: FC<SocialShareButtonCircleProps> = ({
  social,
  label,
  link,
  message,
  color = "white",
  width = "24px",
  ...props
}) => {
  return (
    <Flex
      as="a"
      href={socialLinks[social]({ link, message })}
      target="_blank"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <IconComponent iconName={label} width={width} color={color} />
    </Flex>
  );
};

export default SocialShareButtonCircle;
