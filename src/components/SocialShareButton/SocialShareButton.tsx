import React, { FC } from "react";
import styled, { useTheme } from "styled-components";

// components
import { Button } from "../Button";
import { Box, Flex } from "../Box";
import { Image } from "../Image";

// types
import { type SocialShareButtonTypes, Socials } from "./types";
import { ButtonScales } from "../Button";

// config
import { socialLinks, socialStyles } from "./config";

// @ts-ignore
import gift from "./shared/gift.png";

const Wrapper = styled(Box)<{ disabled?: boolean; width: string }>`
  position: relative;
  width: ${({ width }) => width ?? "auto"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: opacity .3s ease-in-out;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.3 : 0.84)};
  },
`;

const GiftWrap = styled(Flex)<{ withGift?: boolean }>`
  position: absolute;
  right: 0;
  bottom: 0;
  display: ${({ withGift }) => (withGift ? "block" : "none")};
  width: 37px;
  height: 32px;
`;

const SocialShareButton: FC<SocialShareButtonTypes> = ({
  social = Socials.TELEGRAM,
  link,
  name,
  message,
  scale = ButtonScales.LG,
  target = "_blank",
  width = "auto",
  withGift,
  disabled,
  ...props
}) => {
  const theme = useTheme();
  const defaultName = social.charAt(0).toUpperCase() + social.slice(1);
  const { icon, backgroundColor } = socialStyles({ theme, disabled })[social];

  return (
    <Wrapper disabled={disabled} width={width} {...props}>
      <Button
        as="a"
        href={socialLinks[social]({ link, message })}
        scale={scale}
        startIcon={icon}
        style={{ backgroundColor, pointerEvents: disabled ? "none" : "auto" }}
        target={target}
        width="100%"
        external
        pr={withGift ? "20px" : "16px"}
        {...props}
      >
        {name || defaultName}
      </Button>
      <GiftWrap withGift={withGift}>
        <Image width={37} height={32} src={gift} />
      </GiftWrap>
    </Wrapper>
  );
};

export default SocialShareButton;
