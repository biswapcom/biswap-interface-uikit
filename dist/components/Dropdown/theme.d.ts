import { DropdownVariants } from "./types";
export declare const scaleVariantsContainer: {
    lg: {
        height: string;
    };
    md: {
        height: string;
    };
    sm: {
        height: string;
    };
};
export declare const scaleVariantsTop: {
    lg: {
        padding: string;
        fontSize: string;
        borderRadius: string;
        svg: {
            width: string;
            marginRight: string;
        };
        img: {
            marginRight: string;
        };
    };
    md: {
        padding: string;
        fontSize: string;
        borderRadius: string;
        svg: {
            width: string;
            marginRight: string;
        };
        img: {
            marginRight: string;
        };
    };
    sm: {
        padding: string;
        fontSize: string;
        borderRadius: string;
        svg: {
            width: string;
            marginRight: string;
        };
        img: {
            marginRight: string;
        };
    };
};
export declare const scaleVariantsContent: {
    lg: {
        borderRadius: string;
    };
    md: {
        borderRadius: string;
    };
    sm: {
        borderRadius: string;
    };
};
export declare const scaleVariantItem: {
    lg: {
        height: string;
        fontSize: string;
        padding: string;
        svg: {
            width: string;
            marginRight: string;
        };
        img: {
            marginRight: string;
        };
    };
    md: {
        height: string;
        fontSize: string;
        padding: string;
        svg: {
            width: string;
            marginRight: string;
        };
        img: {
            marginRight: string;
        };
    };
    sm: {
        height: string;
        fontSize: string;
        padding: string;
        svg: {
            width: string;
            marginRight: string;
        };
        img: {
            marginRight: string;
        };
    };
};
export declare const styleVariantsTop: {
    light: {
        borderColor: string;
        color: string;
        ".arrow": {
            fill: string;
        };
        ":hover": {
            color: string;
            borderColor: string;
        };
        "&.open": {
            color: string;
            borderColor: string;
            ":hover": {
                color: string;
                borderColor: string;
            };
            ".arrow": {
                fill: string;
            };
        };
    };
    dark: {
        borderColor: string;
        color: string;
        ".arrow": {
            fill: string;
        };
        ":hover": {
            color: string;
            borderColor: string;
        };
        "&.open": {
            color: string;
            borderColor: string;
            ":hover": {
                color: string;
                borderColor: string;
            };
            ".arrow": {
                fill: string;
            };
        };
    };
};
export declare const getVariantColor: (variant: DropdownVariants) => import("styled-components").RuleSet<object>;
