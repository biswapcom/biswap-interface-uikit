import { FC } from "react";
import { CarouselButtonsTypes } from "../../components/Carousel";
interface IProps<T, C, A> {
    data: T[];
    Slide: FC<C>;
    title?: string;
    slidesToScroll?: number;
    isDraggable?: boolean;
    withDots?: boolean;
    withNavButtons?: boolean;
    navButtonsType?: CarouselButtonsTypes;
    navPadding?: number;
    withNavButtonsHeader?: boolean;
    showNumberBlock?: boolean;
    position?: "start" | "center" | "end";
    isAutoplay?: boolean;
    breakpoints?: any;
    alignItem?: string;
    slideProps?: A;
    loop?: boolean;
    marginDots?: string;
    slideGap?: number;
    speed?: number;
    delay?: number;
    containerOverflow?: string;
}
type ReturnDataType = [() => JSX.Element, () => void, () => void, number];
export declare const useCarousel: ({ data, Slide, title, slidesToScroll, isDraggable, withDots, withNavButtons, navButtonsType, navPadding, withNavButtonsHeader, showNumberBlock, position, isAutoplay, alignItem, breakpoints, slideProps, loop, marginDots, slideGap, speed, delay, containerOverflow, }: IProps<any, any, any>) => ReturnDataType;
export {};
