import { FC } from "react";
interface Props {
    href: string;
    logoSubtitle?: string;
    navigateToHome?: () => void;
}
declare const Logo: FC<Props>;
export default Logo;
