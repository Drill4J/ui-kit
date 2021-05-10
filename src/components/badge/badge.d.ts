/// <reference types="react" />
interface Props {
    className?: string;
    children?: React.ReactNode;
    bold?: boolean;
    color?: 'green' | 'orange' | 'gray' | 'red';
}
export declare const Badge: import("styled-components").StyledComponent<"span", any, Props, never>;
export {};
