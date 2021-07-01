/// <reference types="react" />
import { IconProps } from './generic-icon-types';
interface Settings {
    viewBox?: string;
    defaultWidth?: number;
    defaultHeight?: number;
    fillRule?: 'inherit' | 'nonzero' | 'evenodd';
}
export declare function declareIcon(path: string, settings?: Settings): ({ width, height, ...rest }: IconProps) => JSX.Element;
export {};
