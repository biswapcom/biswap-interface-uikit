import React, { FC } from "react";
import styled from "styled-components";

// components
import SocialShareButton from "./SocialShareButton";
import { Flex } from "../Box";
import SocialShareButtonCircle from "./SocialShareButtonCircle";

// types
import { Socials } from "./types";

export default {
  title: "Components/SocialShareButton",
  component: SocialShareButton,
  argTypes: {},
};

const Row = styled(Flex)`
  width: 560px;
  padding: 14px 32px;
  background-color: ${({ theme }) => theme.colors.dark300};
`;

export const Default: FC = () => {
  return (
    <>
      <Row>
        <SocialShareButton
          social={Socials.TWITTER}
          link={`https://github.com`}
          message="Share your earnings on Biswap and win a part of $2530 in BSW Prize Pool for 253 winners every week! #biswap_sharing"
          mr="10px"
        />
        <SocialShareButton
          social={Socials.TELEGRAM}
          link={`https://github.com`}
          message="Share your earnings on Biswap and win a part of $2530 in BSW Prize Pool for 253 winners every week! #biswap_sharing"
        />
      </Row>
      <Row>
        <SocialShareButton
          social={Socials.TELEGRAM}
          width="100%"
          link={`https://github.com`}
          message="Share your earnings on Biswap and win a part of $2530 in BSW Prize Pool for 253 winners every week! #biswap_sharing"
        />
      </Row>
      <Row>
        <SocialShareButtonCircle
          social={Socials.TELEGRAM}
          label="Telegram"
          link={`https://github.com`}
          message="Share your earnings on Biswap and win a part of $2530 in BSW Prize Pool for 253 winners every week! #biswap_sharing"
          color="gray900"
        />
        <SocialShareButtonCircle
          social={Socials.TWITTER}
          label="Twitter"
          link={`https://github.com`}
          message="Share your earnings on Biswap and win a part of $2530 in BSW Prize Pool for 253 winners every week! #biswap_sharing"
        />
      </Row>
    </>
  );
};

export const Disabled: FC = () => {
  return (
    <Row>
      <SocialShareButton
        disabled
        social={Socials.TWITTER}
        link={`https://github.com`}
        message="Share your earnings on Biswap and win a part of $2530 in BSW Prize Pool for 253 winners every week! #biswap_sharing"
        mr="10px"
      />
      <SocialShareButton
        disabled
        social={Socials.TELEGRAM}
        link={`https://github.com`}
        message="Share your earnings on Biswap and win a part of $2530 in BSW Prize Pool for 253 winners every week! #biswap_sharing"
      />
    </Row>
  );
};
