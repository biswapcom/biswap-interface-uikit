import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.1107 1.01123C10.6949 1.02299 8.35129 1.8358 6.44701 3.32231C4.54273 4.80882 3.18537 6.88505 2.58759 9.22571L1.85635 8.11986C1.78712 8.00408 1.69516 7.90353 1.58602 7.82425C1.47687 7.74498 1.35281 7.68863 1.2213 7.65861C1.08979 7.62859 0.953558 7.62551 0.820826 7.64957C0.688094 7.67362 0.561609 7.72431 0.448998 7.79857C0.336387 7.87284 0.239983 7.96914 0.1656 8.08167C0.0912171 8.1942 0.0403956 8.32063 0.0162004 8.45334C-0.00799469 8.58605 -0.00506219 8.72228 0.0248211 8.85382C0.0547044 8.98536 0.110919 9.10949 0.190076 9.21872L2.38779 12.5493C2.54045 12.7629 2.76553 12.9138 3.02114 12.9738C3.28213 13.0256 3.55303 12.9736 3.77635 12.829L7.07293 10.6083C7.18659 10.5373 7.28481 10.4442 7.36174 10.3345C7.43867 10.2247 7.49274 10.1007 7.52073 9.96961C7.54871 9.83856 7.55005 9.70322 7.52465 9.57164C7.49926 9.44006 7.44765 9.31494 7.3729 9.20372C7.29815 9.0925 7.20179 8.99746 7.08955 8.92425C6.97731 8.85104 6.85149 8.80116 6.71958 8.77758C6.58767 8.754 6.45236 8.7572 6.32171 8.78699C6.19106 8.81679 6.06773 8.87256 5.95908 8.951L4.45964 9.96195C4.85871 8.34202 5.70508 6.86688 6.90219 5.70483C8.0993 4.54278 9.59894 3.74062 11.23 3.38988C12.8611 3.03913 14.5579 3.15392 16.1269 3.72114C17.6958 4.28837 19.0738 5.28519 20.1035 6.59788C21.1332 7.91057 21.7732 9.48626 21.9504 11.1452C22.1277 12.8041 21.8351 14.4794 21.106 15.9801C20.3769 17.4807 19.2407 18.7461 17.827 19.6321C16.4133 20.518 14.779 20.9887 13.1107 20.9905C11.6805 20.9866 10.2724 20.6375 9.00607 19.9728C7.73975 19.3081 6.65266 18.3474 5.83721 17.1725C5.76418 17.0603 5.66936 16.964 5.55838 16.8892C5.4474 16.8144 5.32252 16.7627 5.19116 16.7371C5.05981 16.7115 4.92464 16.7126 4.7937 16.7402C4.66276 16.7679 4.53871 16.8215 4.42892 16.8981C4.31913 16.9746 4.22583 17.0724 4.15456 17.1857C4.0833 17.2989 4.03552 17.4254 4.01407 17.5575C3.99261 17.6896 3.99792 17.8246 4.02967 17.9546C4.06143 18.0847 4.11898 18.2069 4.19891 18.3143C5.5246 20.2255 7.42839 21.661 9.63048 22.4099C11.8326 23.1588 14.2168 23.1816 16.4328 22.4749C18.6488 21.7682 20.5797 20.3693 21.9417 18.4838C23.3036 16.5983 24.0248 14.3257 23.9993 11.9998C24.0092 9.09975 22.8683 6.31417 20.827 4.25415C18.7857 2.19413 16.0107 1.02788 13.1107 1.01123Z" />
      <path d="M13.0107 5.95605C12.7457 5.95605 12.4916 6.0613 12.3043 6.24864C12.117 6.43599 12.0117 6.69008 12.0117 6.95502V11.9998C12.016 12.2639 12.1206 12.5164 12.3044 12.7061L15.3013 15.7299C15.4894 15.915 15.7423 16.0193 16.0061 16.0206C16.27 16.022 16.5239 15.9201 16.7138 15.7369C16.9019 15.5504 17.0082 15.2968 17.0093 15.0319C17.0104 14.767 16.9063 14.5125 16.7198 14.3244L14.0096 11.5892V6.95502C14.0096 6.69008 13.9044 6.43599 13.717 6.24864C13.5297 6.0613 13.2756 5.95605 13.0107 5.95605Z" />
    </Svg>
  );
};

export default Icon;
