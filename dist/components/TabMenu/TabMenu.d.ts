import React from "react";
import { type TabBarProps } from "./types";
interface BarProps extends TabBarProps {
    onItemClick: (index: number) => void;
    activeIndex: number;
}
declare const TabMenu: React.FC<BarProps>;
export default TabMenu;
