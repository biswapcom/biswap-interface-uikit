import { FC } from "react";
interface ToastActionProps {
    url?: string;
    tweeterDescription: string;
    withGift?: boolean;
}
declare const ToastAction: FC<ToastActionProps>;
export default ToastAction;
