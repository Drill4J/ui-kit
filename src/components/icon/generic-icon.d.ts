/// <reference types="react" />
interface GenericIconProps {
    className?: string;
    path: string;
    viewBox: string;
    width?: number;
    height?: number;
    transform?: string;
    rotate?: number;
    fillRule?: 'inherit' | 'nonzero' | 'evenodd';
    onClick?: () => void;
}
export declare const GenericIcon: import("styled-components").StyledComponent<({ path, rotate, ...rest }: GenericIconProps) => JSX.Element, any, {}, never>;
export {};
