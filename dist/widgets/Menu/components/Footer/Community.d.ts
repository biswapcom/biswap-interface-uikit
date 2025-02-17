import { FC } from "react";
import { SocialLinks } from "../../types";
export interface CommunityProps {
  baseAwsUrl: string;
  iconSize?: string;
  menuVariant?: boolean;
  isFooter?: boolean;
  socialLinks?: SocialLinks;
}
export interface SocialWrapProps {
  menuVariant?: boolean;
}
declare const Community: FC<CommunityProps>;
export default Community;
