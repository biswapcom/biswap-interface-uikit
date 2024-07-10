import React, { FC } from "react";

// components
import { Socials, SocialShareButton } from "../../components/SocialShareButton";
import { Flex } from "../../components/Box";

interface ToastActionProps {
  url?: string;
  tweeterDescription: string;
  withGift?: boolean;
}

const ToastAction: FC<ToastActionProps> = ({ tweeterDescription, url, withGift }) => {
  return (
    <Flex>
      <SocialShareButton
        social={Socials.TWITTER}
        message={tweeterDescription}
        link={url}
        mr="8px"
        height="32px"
        withGift={withGift}
      />
    </Flex>
  );
};

export default ToastAction;
